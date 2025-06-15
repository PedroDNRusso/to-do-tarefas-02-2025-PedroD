const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const { usuario, descricao, setor, prioridade, status } = req.body;
    try {
        const tarefa = await prisma.tarefa.create({
            data: { usuario, descricao, setor, prioridade, status },
        });
        res.status(201).json(tarefa).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const tarefas = await prisma.tarefa.findMany();
    res.json(tarefas);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { setor, descricao, prioridade, usuario, status } = req.body;

  try {
    const tarefa = await prisma.tarefa.update({
      where: { id: Number(id) },
      data: { setor, descricao, prioridade, usuario, status }, // status incluso aqui
    });

    res.json(tarefa);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar tarefa.' });
  }
};

const remove = async (req, res) => {
    try {
        const tarefa = await prisma.tarefa.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(tarefa).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}