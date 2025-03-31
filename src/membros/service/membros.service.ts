import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MembrosEntity } from '../entities/membros.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class MembroService {
  constructor(
    @InjectRepository(MembrosEntity)
    private membrosRepository: Repository<MembrosEntity>,
  ) {}

  async findAll(): Promise<MembrosEntity[]> {
    return await this.membrosRepository.find();
  }

  async findById(id: number): Promise<MembrosEntity> {
    const membro = await this.membrosRepository.findOne({
      where: {
        id,
      },
    });
    if (!membro)
      throw new HttpException('Membro não encontrado', HttpStatus.NOT_FOUND);
    return membro;
  }

  async findByNome(nome: string): Promise<MembrosEntity[]> {
    const membroBuscadoPorNome = await this.membrosRepository.find({
      where: {
        nomeMembro: ILike(`%${nome}%`),
      },
    });
    if (membroBuscadoPorNome.length === 0)
      throw new HttpException('Membro não encontrado', HttpStatus.NOT_FOUND);
    return membroBuscadoPorNome;
  }

  async createMembro(membro: MembrosEntity): Promise<MembrosEntity> {
    return await this.membrosRepository.save(membro);
  }

  async updateMembro(membro: MembrosEntity): Promise<MembrosEntity> {
    await this.findById(membro.id);
    return await this.membrosRepository.save(membro);
  }

  async deleteMembro(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.membrosRepository.delete(id);
  }
}
