import { ApiProperty } from '@nestjs/swagger';

export class AdminLogin {
  @ApiProperty()
  public admin: string;
  @ApiProperty()
  public senha: string;
}
