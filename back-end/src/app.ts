import express from "express";
import "reflect-metadata";
import database from "./database/database";
import cors from "cors";
import recrutadorRoutes from "./routes/recrutadorRoutes";
import criadorRoutes from "./routes/criadorRoutes";
import projetoRoutes from "./routes/projetoRoutes";
import certificadoRoutes from "./routes/certificadoRoutes";
import experienciaRoutes from "./routes/experienciaRoutes";
import categoriaRoutes from  "./routes/categoriaRoutes";
import contatoRoutes from "./routes/contatoRoutes";
import portfolioRoutes from "./routes/portfolioRoutes";

class App{
    express : express.Application = express();

    constructor(){
        this.database();
        this.middlewares();
        this.routes();
        this.listen();
    }

    public getApp(): express.Application {
        return this.express;
    }

    database(): void {
      database.connect();
    }

    middlewares(): void{
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(cors());
    }

    routes(): void{
        this.express.use("/criador", criadorRoutes);
        this.express.use("/recrutador", recrutadorRoutes);
        this.express.use("/projeto", projetoRoutes);
        this.express.use("/certificado", certificadoRoutes);
        this.express.use("/experiencia", experienciaRoutes);
        this.express.use("/categoria", categoriaRoutes);
        this.express.use("/contato", contatoRoutes);
        this.express.use("/portfolio", portfolioRoutes);
    }

    listen(): void{
        this.express.listen(3000, () => {
            console.log("Servidor rodando na porta 3000...");
        });
    }
}

export default App;