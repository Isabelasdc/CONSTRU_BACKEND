const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const DBconnection = require('./database/connection')
DBconnection()
   
const routes = require ('./routes/routes')
app.use(routes)





app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})