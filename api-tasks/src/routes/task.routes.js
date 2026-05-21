//Nesta pasta ficam todas os endpoints possíveis que existem na minha API


//Importando o módulo Router do Express para criar rotas e deixar o arquivo mais organizado
//mantendo boas práticas de desenvolvimento.
import { getTask, createTask, getTaskById } from "../controllers/task.controller.js";
import { Router } from "express";
const router = Router();


//Essa rota é um exemplo para verificar se as rotas estão funcionando corretamente. Quando uma requisição GET é feita para a raiz da rota ("/"), ela responde com um JSON contendo uma mensagem de confirmação.

router.get("/", getTask);

router.get("/:id", getTaskById);

router.post("/", createTask);

export default router;