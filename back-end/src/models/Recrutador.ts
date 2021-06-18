import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from "bcrypt";

@Entity("recrutadores")
export default class Recrutador{

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  hashPassword(){
    this.senha = bcrypt.hashSync(this.senha, 10);
  }
}