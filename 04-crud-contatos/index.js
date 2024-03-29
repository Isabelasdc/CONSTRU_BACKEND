// configuração
const express = require('express')
const app = express()

const tutorial = require('./routes/tutorial')
const subrota = require('./routes/subrota')
const contatos = require('./routes/contatos')

// middlewares
// middleware que transforma o corpo da requisição em objeto json
// dentro da nossa aplicação

app.use(express.json())
 
// trazendo as rotas do modulo tutorial para dentro da minha aplicação
app.use(tutorial)
// trazendo as rotas do modulo subrota
app.use('/rota' , subrota)
// trazendo as rotas do modulo contatos
app.use(contatos)

app.get("/",(req, res) => {
    res.send("Aplicação rodando !!!")
})

app.listen(3000, () =>{
    console.log("Api rodando em http://localhost:3000")
})