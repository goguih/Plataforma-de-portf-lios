import { Router } from "express";
import contatoController from "./../controllers/contatoController";

const app = Router();

app.post("/criar", contatoController.criar);
app.get("/listar", contatoController.listar);
app.get("/:id", contatoController.buscarPorId);
app.get("/buscarPorPortfolio/:portfolioid", contatoController.buscarPorPortfolio);
app.put("/editar/:id", contatoController.editar);
app.delete("/excluir/:id", contatoController.excluir);

export default app;