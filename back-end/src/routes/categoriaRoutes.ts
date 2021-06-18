import { Router } from "express";
import categoriaController from "./../controllers/categoriaController";

const app = Router();

app.post("/criar", categoriaController.criar);
app.get("/listar", categoriaController.listar);
app.put("/editar/:id", categoriaController.editar);
app.delete("/excluir/:id", categoriaController.excluir);

export default app;