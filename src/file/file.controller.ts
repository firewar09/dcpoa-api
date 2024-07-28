import { Controller, Post, UseInterceptors, UploadedFile, Logger } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { Express } from 'express';

@Controller('file')
export class FileController {
  private readonly logger = new Logger(FileController.name);

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, filename);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    this.logger.log(`File uploaded: ${file.originalname}`);
    return {
      message: 'File uploaded successfully!',
      filePath: `/uploads/${file.filename}`,
    };
  }
}