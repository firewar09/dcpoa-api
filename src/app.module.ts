import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FileModule } from './file/file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { GadinhosModule } from './gadinhos/gadinhos.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // pasta uploads na raiz do projeto
      serveRoot: '/uploads', // caminho base para servir os arquivos
    }),
    FileModule,
  ],
})

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GadinhosModule,
  ],
})

export class AppModule {}