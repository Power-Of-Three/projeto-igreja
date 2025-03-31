import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_membros' })
export class MembrosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  nomeMembro: string;

  @IsNotEmpty()
  @Column()
  Email: string;

  @IsNotEmpty()
  @Column()
  senha: string;
}
