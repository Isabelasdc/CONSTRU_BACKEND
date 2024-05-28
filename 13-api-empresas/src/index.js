const express = require('express')
const swaggerUI = require('swagger-ui-express')
const app = express()

const PORT = 3000

app.use(express.json())

const DBconnection = require('./database/connection')
DBconnection()

const swaggeFile = require('./swagger.json')
app.use('/api-docs' , swaggerUI.serve, swaggerUI.setup(swaggeFile))

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)
   
const routes = require ('./routes/routes')
const { checarToken } = require('./validators/AutenticacaoValidator')
app.use("/" , checarToken, routes)






app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})