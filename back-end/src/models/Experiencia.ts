import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Portfolio from "./Portfolio";

@Entity("experiencias")
export default class Experiencia{
  
  @PrimaryGeneratedColumn("increment")
  id: number;

  @JoinColumn({ name: "portfolioId" })
  @ManyToOne(() => Portfolio)
  portfolio: Portfolio;

  @Column("int")
  portfolioId: number;

  @Column()
  cargo: string;

  @Column()
  organizacao: string;

  @Column("text")
  descricao: string;

  @Column("date")
  dataInicio: Date;

  @Column("date")
  dataTermino: Date;

  @CreateDateColumn()
  createdAt: Date;
}