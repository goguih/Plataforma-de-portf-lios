import PortfolioId from "../class/PortfolioId";
import api from "./api";

export default class Requests {
  static login = async(data) => {
    try{
      const resultado = await api.post("/criador/login", data);
            
      if(resultado.data.mensagem == "Logado com sucesso")
        return resultado.data.token;       
      else
        return false;
    } catch (error){
      console.log(error);
      return false;
    }
  }

  static criarPortfolio = async(data) => {
    try{
      const resultado = await api.post("/portfolio/criar", data);
      
      if(resultado.data.mensagem == "Portfólio cadastrado com sucesso"){
        PortfolioId.setId(resultado.data.portfolioId);
        return true;
      }
      else
        return false;
    }
    catch(error){
      console.log(error);
      return false;
    }
  }

  static cadastrarExperiencia = async(data) => {
    try{
      const resultado = await api.post("/experiencia/criar", data);

      if(resultado.data.mensagem == "Experiência cadastrada com sucesso")
        return true;
      return false;
    } catch (error){
      console.log(error);
      return false;
    }
  }

  static cadastrarCertificado = async(data) => {
    try{ 
      const resultado = await api.post("/certificado/criar", data);

      if(resultado.data.mensagem == "Certificado cadastrado com sucesso")
        return true;
      return false;
    } catch (error){
      console.log(error);
      return false;
    }
  }

  static cadastrarHabilidade = async(data) => {
    try{ 
    console.log(data);
      const resultado = await api.post("/habilidade/criar", data);

      if(resultado.data.mensagem == "Habilidade cadastrada com sucesso")
        return true;
      return false;
    } catch (error){
      console.log(error);
      return false;
    }
  }

  static cadastrarProjeto = async(data) => {
    try{
      const resultado = await api.post("/projeto/criar", data);

      if(resultado.data.mensagem == "Projeto cadastrado com sucesso")
        return true;
      return false;      
    } catch (error){
      console.log(error);
      return false;
    }
  }

  static cadastrarContato = async(data) => {
    try{
      const resultado = await api.post("/contato/criar", data);
      
      if(resultado.data.mensagem == "Contato cadastrado com sucesso")
        return true;
      return false;     
    } catch (error){
      console.log(error);
      return false;
    }
  }
}

   