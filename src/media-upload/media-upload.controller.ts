import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MediaUploadService } from './media-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('media-upload')
export class MediaUploadController {
  constructor(private readonly mediaUploadService: MediaUploadService) {}
  @HttpCode(200)
  @Post('avatar')
  @Auth()
  @UseInterceptors(
    FileInterceptor('file', { limits: { fileSize: 5 * 1024 * 1024 } }), // 5 MB limit
  )
  async uploadAvatar(@UploadedFile() file: Express.Multer.File) {
    const uploaded = await this.mediaUploadService.saveAvatar(file);
    return uploaded;
  }
}
