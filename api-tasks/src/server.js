import express from "express";
import taskRoutes from "./routes/task.routes.js";
const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(3000, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});

app.use("/tasks", taskRoutes);
