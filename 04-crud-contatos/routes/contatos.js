// importa o modulo do express
const express = require ('express')
// criando um router
const router = express.Router()

// dados mockados
// criar uma lista
let listaContatos = ["João", "Pedro", "Daniel"]

// CRUD
// READ - Buscar todos os contatos
router.get('/contatos' , (req, res) => {
    res.json(listaContatos)
})
//  RED - BUSCA DO CONTATO PELO IDENTIFICADOR
router.get('/contatos/:id' , (req, res) => {
    const id = req.params.id
    const contato =listaContatos[id]
    res.json(contato)
})

//CREATE - Cadastrar um contato
router.post('/contatos' , (req, res)=>{
    const contatos = req.body
    listaContatos.push(contatos.nome)
    res.status(201).json({mensagem: "Contato criado com sucesso!"})

})


// DELETE - EXCLUIR CONTATO
router.delete("/contatos/:id" , (req, res) =>{
    const id = req.params.id
    listaContatos.splice(id, 1)
    res.json({mensagem: "Contato excluido com sucesso"})
})

// UPDATE - ATUALIZAR CONTATO
router.put("/contatos/:id", (req, res) => {
    const id = req.params.id
    const contato = req.body
    listaContatos[id] = contato.nome
    res.json({mensagem: "Contato atualizado com sucesso!"})
})









//exporta o router
module.exports = router