import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { AuthService } from '../services/auth.service';
import { AdminLogin } from './../entities/adminlogin.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('/administradores')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/logar')
  login(@Body() admin: AdminLogin): Promise<any> {
    return this.authService.login(admin);
  }
}
