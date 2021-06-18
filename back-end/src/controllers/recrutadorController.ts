import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Recrutador from  "../models/Recrutador";
import bcrypt from "bcrypt";

class RecrutadorController{
  async cadastrar(req: Request, res: Response){
    try{
      const repository = getRepository(Recrutador);
      const { nome, email, senha, confirmacaosenha } = req.body;
  
      if(senha != confirmacaosenha)
        return res.status(400).json({ mensagem: "Senhas não coincidem" });

      const recrutadorCadastrado = await repository.findOne({ where: { email } });
      if(recrutadorCadastrado)
        return res.status(409).json({ mensagem: "Usuário já cadastrado" });
  
      const recrutador = repository.create({ nome, email, senha });
      await repository.save(recrutador);   
      
      return res.status(200).json({ mensagem: "Recrutador cadastrado com sucesso" });
    }
    catch(error){
      return res.status(401).json({ error: error });
    }
   }

  async login(req: Request, res: Response){
    try{
      req.mensagemNaoAutorizado = "Acesso não autorizado";
      const repository = getRepository(Recrutador);
      const { email, senha } = req.body;

      const recrutador = await repository.findOne({ where: { email } });
      if(!recrutador)
        return res.status(409).json({ mensagem: req.mensagemNaoAutorizado });

      await bcrypt.compare(senha, recrutador.senha, (errorBcrypt, result) => {
        if(!result)
          return res.status(401).json({ mensagem: req.mensagemNaoAutorizado });

        return res.status(200).json({ mensagem: "Logado com sucesso" });
      });
    } catch(error){
      return res.status(401).json({ mensagem: req.mensagemNaoAutorizado, error: error });
    }
  }
}

export default new RecrutadorController();