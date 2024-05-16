const Departamento = require ('../models/Departamento')

async function create (req, res) {
    try {
        const departamento = new Departamento(req.body)
        const departamentoCriado = await departamento.save()
        res.status(201).json(departamentoCriado)

    } catch (error){
        console.error("Erro ao criar departamento: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar departamento!",
            erro: error.mensagem
        })

    }
    
}

async function getAll(req, res) {
    res.json(await Departamento.find())
}

 async function getbyId(req, res) {
    const departamento = await Departamento.findById(req.params.id)
    if(departamento){
        res.json(departamento)
    } else {
        res.status(404).json({mensagem: "Departamento não encontrado!"})
    }
    
 }

    async function update(req, res) {
    const departamentoAtualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body)
   if(departamentoAtualizado) {
    res.json(departamentoAtualizado)
    } else {
        res.status(404).json({mensagem: "Departamento não encontrado"})
    }

}

async function remove(req, res) {
    const departamentoExcluido = await Departamento.findByIdAndDelete(req.params.id)
    if (departamentoExcluido) {
        res.json({
            mensagem: "Departamento excluido com sucesso!",
            departamentoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}