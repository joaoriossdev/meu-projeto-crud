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
    const task = await prisma.task.findMany;

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