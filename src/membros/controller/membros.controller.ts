import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { MembroService } from '../service/membros.service';
import { Membros } from '../entities/membros.entity';

@Controller('membros')
export class MembrosController {
  constructor(private readonly membroservice: MembroService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Membros[]> {
    return this.membroservice.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Membros> {
    return this.membroservice.findById(id);
  }
  @Get('/nomes/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Membros[]> {
    return this.membroservice.findByNome(nome);
  }

  @Put('/:update')
  @HttpCode(HttpStatus.OK)
  updateMembro(@Body() membro: Membros): Promise<Membros> {
    return this.membroservice.updateMembro(membro);
  }

  @Post('/:criar')
  @HttpCode(HttpStatus.OK)
  criarMembro(@Body() membro: Membros): Promise<Membros> {
    return this.membroservice.createMembro(membro);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteMembro(@Param('id', ParseIntPipe) id: number) {
    return this.membroservice.deleteMembro(id);
  }
}
