import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, Matches } from 'class-validator';

@Entity({ name: 'tb_agenda' })
export class Agenda {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim() || null)
  @IsNotEmpty({ message: 'Título não pode estar vazio' })
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  titulo: string;

  @Transform(({ value }: TransformFnParams) => value?.trim() || null)
  @IsNotEmpty({ message: 'O texto não pode estar vazio' })
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  texto: string;

  @Column({ type: 'date', nullable: false })
  @ApiProperty()
  data: Date;

  @Matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, { message: 'Horário deve estar no formato HH:mm' })
  @Column({ type: 'time', nullable: false })
  @ApiProperty()
  horario: string;

  @Transform(({ value }: TransformFnParams) => value?.trim() || null)
  @IsNotEmpty({ message: 'O local não pode estar vazio' })
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  local: string;
}
