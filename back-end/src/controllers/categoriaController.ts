import { Request , Response } from "express";
import Categoria from "../models/Categoria";
import { getRepository } from "typeorm";

class CategoriaController{

    async criar(req: Request, res: Response){
    try{
      const categoriaRepository = getRepository(Categoria);
      const { nome } = req.body;
  
      const categoria = categoriaRepository.create({ nome });
      await categoriaRepository.save(categoria);   
      
      return res.status(200).json({ mensagem: "categoria cadastrada com sucesso" });
    }
    catch(error){
      return res.status(400).json({mensagem: "Erro ao cadastrar categoria", error: error });
    }
   }
   
    async listar(req: Request, res: Response){
    try{
      const categoriaRepository = getRepository(Categoria)
      await categoriaRepository.find().then((categorias) => {
          if(categorias.length == 0)
            return res.status(404).json({ mensagem: "Nenhuma categoria foi encontrada!" });
            return res.status(200).json({ categorias });
            });
          } catch(error){
            return res.status(400).json({ mensagem: "Erro ao listar categorias", error: error });
          }
        }
      async editar(req: Request, res: Response){
          try{
            const categoriaRepository = await getRepository(Categoria).findOne(req.params.id);
            if(categoriaRepository){
              getRepository(Categoria).merge( categoriaRepository, req.body);
              await getRepository(Categoria).save(categoriaRepository);
            }
                 return res.status(200).json({ mensagem: "Categoria editada com sucesso!" });
          
          } catch(error){
            return res.status(400).json({ mensagem: "Erro ao editar categoria", error: error });
          }
        }

      excluir(){
        return async (req: Request, res: Response) => {
          try{
            await getRepository(Categoria).delete(req.params.id);
            
              res.status(200).json({ mensagem: "Categoria removida com sucesso!" });
            }
            catch(error){
            return res.status(400).json({ mensagem: "Erro ao remover categoria", error: error });
          }
        }
      }
    }
    
export default new CategoriaController();

