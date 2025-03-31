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
  UseGuards,
} from '@nestjs/common';
import { AgendaService } from '../services/agenda.service';
import { Agenda } from '../entities/agenda.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Agenda')
@Controller('/agenda')
@ApiBearerAuth()
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Agenda[]> {
    return this.agendaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number) {
    return this.agendaService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() agenda: Agenda): Promise<Agenda> {
    return this.agendaService.create(agenda);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() agenda: Agenda): Promise<Agenda> {
    return this.agendaService.update(agenda);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.agendaService.delete(id);
  }
}
