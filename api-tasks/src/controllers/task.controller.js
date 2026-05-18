import { createTaskService, findAllTask, findTaskById } from "../services/task.service.js";


export async function createTask(req, res) {
    
    const { title } = req.body;

    const task = await createTaskService(title) ;

    return res.status(201).json(task);
}

export async function getTask(req, res) {
    
    task = await findAllTask();

    return res.json(tasks);
}

export async function getTaskById(req, res) {
    
    const { id } = req.params;
    const task = await findTaskById(id);

    return res.json(task);
}
