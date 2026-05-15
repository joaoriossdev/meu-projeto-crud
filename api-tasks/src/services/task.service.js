import prisma from "../prisma/client";

export async function createTaskService(title) {
    const task = await prisma.task.create({

        data : {
            title,
        },
    })
    return task;
}

export async function findAllTasks() {
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