const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config()


// conexaão com o MongoDB
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zauvrpc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Conectado ao banco Mongo"))
    .catch((err) => console.log("Erro ao conectar no Mongo: " , err))




// Middleware
app.use(express.json())

// DB Modelos
const Tarefa = mongoose.model('tarefa', { nome: String})

// Rotas
app.get('/', (req, res) => {
    res.json("Hello")
})

app.get('/tarefas' , async (req, res) => {
    const tarefas = await Tarefa.find()
    res.json(tarefas)
})

app.get('/tarefas/:id' , async (req, res) => {
    const tarefa = await Tarefa.findById(req.params.id)
    res.json(tarefa)
})


app.put('/tarefas/:id' , async (req,res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, { nome: req.body.nome} , { new: true})
    res.json(tarefa)
})


app.delete('/tarefas/:id', async (req, res) => {
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json()
})






app.post('/tarefas', async (req, res) => {
    const corpo = req.body
    const tarefa = new Tarefa({nome: req.body.nome})
    await tarefa.save()
    res.json(tarefa)
})




app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})