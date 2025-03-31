import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      // useClass: ProdService,
      // useClass: DevService,
      imports: [ConfigModule],
    }),
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
