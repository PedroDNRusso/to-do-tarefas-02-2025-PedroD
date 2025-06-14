const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const tarefas = await prisma.tarefas.create({
            data: req.body,
        });
        res.status(201).json(tarefas).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const tarefass = await prisma.tarefas.findMany();
    res.json(tarefass);
}

const readOne = async (req, res) => {
    const tarefass = await prisma.tarefas.findMany({
        where:{
            id: Number(req.params.id)
        },
        include:{
            usuario: true
        }
    });
    res.json(tarefass);
}

const update = async (req, res) => {
    try {
        const tarefas = await prisma.tarefas.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(tarefas).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const tarefas = await prisma.tarefas.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(tarefas).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}