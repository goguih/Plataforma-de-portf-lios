import { Router } from "express";
import experienciaController from "./../controllers/experienciaController";
import auth from "./../middleware/auth";

const app = Router();

app.post("/criar", experienciaController.criar);
app.get("/listar", experienciaController.listar);
app.get("/:id", experienciaController.buscarPorId);
app.get("/buscarPorPortfolio/:portfolioId", experienciaController.buscarPorPortfolio);
app.put("/editar/:id", experienciaController.editar);
app.delete("/excluir/:id", experienciaController.excluir);

export default app;