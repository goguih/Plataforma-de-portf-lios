import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Portfolio from "./Portfolio";

@Entity("projetos")
export default class Projeto{
  
  @PrimaryGeneratedColumn("increment")
  id: number;

  @JoinColumn({ name: "portfolioId" })
  @ManyToOne(() => Portfolio)
  portfolio: Portfolio;

  @Column("int")
  portfolioId: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  imagem: string;

  @Column("date")
  dataInicio: Date;

  @Column("date")
  dataTermino: Date;

  @CreateDateColumn()
  createdAt: Date;
}