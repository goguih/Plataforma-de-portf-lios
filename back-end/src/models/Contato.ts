import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Portfolio from "./Portfolio";

@Entity("contatos")
export default class Contato{
  
  @PrimaryGeneratedColumn("increment")
  id: number;

  @JoinColumn({ name: "portfolioId" })
  @ManyToOne(() => Portfolio)
  portfolio: Portfolio;

  @Column("int")
  portfolioId: number;

  @Column()
  link: string;

  @Column()
  plataforma: string;

  @CreateDateColumn()
  createdAt: Date;
}