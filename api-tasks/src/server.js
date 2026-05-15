//Importações básicas 
import express from "express";
//Importação das rotas de tarefas para serem usadas no servidor
import taskRoutes from "./routes/task.routes.js";
const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(3000, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});
//Usando as rotas de tarefas para lidar com as requisições que começam com "/tasks"
//Todas as requisições do task.routes utilizaram o "/tasks"
app.use("/tasks", taskRoutes);
