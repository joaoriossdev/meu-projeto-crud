import prisma from "../prisma/client.js";

export async function createTaskService(title) {
    const task = await prisma.task.create({

        data : {
            title,
        },
    })

    
    return task;
}

export async function findAllTask() {
    const task = await prisma.task.findMany();

    return task;
}

export async function findTaskById(id) {

    const task = await prisma.task.findUnique(

        {
            where: {
                id,
            }
        })
    return task;
}

export async function updateTaskService(id, dados) {
    
    const task = await prisma.task.update({
            
        where: {
                id,
            },
        
        data: {
            title: dados.title,
            completed: dados.completed,
            
        },
    });
    return task;
}


export async function deleteTaskService(id) {
    
    const task =  await prisma.task.delete({

        where: {
            id,
        },

    });
    return task;
}