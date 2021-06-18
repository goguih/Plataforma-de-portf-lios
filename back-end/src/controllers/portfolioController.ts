import { Request , Response } from "express";
import Portfolio from "../models/Portfolio";
import Criador from "../models/Criador";
import Projeto from "../models/Projeto";
import Certificado from "../models/Certificado";
import Experiencia from "../models/Experiencia";
import Contato from "../models/Contato";
import { getRepository } from "typeorm";

class PortfolioController{

  async criar(req: Request, res: Response){
    try{
      const portfolioRepository = getRepository(Portfolio);
      const { criadorId } = req.body;
      
      const portfolioCadastrado = await portfolioRepository.findOne({ where: { criadorId } });
      if(portfolioCadastrado)
        return res.status(409).json({ mensagem: "Já existe um portfólio pertencente a esse Criador" });

      const portfolio = await portfolioRepository.create({ criadorId });
      await portfolioRepository.save(portfolio);   
      
      return res.status(201).json({ mensagem: "Portfólio cadastrado com sucesso", portfolioId: portfolio.id });

    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao cadastrar portfólio", error: error });
    }
  }

  async buscarPorCriador(req: Request, res: Response){
    try{
      const portfolioRepository = getRepository(Portfolio);
      const { criadorId } = req.params;

      const portfolio = await portfolioRepository.findOne({ where: { criadorId } });
      if(!portfolio)
          return res.status(404).json({ mensagem: "Não foi encontrado nenhum portfólio pertencente a esse criador" });
      
      return res.status(200).json({ portfolio });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar portfólios", error: error });
    }
  }
  
  async buscarPorId(req: Request, res: Response){
    try{
      const portfolioRepository = getRepository(Portfolio);
      const criadorRepository = getRepository(Criador);
      const projetoRepository = getRepository(Projeto);
      const certificadoRepository = getRepository(Certificado);
      const experienciaRepository = getRepository(Experiencia);
      const contatoRepository = getRepository(Contato);

      const { id } = req.params;

      const portfolio = await portfolioRepository.findOne({ where: { id } });
      if(!portfolio)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum portfólio com esse id" });
    
      const response = {
        portfolio: portfolio,
        criador: await criadorRepository.findOne({ where: { id: portfolio.criadorId } }),
        projeto: await projetoRepository.findOne({ where: { portfolioId: portfolio.id } }),
        certificado: await certificadoRepository.findOne({ where: { portfolioId: portfolio.id } }),
        experiencia: await experienciaRepository.findOne({ where: { portfolioId: portfolio.id } }),
        contato: await contatoRepository.findOne({ where: { portfolioId: portfolio.id } })
      }
      return res.status(200).json({ response });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar portfólios", error: error });
    }
  }

  async listar(req: Request, res: Response){
    try{
      const portfolioRepository = getRepository(Portfolio);
  
      const portfolio = await portfolioRepository.find();
      if(portfolio.length == 0)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum portfólio" });
  
      return res.status(200).json({ portfolio });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar portfólios", error: error });
    }
  }

  async excluir(req: Request, res: Response){
    try{
      const portfolioRepository = getRepository(Portfolio);
      const { id } = req.body;

      const portfolio = await portfolioRepository.delete({ id });
      if(!portfolio)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum portfólio" });

      return res.status(200).json({ mensagem: "Portfólio removido com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao excluir portfólio", error: error });
    }
  }
}

export default new PortfolioController();