import { Router } from "express";
import portfolioController from "./../controllers/portfolioController";

const app = Router();

app.post("/criar", portfolioController.criar);
app.get("/listar", portfolioController.listar);
app.get("/buscarPorId/:id", portfolioController.buscarPorId);
app.get("/buscarPorCriador/:id", portfolioController.buscarPorCriador);
app.delete("/excluir/:id", portfolioController.excluir);

export default app;