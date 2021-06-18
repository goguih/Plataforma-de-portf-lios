import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categorias")
export default class Categoria{

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @CreateDateColumn()
  createdAt: Date;
}