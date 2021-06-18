import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import Criador from "../models/Criador";
import CriadorInterface from "../interfaces/CriadorInterface";

export default class Auth{
  public static async autorizarCriadorByToken(req: Request, res: Response, next: NextFunction){
    try{
      const repository = getRepository(Criador);
      
      const token = req.body.token;
  
      if(!token)
        return res.status(409).json({ mensagem: "Acesso não autorizado" });
      
      const criadorToken = jwt.verify(token, "jHyQ*^UImUYb") as CriadorInterface;
      const criador = await repository.findOne({ where: { id: criadorToken.id }});
  
      if(!criador)
        return res.status(409).json({ mensagem: "Acesso não autorizado" });
      
      req.criadorId = criador.id;
      return next();
    }
    catch(error){
      return res.status(409).json({ mensagem: "Acesso não autorizado" });
    }
  }
}