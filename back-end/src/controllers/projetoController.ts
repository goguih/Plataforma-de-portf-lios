import { Request , Response } from "express";
import Projeto from "../models/Projeto";
import { getRepository } from "typeorm";

class ProjetoController{

  async criar(req: Request, res: Response){
    try{
      const projetoRepository = getRepository(Projeto);
      const { portfolioId, nome, descricao, imagem, dataInicio, dataTermino } = req.body;
      
      const projetoCadastrado = await projetoRepository.findOne({ where: { portfolioId } });
      if(projetoCadastrado)
        return res.status(409).json({ mensagem: "Já existe um projeto pertencente a esse Criador" });

      const projeto = await projetoRepository.create({ 
        portfolioId, 
        nome, 
        descricao, 
        imagem, 
        dataInicio, 
        dataTermino
      });
      await projetoRepository.save(projeto);   
      
      return res.status(201).json({ mensagem: "Projeto cadastrado com sucesso" });
    } catch(error){
      return res.status(409).json({ mensagem: "Erro ao cadastrar projeto", error: error });
    }
  }
  
  async buscarPorId(req: Request, res: Response){
    try{
      const projetoRepository = getRepository(Projeto);
      const { id } = req.params;

      const projeto = await projetoRepository.findOne({ where: { id } });
      if(!projeto)
        return res.status(409).json({ mensagem: "Não foi encontrado nenhum projeto com esse id" });
    
      return res.status(200).json({ projeto });
    } catch(error){
      return res.status(409).json({ mensagem: "Erro ao buscar projeto", error: error });
    }
  }

  async buscarPorPortfolio(req: Request, res: Response){
    try{
      const projetoRepository = getRepository(Projeto);
      const { portfolioId } = req.params;

      const projeto = await projetoRepository.findOne({ where: { portfolioId } });
      if(!projeto)
          return res.status(409).json({ mensagem: "Não foi encontrado nenhum projeto pertencente a esse portfólio" });
           
      return res.status(200).json({ projeto });
    } catch(error){
      return res.status(409).json({ mensagem: "Erro ao buscar projeto", error: error });
    }
  }

  async listar(req: Request, res: Response){
    try{
      const projetoRepository = getRepository(Projeto);
  
      const projeto = await projetoRepository.find();
      if(projeto.length == 0)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum projeto" });
  
      return res.status(200).json({ projeto });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar portfólios", error: error });
    }
  }

  async editar(req: Request, res: Response){
    try{
      const projetoRepository = getRepository(Projeto);
      const { id } = req.params;
      const { portfolioId, nome, descricao, imagem, dataInicio, dataTermino } = req.body;
      
      const projeto = await projetoRepository.findOne({ where: { id } });

      if(!projeto)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum projeto" });

      await projetoRepository.merge(projeto, {
        portfolioId,
        nome,
        descricao, 
        imagem,
        dataInicio, 
        dataTermino
      });
      await projetoRepository.save(projeto);

      return res.status(200).json({ mensagem: "Projeto removido com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao excluir projeto", error: error });
    }
  }

  async excluir(req: Request, res: Response){
    try{
      const projetoRepository = getRepository(Projeto);
      const { id } = req.body;

      const projeto = await projetoRepository.delete({ id });
      if(!projeto)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum projeto" });

      return res.status(200).json({ mensagem: "Projeto removido com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao excluir projeto", error: error });
    }
  }
}

export default new ProjetoController();