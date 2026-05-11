import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'argon2';
import { EmailService } from 'src/email/email.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { generateToken } from 'src/utils/generate-token.utils';

@Injectable()
export class AuthAccountService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
    private jwt: JwtService,
    private usersService: UsersService,
    private emailService: EmailService,
  ) {}
  async verifyEmail(token: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        emailVerificationToken: token,
        emailVerificationExpiresAt: {
          gt: new Date(),
        },
      },
    });
    if (!user) {
      throw new BadRequestException(
        'Invalid or expired email verification token',
      );
    }
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        isEmailVerified: true,
        emailVerificationToken: null,
        emailVerificationExpiresAt: null,
      },
    });
    return true;
  }
  async requestPasswordReset(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return true;

    const resetToken = generateToken();

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpiresAt: new Date(Date.now() + 3600000), // 1 hour
      },
    });
    const resetUrl = `${this.configService.get('CLIENT_URL')}/reset-password?token=${resetToken}`;
    await this.emailService.sendResetPasswordEmail(user.email, resetUrl);
    return true;
  }
  async resetPassword(token: string, newPassword: string) {
    if (!token || !newPassword) {
      throw new BadRequestException('Token and new password are required');
    }

    const user = await this.prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExpiresAt: {
          gte: new Date(),
        },
      },
    });
    if (!user) {
      throw new BadRequestException('Invalid or expired password reset token');
    }
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: await hash(newPassword),
        resetPasswordToken: null,
        resetPasswordExpiresAt: null,
      },
    });
    return true;
  }
}
