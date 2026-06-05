import { createTaskService, deleteTaskService, findAllTask, findTaskById, updateTaskService } from "../services/task.service.js";


export async function createTask(req, res) {
    
    const { title } = req.body;

    const task = await createTaskService(title) ;

    return res.status(201).json(task);
}

export async function getTask(req, res) {
    const task = await findAllTask();
    return res.json(task);
}


export async function getTaskById(req, res) {
    
    const { id } = req.params;
    const task = await findTaskById(id);

    return res.json(task);
}

export async function updateTaskById(req, res) {
    const { id } = req.params;
    const { dados } = req.body
    
    const task = await updateTaskService(id, dados);

    return res.json(task);
} 


export async function deleteTaskById(req, res) {
    
    const { id } = req.params;
    
    const task = await deleteTaskService(id);
    
    return res.json(task)

}