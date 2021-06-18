import { Router } from "express";
import certificadoController from "./../controllers/certificadoController";
// import upload from "./../config/config-multer";

const app = Router();

app.post("/criar", certificadoController.criar);
app.get("/listar", certificadoController.listar);
app.get("/:id", certificadoController.buscarPorId);
app.get("/buscarPorPortfolio/:portfolioid", certificadoController.buscarPorPortfolio);
app.put("/editar/:id", certificadoController.editar);
app.delete("/excluir/:id", certificadoController.excluir);

export default app;