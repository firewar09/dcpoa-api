import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // pasta uploads na raiz do projeto
      serveRoot: '/uploads', // caminho base para servir os arquivos
    }),
    FileModule,
  ],
})
export class AppModule {}