const Funcionario = require('../models/Funcionario')


async function create (req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)
    }catch (error){
        console.error("Erro ao criar funcionario: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar funcionario !",
            erro: erro.mensagem
        })
    }
}
async function getbyId(req, res) {
    const funcionario = await Funcionario.findById(req.params.id)
    if (funcionario){
        res.json(funcionario)
    }else {
        res.status(400).json ({ mensagem: "Funcionario não encontrado!"})
    }
}




module.exports = {
    create,
    getbyId
}