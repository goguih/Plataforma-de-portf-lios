import { Request , Response } from "express";
import Experiencia from "../models/Experiencia";
import { getRepository } from "typeorm";

class ExperienciaController{

  async criar(req: Request, res: Response){
    try{
      const experienciaRepository = getRepository(Experiencia);
      const { portfolioId, cargo, organizacao, descricao, dataInicio, dataTermino } = req.body;
      
      const experiencia = experienciaRepository.create({ 
        portfolioId, 
        cargo, 
        organizacao, 
        descricao,
        dataInicio, 
        dataTermino
      });
      await experienciaRepository.save(experiencia);   
      
      return res.status(201).json({ mensagem: "Experiência cadastrada com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao cadastrar experiência", error: error });
    }
  }
  
  async buscarPorId(req: Request, res: Response){
    try{
      const experienciaRepository = getRepository(Experiencia);
      const { id } = req.params;

      const experiencia = await experienciaRepository.findOne({ where: { id } });
      if(!experiencia)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum experiencia com esse id" });
    
      return res.status(200).json({ experiencia });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar experiencia", error: error });
    }
  }

  async buscarPorPortfolio(req: Request, res: Response){
    try{
      const experienciaRepository = getRepository(Experiencia);
      const { portfolioId } = req.params;

      const experiencia = await experienciaRepository.findOne({ where: { portfolioId } });
      if(!experiencia)
          return res.status(404).json({ mensagem: "Não foi encontrado nenhum experiencia pertencente a esse portfólio" });
      
      return res.status(200).json({ experiencia });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar experiencia", error: error });
    }
  }

  async listar(req: Request, res: Response){
    try{
      const experienciaRepository = getRepository(Experiencia);
  
      const experiencia = await experienciaRepository.find();
      if(experiencia.length == 0)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum experiencia" });
  
      return res.status(200).json({ experiencia });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar experiencia", error: error });
    }
  }

  async editar(req: Request, res: Response){
    try{
      const experienciaRepository = getRepository(Experiencia);
      const { id } = req.params;
      const { portfolioId, cargo, organizacao, descricao, dataInicio,dataTermino } = req.body;
      
      const experiencia = await experienciaRepository.findOne({ where: { id } });

      if(!experiencia)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum experiencia" });

      await experienciaRepository.merge(experiencia, {
        portfolioId, 
        cargo, 
        organizacao, 
        descricao,
        dataInicio, 
        dataTermino
      });
      await experienciaRepository.save(experiencia);

      return res.status(200).json({ mensagem: "experiencia removido com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao excluir experiencia", error: error });
    }
  }

  async excluir(req: Request, res: Response){
    try{
      const experienciaRepository = getRepository(Experiencia);
      const { id } = req.body;

      const experiencia = await experienciaRepository.delete({ id });
      if(!experiencia)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum experiencia" });

      return res.status(200).json({ mensagem: "experiencia removido com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao excluir experiencia", error: error });
    }
  }
}

export default new ExperienciaController();