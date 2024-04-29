const express = require('express')
const router = express.Router()


// Lista mockada
let listaPessoas  =  [
    {
        id : 1,
        nome : "João" ,
        idade : 20 ,
        email : "joão@email.com" ,
        telefone : 61900010002
    } ,
    {
        id : 2,
        nome : "Marcelo" ,
        idade : 29 ,
        email : "pedro@email.com" ,
        telefone : 61800010002
    } ,
    {
        id : 3,
        nome : "Lucas" ,
        idade : 25 ,
        email : "paulo@email.com" ,
        telefone : 61990010002
    }
]

// middleware de validação
// validar se a pessoa existe

function validarPessoas(req, res, next) {
    const id =req.params.id
    const pessoas = listaPessoas.find(pessoas => pessoas.id == id)
    if(pessoas){
        req.pessoas = pessoas
        next()
    } else {
        return res.status(404).json({mensagem: "Pessoa não encontrada!"})
    }
    
    
}


// validar os atributos do corpo

function validarAtributos(req, res, next) {
    const dadosRecebidos = req.body
    if(!dadosRecebidos.nome|| !dadosRecebidos.idade || !dadosRecebidos.email || !dadosRecebidos.telefone){
        return res.status(400).json({mensagem: "Nome, idade, email e telefone são obrigatórios"})
    } else {
        next()
    }
    
}
 


// READ -> buscar todos os produtos
router.get('/pessoas', (req, res) => {
    res.status(200).json(listaPessoas)
    
})



// READ -> busca de produtos especificos
router.get('/pessoas/:id' , validarPessoas, (req, res) =>{
    res.json(req.pessoas)
})




// CREATE -> cadastrar um produto

router.post('/pessoas', validarAtributos, (req, res) => {
    const dados = req.body

        const pessoas = {
            id: Math.round(Math.random() * 1000),
            nome: dados.nome,
            idade: dados.idade,
            email: dados.email,
            telefone: dados.telefone
        }
        listaPessoas.push(pessoas)
        res.status(201).json(
            {
                mensagem: "Pessoa cadastrada com sucesso!",
                pessoas
            })
        

})

// UPDATE - alterar produto 
router.put('/pessoas/:id', validarPessoas, validarAtributos, (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaPessoas.findIndex(pessoas => pessoas .id == id)

    const pessoas  = {
        id: Number(id),
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }
    listaPessoas[index] = pessoas
    res.status(200).json(
    {
        mensagem: "Pessoa alterada com sucesso!",
        pessoas
    })
    


})

// DELETE -> excluir produto
router.delete('/pessoas/:id' , validarPessoas, (req, res) => {
    const id = req.params.id

    const index = listaPessoas.findIndex(pessoas => pessoas.id == id)
    
    listaPessoas.splice(index, 1)
    res.status(200).json({mensagem: "pessoa excluida com sucesso!"})
        
    
})



module.exports = router