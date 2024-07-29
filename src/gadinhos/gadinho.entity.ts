import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'gadinhos' })
export class Gadinho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'nome', nullable: true, type: 'varchar', length: 255})
  nome: string;

  @Column({name: 'idade', type: 'integer'})
  idade: number;
}


//Lembrar de nomear tabela, coluna, tipo, etc...