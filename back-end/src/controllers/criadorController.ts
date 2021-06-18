import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Criador from  "../models/Criador";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import CriadorInterface from '../interfaces/CriadorInterface';
dotenv.config();

class CriadorController{
  async cadastrar(req: Request, res: Response){
    try{
      const repository = getRepository(Criador);
      const { nome, email, senha, confirmacaosenha } = req.body;
  
      if(senha != confirmacaosenha)
        return res.status(400).json({ mensagem: "Senhas não coincidem" });

      const criadorCadastrado = await repository.findOne({ where: { email } });
      if(criadorCadastrado)
        return res.status(409).json({ mensagem: "Usuário já cadastrado" });
  
      const criador = repository.create({ nome, email, senha });
      await repository.save(criador);   
      
      return res.status(200).json({ mensagem: "Criador cadastrado com sucesso" });
    }
    catch(error){
      return res.status(409).json({ error: error });
    }
   }

  async login(req: Request, res: Response){
    try{
      req.mensagemNaoAutorizado = "Não autorizado"

      const repository = getRepository(Criador);
      const { email, senha } = req.body;

      const criador = await repository.findOne({ where: { email } });
      if(!criador)
        return res.status(401).json({ mensagem: req.mensagemNaoAutorizado });

      await bcrypt.compare(senha, criador.senha, (errorBcrypt, result) => {
        if(!result)
          return res.status(401).json({ mensagem: req.mensagemNaoAutorizado });

        const token = jwt.sign({
          id: criador.id,
          email: criador.email
        }, "jHyQ*^UImUYb", {
          expiresIn: "2h"
        });

        const criadorToken = jwt.verify(token, "jHyQ*^UImUYb") as CriadorInterface;
        return res.status(200).json({ mensagem: "Logado com sucesso", token: criadorToken });
      });
    } catch(error){
      return res.status(401).json({ mensagem: req.mensagemNaoAutorizado, error: error });
    }
  }
}

export default new CriadorController();