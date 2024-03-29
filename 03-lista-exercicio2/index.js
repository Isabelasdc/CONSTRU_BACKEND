const express = require('express')
const app = express()


//middleware  --> intermediario
app.use(express.json())

// logica -> contrato com os exercicios
// PATH PARAMS

app.get('/exercicio1/:qtMinima/:qtMaxima', (req, res) => {
    const quantidadeMinima = Number(req.params.qtMinima)
    const quantidadeMaxima = Number(req.params.qtMaxima)
   
    const estoqueMedio = (quantidadeMaxima + quantidadeMinima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})


// QUERY PARAMS
app.get('/exercicio1', (req, res) => {
    const quantidadeMinima = Number(req.query.qtMinima)
    const quantidadeMaxima = Number(req.query.qtMaxima)
   
    const estoqueMedio = (quantidadeMaxima + quantidadeMinima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})




// BODY
app.post('/exercicio1', (req, res) => {
    const quantidadeMinima = req.body.qtMinima
    const quantidadeMaxima = req.body.qtMaxima

    const estoqueMedio = (quantidadeMaxima + quantidadeMinima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})


// atividade 7 - lista 2
app.post('/exercicio7' , (req, res) => {

    const corpo = req.body
    let listaprodutos = []
    
                                      
    corpo.forEach(produto => {
        listaprodutos.push(produto)
        
    });

    let soma = 0
    listaprodutos.forEach(produto => {
        soma = soma + produto.preco
    })

    const media = soma / listaprodutos.length

    // calcular o maiorPreco
    let maiorPreco = 0
    // logica

    listaprodutos.forEach(produto =>{
        if (produto.preco > maiorPreco){
            maiorPreco = produto.preco
        }
    })

    // 
    .max(listaprodutos.map(produto => produto.preco))

    const resultado = {
        precoMedia: media.toFixed(2),
        maiorPreco: maiorPreco
    }
    res.json(resultado)
  
})










app.listen(3000, () => {
    console.log("Aplicação iniciada e, http://localhost3000")
})