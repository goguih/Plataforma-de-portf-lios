import { Router } from "express";
import recrutadorController from "../controllers/recrutadorController";

const app = Router();

app.post("/cadastrar", recrutadorController.cadastrar);
app.post("/login", recrutadorController.login);

export default app;