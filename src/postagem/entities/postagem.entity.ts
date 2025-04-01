import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_postagem')
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text', nullable: true })
  foto: string;
  @Column()
  titulo: string;
  @Column({ type: 'text' })
  mensagem: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_postagem: Date;
}
