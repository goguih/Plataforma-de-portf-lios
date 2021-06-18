import { Request , Response } from "express";
import Certificado from "../models/Certificado";
import { getRepository } from "typeorm";

class CertificadoController{

  async criar(req: Request, res: Response){
    try{
      const certificadoRepository = getRepository(Certificado);
      const { portfolioId, titulo, organizacao, url, dataEmissao } = req.body;
      
      const certificado = await certificadoRepository.create({ 
        portfolioId, 
        titulo, 
        organizacao, 
        url,
        dataEmissao 
      });
      await certificadoRepository.save(certificado);   
      
      return res.status(201).json({ mensagem: "Certificado cadastrado com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao cadastrar certificado", error: error });
    }
  }
  
  async buscarPorId(req: Request, res: Response){
    try{
      const certificadoRepository = getRepository(Certificado);
      const { id } = req.params;

      const certificado = await certificadoRepository.findOne({ where: { id } });
      if(!certificado)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum certificado com esse id" });
    
      return res.status(200).json({ certificado });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar certificado", error: error });
    }
  }

  async buscarPorPortfolio(req: Request, res: Response){
    try{
      const certificadoRepository = getRepository(Certificado);
      const { portfolioId } = req.params;

      const certificado = await certificadoRepository.findOne({ where: { portfolioId } });
      if(!certificado)
          return res.status(404).json({ mensagem: "Não foi encontrado nenhum certificado pertencente a esse portfólio" });
      
      return res.status(200).json({ certificado });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar certificado", error: error });
    }
  }

  async listar(req: Request, res: Response){
    try{
      const certificadoRepository = getRepository(Certificado);
  
      const certificado = await certificadoRepository.find();
      if(certificado.length == 0)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum certificado" });
  
      return res.status(200).json({ certificado });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao buscar certificado", error: error });
    }
  }

  async editar(req: Request, res: Response){
    try{
      const certificadoRepository = getRepository(Certificado);
      const { id } = req.params;
      const { portfolioId, titulo, organizacao, url, dataEmissao } = req.body;
      
      const certificado = await certificadoRepository.findOne({ where: { id } });

      if(!certificado)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum certificado" });

      await certificadoRepository.merge(certificado, {
        portfolioId, 
        titulo, 
        organizacao, 
        url,
        dataEmissao 
      });
      await certificadoRepository.save(certificado);

      return res.status(200).json({ mensagem: "certificado removido com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao excluir certificado", error: error });
    }
  }

  async excluir(req: Request, res: Response){
    try{
      const certificadoRepository = getRepository(Certificado);
      const { id } = req.body;

      const certificado = await certificadoRepository.delete({ id });
      if(!certificado)
        return res.status(404).json({ mensagem: "Não foi encontrado nenhum certificado" });

      return res.status(200).json({ mensagem: "certificado removido com sucesso" });
    } catch(error){
      return res.status(400).json({ mensagem: "Erro ao excluir certificado", error: error });
    }
  }
}

export default new CertificadoController();