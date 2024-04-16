const express = require ('express')

const router = express.Router()


let listaProdutos = [
    {   id: 1,
        nome: "Farinha",
        preco: 8.99
    }
]
 

// middleware de validação
// validar se o produto existe

function validarProduto(req, res, next) {
    const id =req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    if(produto){
        req.produto = produto
        next()
    } else {
        return res.status(404).json({mensagem: "Produto não encontrado!"})
    }
    
    
}
 


// READ -> buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.status(200).json(listaProdutos)
    
})



// READ -> busca de produtos especificos
router.get('/produtos/:id' , validarProduto, (req, res) =>{
    res.json(req.produto)
})

// validar os atributos do corpo

function validarAtributos(req, res, next) {
    const dadosRecebidos = req.body
    if(!dadosRecebidos.nome || !dadosRecebidos.preco){
        return res.status(400).json({mensagem: "Nome e preço são obrigatórios"})
    } else {
        next()
    }
    
}


// CREATE -> cadastrar um produto

router.post('/produtos', validarAtributos, (req, res) => {
    const dados = req.body

        const produto = {
            id: Math.round(Math.random() * 1000),
            nome: dados.nome,
            preco: dados.preco
        }
        listaProdutos.push(produto)
        res.status(201).json(
            {
                mensagem: "Produto cadastrado com sucesso!",
                produto
            })
        

})

// UPDATE - alterar produto 
router.put('/produtos/:id', validarProduto, validarAtributos, (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)

    const produto = {
        id: Number(id),
        nome: novosDados.nome,
        preco: novosDados.preco

    }
    listaProdutos[index] = produto
    res.status(200).json(
    {
        mensagem: "Produto alterado com sucesso!",
        produto
    })
    


})

// DELETE -> excluir produto
router.delete('/produtos/:id' , validarProduto, (req, res) => {
    const id = req.params.id

    const index = listaProdutos.findIndex(produto => produto.id == id)
    
    listaProdutos.splice(index, 1)
    res.status(200).json({mensagem: "produto excluido com sucesso!"})
        
    
})



module.exports = router












