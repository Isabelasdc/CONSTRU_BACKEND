const Tarefa = require ('../models/Tarefa')

async function create (req, res) {
    try {
        const tarefa = new Tarefa(req.body)
        const tarefaCriada = await tarefa.save()
        res.status(201).json(tarefaCriada)

    } catch (error){
        console.error("Erro ao criar tarefa: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar tarefa!",
            erro: error.mensagem
        })

    }
    
}

async function getAll(req, res) {
    res.json(await Tarefa.find())
}

 async function getbyId(req, res) {
    const tarefa = await Tarefa.findById(req.params.id)
    if(tarefa){
        res.json(tarefa)
    } else {
        res.status(404).json({mensagem: "tarefa não encontrada!"})
    }
    
 }

    async function update(req, res) {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body)
   if(tarefaAtualizada) {
    res.json(tarefaAtualizada)
    } else {
        res.status(404).json({mensagem: "Tarefa não encontrado"})
    }

}

async function remove(req, res) {
    const tarefaExcluida = await Tarefa.findByIdAndDelete(req.params.id)
    if (tarefaExcluida) {
        res.json({
            mensagem: "Tarefa excluido com sucesso!",
            tarefaExcluida
        })
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}