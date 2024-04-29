const express = require('express')
const app = express()

app.use(express.json())

const livrosRouter = require ('./routes/livros')
app.use(livrosRouter)











app.listen(3000, () => {
    console.log("Esta aplicação está rodando em http://localhost:3000")
})