const Pagamento = require ('../models/Pagamento')

async function create (req, res) {
    try {
        const pagamento = new Pagamento (req.body)
        const pagamentoCriado = await pagamento.save()
        res.status(201).json(pagamentoCriado)

    } catch (error){
        console.error("Erro ao criar pagamento: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar pagamento!",
            erro: error.mensagem
        })

    }
    
}

async function getAll(req, res) {
    res.json(await Pagamento.find())
}

 async function getbyId(req, res) {
    const pagamento = await Pagamento.findById(req.params.id)
    if(pagamento){
        res.json(pagamento)
    } else {
        res.status(404).json({mensagem: "Pagamento não encontrado!"})
    }
    
 }

    async function update(req, res) {
    const pagamentoAtualizado = await Pagamento.findByIdAndUpdate(req.params.id, req.body)
   if(pagamentoAtualizado) {
    res.json(pagamentoAtualizado)
    } else {
        res.status(404).json({mensagem: "Pagamento não encontrado"})
    }

}

async function remove(req, res) {
    const pagamentoExcluido = await Pagamento.findByIdAndDelete(req.params.id)
    if (pagamentoExcluido) {
        res.json({
            mensagem: "Pagamento excluido com sucesso!",
            clienteExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}