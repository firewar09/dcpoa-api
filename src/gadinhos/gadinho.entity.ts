import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Gadinho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;
}