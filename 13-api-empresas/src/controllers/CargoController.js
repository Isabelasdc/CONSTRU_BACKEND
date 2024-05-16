const Cargo = require ('../models/Cargo')

async function create (req, res) {
    try {
        const cargo = new Cargo(req.body)
        const cargoCriado = await cargo.save()
        res.status(201).json(cargoCriado)

    } catch (error){
        console.error("Erro ao criar cargo: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar cargo!",
            erro: error.mensagem
        })

    }
    
}

async function getAll(req, res) {
    res.json(await Cargo.find())
}

 async function getbyId(req, res) {
    const cargo = await Cargo.findById(req.params.id)
    if(cargo){
        res.json(cargo)
    } else {
        res.status(404).json({mensagem: "Cargo não encontrado!"})
    }
    
 }

    async function update(req, res) {
    const cargoAtualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body)
   if(cargoAtualizado) {
    res.json(cargoAtualizado)
    } else {
        res.status(404).json({mensagem: "Cargo não encontrado"})
    }

}

async function remove(req, res) {
    const cargoExcluido = await Cargo.findByIdAndDelete(req.params.id)
    if (cargoExcluido) {
        res.json({
            mensagem: "Cargo excluido com sucesso!",
            cargoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}