import { createTaskService } from "../services/task.service";

export async function createTask(req, res) {
    
    const { title } = req.body

    const task = await createTaskService(title) 

    return res.status(201).json(task);
}