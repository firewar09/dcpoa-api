import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'gadinhos' })
export class Gadinhos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'name', nullable: true, type: 'varchar', length: 255})
  nome: string;

  @Column({name: 'idade', type: 'integer'})
  idade: number;
}


//Lembrar de nomear tabela, coluna, tipo, etc...