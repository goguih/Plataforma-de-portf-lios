import { createConnection } from "typeorm";

class Database{
  static connect(){
    createConnection().then(() => {
      console.log("Conexão com o Banco de Dados estabelecida com sucesso!");
    }).catch((error) => {
      console.log("Erro ao se conectar com o Banco de Dados: " + error);
    });
  }
}

export default Database;