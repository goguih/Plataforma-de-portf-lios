import { Router } from "express";
import projetoController from "./../controllers/projetoController";

const app = Router();

app.post("/criar", projetoController.criar);
app.get("/listar", projetoController.listar);
app.get("/:id", projetoController.buscarPorId);
app.get("/buscarPorPortfolio/:portfolioId", projetoController.buscarPorPortfolio);
app.put("/editar/:id", projetoController.editar);
app.delete("/excluir/:id", projetoController.excluir);

export default app;