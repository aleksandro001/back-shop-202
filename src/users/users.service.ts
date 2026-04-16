import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { Prisma } from 'prisma/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserUpdateInput } from './inputs/user-update.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

async findAll() {
    return this.prisma.user.findMany();
  }

async findById(id: string) {
    return this.prisma.user.findUnique({ 
      where: { id },
    include: {
      measurement: true,
      profile: true
    }
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({ 
      where: { 
        email: {
          equals: email,
          mode: 'insensitive'
    } } });
  }
  async updateProfile(id: string, input: UserUpdateInput  ) {
    const { profile, measurement, password, ...data } = input;
    const updateMeasurement: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput> = measurement ? {measurement: {
      upsert: {
        create: measurement,
        update: measurement
      }
    }} : {};

    const hashedPassword = 
    password && typeof password === 'string' ? {
      password: await hash(password)
    } : {}

    const userData: Prisma.UserUpdateInput = {
      ...updateMeasurement,
      ...hashedPassword,
      ...(data.email !== undefined ? { email: data.email } : {}),
    };

    if (profile) {
      const existingUser = await this.prisma.user.findUnique({
        where: { id },
        select: {
          profile: {
            select: {
              id: true,
            },
          },
        },
      });

      if (!existingUser) {
        throw new BadRequestException('User not found');
      }

      if (existingUser.profile) {
        userData.profile = {
          update: profile,
        };
      } else {
        if (!profile.fullName) {
          throw new BadRequestException(
            'fullName is required when creating profile',
          );
        }

        const { fullName, ...restProfile } = profile;

        userData.profile = {
          create: {
            fullName,
            ...restProfile,
          },
        };
      }
    }

    return this.prisma.user.update({
      where: { id },
      data: userData,
      include: {
        measurement: true,
        profile: true
      }
    })
  }
}
