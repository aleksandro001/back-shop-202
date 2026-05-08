import { Injectable } from '@nestjs/common';
import { ResendService } from 'nestjs-resend';

@Injectable()
export class EmailService {
  constructor(private readonly resend: ResendService) {}
  private async send(to: string, subject: string, html: string) {
    return this.resend.send({
      from: 'Your app <noreply@yourapp.com>',
      to,
      subject,
      html,
    });
  }
  async sendVerificationEmail(to: string, url: string) {}
  async sendResetPasswordEmail(to: string, url: string) {}
}
