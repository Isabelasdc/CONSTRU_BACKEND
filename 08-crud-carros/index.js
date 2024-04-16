const express = require ('express')

const app = express()

//  middleware 
// que transforma o corpo da requisição em objeto json
app.use(express.json())
//  que faz um rateamento para as do CRUD de carros 
const carrosRouter = require('./routes/carros')
app.use(carrosRouter)







app.listen(3000, () => {
    console.log("Aplicação está rodando em http://localhost:3000")
})