const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const DBconnection = require('./database/connection')
DBconnection()

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)
   
const routes = require ('./routes/routes')
const { checarToken } = require('./validators/AutenticacaoValidator')
app.use("/" , checarToken, routes)





app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})