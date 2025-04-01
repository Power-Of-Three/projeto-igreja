import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevService } from './data/services/dev.service';
import { ProdService } from './data/services/prod.service';
import { AgendaModule } from './agenda/agenda.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
        // useClass: ProdService,
        useClass: DevService,
      imports: [ConfigModule],
    }),
    // AuthModule,
    AgendaModule,
    PostagemModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
