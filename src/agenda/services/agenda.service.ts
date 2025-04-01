import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agenda } from '../entities/agenda.entity';

@Injectable()
export class AgendaService {
  constructor(
    @InjectRepository(Agenda)
    private readonly agendaRepository: Repository<Agenda>,
  ) {}

  // Listar todos os eventos
  async findAll(): Promise<Agenda[]> {
    return await this.agendaRepository.find();
  }

  // Buscar evento por ID
  async findById(id: number): Promise<Agenda> {
    const evento = await this.agendaRepository.findOne({ where: { id } });
    if (!evento) {
      throw new HttpException(`Evento com ID ${id} não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return evento;
  }

  // Criar um novo evento
  async create(agenda: Agenda): Promise<Agenda> {
    return await this.agendaRepository.save(agenda);
  }

  // Atualizar um evento existente
  async update(agenda: Agenda): Promise<Agenda> {
    const eventoExistente = await this.findById(agenda.id);
    const atualizado = Object.assign(eventoExistente, agenda);
    return await this.agendaRepository.save(atualizado);
  }

  // Excluir um evento
  async delete(id: number): Promise<void> {
    const evento = await this.findById(id);
    await this.agendaRepository.remove(evento);
  }
}
