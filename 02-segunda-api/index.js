const express = require('express')
const app = express()
const port = 3000
// Middleware ---> Intermediário
app.use('/', (req, res, next )=> {
    console.log("PASSOU NO INTERMEDIARIO")
    console.log("Data: " + Date.now())
    next()
})


app.use(express.json())


app.get('/', (req,res) => {
    res.send ("Hello World")
})

app.get('/aluno', (req,res) => {
    console.log(req.body)
    res.send ("OK")
})


app.listen(port, ()=>{
    console.log("Aplicação iniciada e, http://localhost3000")
})