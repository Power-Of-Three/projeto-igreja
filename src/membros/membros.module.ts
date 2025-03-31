import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembroService } from './service/membros.service';
import { MembrosController } from './controller/membros.controller';
import { Membros } from './entities/membros.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Membros])],
  providers: [MembroService],
  controllers: [MembrosController],
  exports: [],
})
export class MembrosModule {}
