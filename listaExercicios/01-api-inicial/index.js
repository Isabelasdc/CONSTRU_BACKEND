// criando nossa aplicação
const express = require('express')
// definindo o caminho da aplicação
const app = express()


app.get('/', (req, res) => {
res.send("Olá")
})

app.get('/hello', (req, res) => {
    res.send("Hello World")
})


app.get('/nome', (req, res) => {
     res.send("Isabela Sousa")
   })
        
   app.get('/teste', (req, res) => {
    res.send("Teste Ok")
   })


   app.get('/exercicio1/:nota1/:nota2/:nota3/:nota4', (req, res) => {
   const nota1 = Number(req.params.nota1)
   const nota2 = Number(req.params.nota2)
   const nota3 = Number(req.params.nota3)
   const nota4 = Number(req.params.nota4)

   const media = (nota1 + nota2 + nota3 + nota4) / 4

   const mensagem = media >= 7 ? "Aprovado" : "Reprovado"

   res.send(`Media: ${media} aluno: ${mensagem}`)
  
   })


// executando a aplicação na porta definida


  

app.listen(3000, () => {
    console.log('Api iniciada! rodando em http://localhost:3000')
})

// http:localhost:3000