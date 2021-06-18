import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Portfolio from "./Portfolio";

@Entity("certificados")
export default class Certificado{
  
  @PrimaryGeneratedColumn("increment")
  id: number;

  @JoinColumn({ name: "portfolioId" })
  @ManyToOne(() => Portfolio)
  portfolio: Portfolio;

  @Column("int")
  portfolioId: number;

  @Column()
  titulo: string;

  @Column()
  organizacao: string;

  @Column()
  url: string;

  @Column("date")
  dataEmissao: Date;

  @CreateDateColumn()
  createdAt: Date;
}