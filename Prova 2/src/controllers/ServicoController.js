const Servico = require ('../models/Servico')

async function create (req, res) {
    try {
        const servico = new Servico (req.body)
        const servicoCriado = await servico.save()
        res.status(201).json(servicoCriado)

    } catch (error){
        console.error("Erro ao criar servico: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar servico!",
            erro: error.mensagem
        })

    }
    
}

async function getAll(req, res) {
    res.json(await Servico.find())
}

 async function getbyId(req, res) {
    const servico = await Servico.findById(req.params.id)
    if(servico){
        res.json(servico)
    } else {
        res.status(404).json({mensagem: "Servico não encontrado!"})
    }
    
 }

    async function update(req, res) {
    const servicoAtualizado = await Servico.findByIdAndUpdate(req.params.id, req.body)
   if(servicoAtualizado) {
    res.json(servicoAtualizado)
    } else {
        res.status(404).json({mensagem: "Servico não encontrado"})
    }

}

async function remove(req, res) {
    const servicoExcluido = await Servico.findByIdAndDelete(req.params.id)
    if (servicoExcluido) {
        res.json({
            mensagem: "Servico excluido com sucesso!",
            clienteExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Servico não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}