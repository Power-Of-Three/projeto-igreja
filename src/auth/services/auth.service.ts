// import { JwtService } from '@nestjs/jwt';
// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { Bcrypt } from '../bcrypt/bcrypt';
// import { AdminLogin } from '../entities/adminlogin.entity';
// import { AdminService } from '../../administradores/services/admin.service';

// @Injectable()
// export class AuthService {
//   constructor(
//     private adminService: AdminService,
//     private jwtService: JwtService,
//     private bcrypt: Bcrypt,
//   ) {}

//   async validateUser(username: string, password: string): Promise<any> {
//     const buscaAdmin = await this.adminService.findByAdmin(username);

//     if (!buscaAdmin) {
//       throw new HttpException(
//         'Administrador não encontrado!',
//         HttpStatus.NOT_FOUND,
//       );
//     }

//     const matchPassword = await this.bcrypt.compararSenhas(
//       password,
//       buscaAdmin.senha,
//     );

//     if (buscaAdmin && matchPassword) {
//       const { senha, ...resposta } = buscaAdmin;
//       return resposta;
//     }

//     return null;
//   }

//   async login(adminLogin: AdminLogin) {
//     const payload = { sub: adminLogin.admin };

//     const buscaAdmin = await this.adminService.findByAdmin(adminLogin.admin);

//     if (!buscaAdmin) {
//       throw new HttpException(
//         'Administrador não encontrado!',
//         HttpStatus.NOT_FOUND,
//       );
//     }

//     return {
//       id: buscaAdmin.id,
//       nome: buscaAdmin.nome,
//       admin: adminLogin.admin,
//       senha: '',
//       foto: buscaAdmin.foto,
//       peso: buscaAdmin.peso,
//       altura: buscaAdmin.altura,
//       imc: buscaAdmin.imc,
//       classificacao: buscaAdmin.classificacao,
//       token: `Bearer ${this.jwtService.sign(payload)}`,
//     };
//   }
// }
