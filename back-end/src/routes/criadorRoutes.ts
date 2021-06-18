import { Router } from "express";
import criadorController from "../controllers/criadorController";

const app = Router();

app.post("/cadastrar", criadorController.cadastrar);
app.post("/login", criadorController.login);

export default app;