const Projeto = require ('../models/Projeto')

async function create (req, res) {
    try {
        const projeto = new Projeto(req.body)
        const projetofaCriado = await projeto.save()
        res.status(201).json(projetofaCriado)

    } catch (error){
        console.error("Erro ao criar projeto: " , error)
        res.status(400).json({
            mensagem: "Erro ao criar projeto!",
            erro: error.mensagem
        })

    }
    
}

async function getAll(req, res) {
    res.json(await Projeto.find())
}

 async function getbyId(req, res) {
    const projeto = await Projeto.findById(req.params.id)
    if(projeto){
        res.json(projeto)
    } else {
        res.status(404).json({mensagem: "projeto não encontrado!"})
    }
    
 }

    async function update(req, res) {
    const projetoAtualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body)
   if(projetoAtualizado) {
    res.json(projetoAtualizado)
    } else {
        res.status(404).json({mensagem: "Projeto não encontrado"})
    }

}

async function remove(req, res) {
    const projetoExcluido = await Projeto.findByIdAndDelete(req.params.id)
    if (projetoExcluido) {
        res.json({
            mensagem: "Projeto excluido com sucesso!",
            projetoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Projeto  não encontrato!" })
    }
}






module.exports = {
    create,
    getAll,
    getbyId,
    update,
    remove
}