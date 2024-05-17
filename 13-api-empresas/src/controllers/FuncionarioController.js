const Funcionario = require ('../models/Funcionario')

async function create (req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)

    } catch (error){
        console.error("Erro ao criar funcionario: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar funcionario!",
            erro: error.mensagem
        })

    }
    
}

async function getAll(req, res) {
    res.json(await Funcionario.find().populate(['cargo' , 'departamento']))
}

 async function getbyId(req, res) {
    const funcionario = await Funcionario.findById(req.params.id).populate((['cargo' , 'departamento']))
    if(funcionario){
        res.json(funcionario)
    } else {
        res.status(404).json({mensagem: "funcionario não encontrado!"})
    }
    
 }

    async function update(req, res) {
    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body)
   if(funcionarioAtualizado) {
    res.json(funcionarioAtualizado)
    } else {
        res.status(404).json({mensagem: "funcionario não encontrado"})
    }

}

async function remove(req, res) {
    const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id)
    if (funcionarioExcluido) {
        res.json({
            mensagem: "funcionario excluido com sucesso!",
            funcionarioExcluido: funcionarioExcluido
        })
    } else {
        res.status(404).json({ mensagem: "funcionario não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}