import { Injectable } from '@nestjs/common';
import { IUploadResponse } from './upload-response.types';
import { writeFile, ensureDir } from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';
import { path } from 'app-root-path';
import iconv from 'iconv-lite';
import 'multer';

@Injectable()
export class MediaUploadService {
  async saveAvatar(file: Express.Multer.File): Promise<IUploadResponse> {
    const folder = 'avatars';
    const uploadFolder = `${path}/uploads/${folder}`;

    await ensureDir(uploadFolder);

    const original = iconv.decode(
      Buffer.from(file.originalname, 'binary'),
      'utf-8',
    );
    const safeName = original.replace(/[^\w.-]+/g, '-').toLowerCase();
    const name = `${uuidv4().slice(0, 5)}-${safeName}`;

    await writeFile(`${uploadFolder}/${name}`, file.buffer);

    const url = `/uploads/${folder}/${name}`;

    return { url, name };
  }
}
