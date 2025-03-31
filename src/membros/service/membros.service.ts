import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Membros } from '../entities/membros.entity';

@Injectable()
export class MembroService {
  constructor(
    @InjectRepository(Membros)
    private membrosRepository: Repository<Membros>,
  ) {}

  async findAll(): Promise<Membros[]> {
    return await this.membrosRepository.find();
  }

  async findById(id: number): Promise<Membros> {
    const membro = await this.membrosRepository.findOne({
      where: {
        id,
      },
    });
    if (!membro)
      throw new HttpException('Membro não encontrado', HttpStatus.NOT_FOUND);
    return membro;
  }

  async findByNome(nome: string): Promise<Membros[]> {
    const membroBuscadoPorNome = await this.membrosRepository.find({
      where: {
        nomeMembro: ILike(`%${nome}%`),
      },
    });
    if (membroBuscadoPorNome.length === 0)
      throw new HttpException('Membro não encontrado', HttpStatus.NOT_FOUND);
    return membroBuscadoPorNome;
  }

  async createMembro(membro: Membros): Promise<Membros> {
    return await this.membrosRepository.save(membro);
  }

  async updateMembro(membro: Membros): Promise<Membros> {
    await this.findById(membro.id);
    return await this.membrosRepository.save(membro);
  }

  async deleteMembro(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.membrosRepository.delete(id);
  }
}
