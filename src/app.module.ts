import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FileModule } from './file/file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { GadinhosModule } from './gadinhos/gadinhos.module';
import { Gadinho } from './gadinhos/gadinho.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // pasta uploads na raiz do projeto
      serveRoot: '/uploads', // caminho base para servir os arquivos
    }),
    FileModule,

      TypeOrmModule.forRoot({ type: 'postgres',
        host: 'localhost',
        port: 5432,
        schema: 'public',
        username: 'postgres',
        password: 'teste1234',
        database: 'postgres',
        entities: [Gadinho],
        synchronize: false,}),  // Use a configuração importada
      GadinhosModule,
  ],
})

export class AppModule {}