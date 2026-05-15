import prisma from "../prisma/client";

export async function createServiceTask(title) {
    const task = await prisma.task.create({

        data : {
            title,
        },
    })
    return task;
}

export async function findAllTasks() {
    const tasks = await prisma.task.findMany;

    return tasks;
}