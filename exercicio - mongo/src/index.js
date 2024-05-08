const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config() 

// conexaão com o MongoDB
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USERNAME = process.env.DB_USERNAME
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zauvrpc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Conectado ao banco Mongo"))
    .catch((err) => console.log("Erro ao conectar no Mongo: " , err))




// Middleware
app.use(express.json())

// DB Modelos
const Pessoa = mongoose.model('pessoa', { nome: String})

// Rotas

app.get('/pessoa' , async (req, res) => {
    const pessoa = await Pessoa.find()
    res.json(pessoa)
})

app.get('/pessoa/:id' , async (req, res) => {
    const pessoa = await Pessoa.findById(req.params.id)
    res.json(pessoa)
})


app.put('/pessoa/:id' , async (req,res) => {
    const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, { nome: req.body.nome} , { new: true})
    res.json(pessoa)
})


app.delete('/pessoa/:id', async (req, res) => {
    await Pessoa.findByIdAndDelete(req.params.id)
    res.json()
})



app.post('/pessoa', async (req, res) => {
    const corpo = req.body
    const pessoa = new Pessoa({nome: req.body.nome})
    await pessoa.save()
    res.json(pessoa)
})




app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})