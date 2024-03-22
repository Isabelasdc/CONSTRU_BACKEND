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

app.listen(3000, () => {
    console.log("Aplicação iniciada e, http://localhost3000")
})