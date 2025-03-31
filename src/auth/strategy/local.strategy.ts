// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-local';
// import { AuthService } from '../services/auth.service';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   private _usernameField: string;
//   private _passwordField: string;

//   constructor(private readonly authService: AuthService) {
//     super();
//     this._usernameField = 'admin';
//     this._passwordField = 'senha';
//   }

//   async validate(admin: string, senha: string): Promise<any> {
//     const validaAdmin = await this.authService.validateUser(admin, senha);
//     if (!validaAdmin) {
//       throw new UnauthorizedException('Administrador e/ou senha incorretos!');
//     }
//     return validaAdmin;
//   }
// }
