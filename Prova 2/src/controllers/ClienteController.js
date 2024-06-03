const Cliente = require ('../models/Cliente')

async function create (req, res) {
    try {
        const cliente = new Cliente (req.body)
        const clienteCriado = await cliente.save()
        res.status(201).json(clienteCriado)

    } catch (error){
        console.error("Erro ao criar cliente: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar cliente!",
            erro: error.mensagem
        })

    }
    
}

async function getAll(req, res) {
    res.json(await Cliente.find())
}

 async function getbyId(req, res) {
    const cliente = await Cliente.findById(req.params.id)
    if(cliente){
        res.json(cliente)
    } else {
        res.status(404).json({mensagem: "Cliente não encontrado!"})
    }
    
 }

    async function update(req, res) {
    const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body)
   if(clienteAtualizado) {
    res.json(clienteAtualizado)
    } else {
        res.status(404).json({mensagem: "Cliente não encontrado"})
    }

}

async function remove(req, res) {
    const clienteExcluido = await Cliente.findByIdAndDelete(req.params.id)
    if (clienteExcluido) {
        res.json({
            mensagem: "Cliente excluido com sucesso!",
            clienteExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Cliente não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}