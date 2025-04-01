import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrimaryColumnOptions, Repository } from 'typeorm';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';
import { Admin } from '../entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private bcrypt: Bcrypt,
  ) {}

  async findAll(): Promise<Admin[]> {
    return await this.adminRepository.find({
    //   relations: {
    //     //postagem: true,
    //     agenda: true,
    //   },
    // });
  }
  async findById(id: number): Promise<Admin> {
    const admin = await this.adminRepository.findOne({
      where: {
        id,
      },
      relations: {
        //postagem: true,
        agenda: true,
      },
    });

    if (!admin)
      throw new HttpException(
        'Administrador não encontrado(a)!',
        HttpStatus.NOT_FOUND,
      );

    return admin;
  }

  async findByAdmin(admin: string): Promise<Admin | undefined> {
    return await this.adminRepository.findOne({
      where: {
        admin: admin,
      },
    });
  }

  async create(admin: Admin): Promise<Admin> {
    const buscaAdmin = await this.findByAdmin(admin.admin);

    if (buscaAdmin)
      throw new HttpException(
        'O Administrador já existe!',
        HttpStatus.BAD_REQUEST,
      );

    admin.senha = await this.bcrypt.criptografarSenha(admin.senha);

    return await this.adminRepository.save(admin);
  }

  async update(admin: Admin): Promise<Admin> {
    await this.findById(admin.id);

    const buscaAdmin = await this.findByAdmin(admin.admin);

    if (buscaAdmin && buscaAdmin.id !== admin.id)
      throw new HttpException(
        'O Administrador (e-mail) já cadastrado!',
        HttpStatus.BAD_REQUEST,
      );

    admin.senha = await this.bcrypt.criptografarSenha(admin.senha);

    return await this.adminRepository.save(admin);
  }
}
