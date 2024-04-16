const express = require('express')
const app = express()

app.use(express.json())

// rotas
const produtoRouter = require('./routes/produtos')

app.use(produtoRouter)


app.listen(3000, () => {
    console.log("Aplicação está rodando em http://localhost:3000")
})