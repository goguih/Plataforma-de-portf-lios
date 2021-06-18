import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Criador from "./Criador";

@Entity("portfolios")
export default class Portfolio{

  @PrimaryGeneratedColumn("increment")
  id: number;

  @JoinColumn({ name: "criadorId" })
  @OneToOne(() => Criador)
  criador: Criador;
  
  @Column("int")
  criadorId: number;

  @CreateDateColumn()
  createdAt: Date;
}