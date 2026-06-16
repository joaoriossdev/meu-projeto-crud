import { createTaskService, deleteTaskService, findAllTask, findTaskById, updateTaskService} from "../services/task.service.js";


export async function createTask(req, res) {
    
    const { title } = req.body;

    const task = await createTaskService(title) ;

    if (!title) {
        
        return res.status(400).json({message:"O título é obrigatório"})
    }
    return res.status(201).json(task);
}

export async function getTask(req, res) {
    const task = await findAllTask();
    return res.json(task);
}


export async function getTaskById(req, res) {
    
    const { id } = req.params;
    const task = await findTaskById(id);

    if(!task) {
        return res.status(404).json({message: "Task não encontrada"})
    }

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
    
    if(id.length != 24) {

        return res.status(400).json({message:"Id inválido"});
    }
    
    const task = await deleteTaskService(id);
    
    return res.json(task)

}