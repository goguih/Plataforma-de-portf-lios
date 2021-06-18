import { Request, Response } from "express";
import Contato from "../models/Contato";
import { getRepository } from "typeorm";

class ContatoController{
  
  async criar(req: Request, res: Response){
    try{
      const contatoRepository = getRepository(Contato);

      const { portfolioId, link, plataforma } = req.body;

      const contato = contatoRepository.create({ portfolioId, link, plataforma });
      await contatoRepository.save(contato);

      return res.status(200).json({ mensagem: "Contato cadastrado com sucesso" });

    } catch(error){
      return res.status(400).json({mensagem: "Erro ao cadastrar contato", error: error });
    }
  }
      async listar(req: Request, res: Response){
      try{
        const contatoRepository = getRepository(Contato)
        await contatoRepository.find().then((contatos) => {
            if(contatos.length == 0)
              return res.status(404).json({ mensagem: "Nenhuma contato foi encontrada!" });
            return res.status(200).json({ contatos });
              });
            } catch(error){
              return res.status(400).json({ mensagem: "Erro ao listar contatos", error: error });
            }
          }

      async buscarPorId(req: Request, res: Response){
          try{
            const contatoRepository = getRepository(Contato);
            const { id } = req.params;
      
            const contato = await contatoRepository.findOne({ where: { id } });
            if(!contato)
              return res.status(404).json({ mensagem: "Não foi encontrado nenhuma contato com esse id" });
      
            return res.status(200).json({ contato });
          } catch(error){
            return res.status(400).json({ mensagem: "Erro ao buscar contato", error: error });
          }
        }

        async buscarPorPortfolio(req: Request, res: Response){
          try{
            const contatoRepository = getRepository(Contato);
            const { portfolioId } = req.params;
      
            const contato = await contatoRepository.findOne({ where: { portfolioId } });
            if(!contato)
              return res.status(404).json({ mensagem: "Não foi encontrado nenhum contato no portfolio" });
      
            return res.status(200).json({ contato });
          } catch(error){
            return res.status(400).json({ mensagem: "Erro ao buscar contato", error: error });
          }
        }

        async editar(req: Request, res: Response){
            try{
              const contatoRepository = await getRepository(Contato).findOne(req.params.id);
              if(contatoRepository){
                getRepository(Contato).merge( contatoRepository, req.body);
                await getRepository(Contato).save(contatoRepository);
              }
                   return res.status(200).json({ mensagem: "Contato editada com sucesso!" });
            
            } catch(error){
              return res.status(400).json({ mensagem: "Erro ao editar contato", error: error });
            }
          }
  
        excluir(){
          return async (req: Request, res: Response) => {
            try{
              await getRepository(Contato).delete(req.params.id);
              
                res.status(200).json({ mensagem: "Contato removida com sucesso!" });
              }
              catch(error){
              return res.status(400).json({ mensagem: "Erro ao remover contato", error: error });
            }
          }
        }
      }
    
export default new ContatoController();