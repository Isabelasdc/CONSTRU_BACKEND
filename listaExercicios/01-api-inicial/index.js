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
//  cria um endpoint devolva seu nome e matricula
app.get('/aluno', (req, res) => {
    res.send("Nome: Isabela \n Matricula: 23114290140")
})

        
   app.get('/teste', (req, res) => {
    res.send("Teste Ok")
   })

// app.get('/aluno/:nome/:matricula/:curso', (req, res) => {
    // console.log(req.params)
    // res.send(`Olá ${req.params.nome}, 
    // sua matricula é ${req.params.matricula},
    // seu curso é ${req.params.curso}`)
// })

   app.get('/exercicio1/:nota1/:nota2/:nota3/:nota4', (req, res) => {
   const nota1 = Number(req.params.nota1)
   const nota2 = Number(req.params.nota2)
   const nota3 = Number(req.params.nota3)
   const nota4 = Number(req.params.nota4)

   const media = (nota1 + nota2 + nota3 + nota4) / 4

   const mensagem = media >= 7 ? "Aprovado" : "Reprovado"

   res.send(`Media: ${media} aluno: ${mensagem}`)
  
   })



// query params
app.get('/pessoa', (req, res) => {
    console.log(req.query)
    res.send("OK")
})


// exercicio 1 
app.get('/nota', (req, res) => {
    console.log(req.query)
    const nota1 = Number(req.query.nota1)
    const nota2 = Number(req.query.nota2)
    const nota3 = Number(req.query.nota3)
    const nota4 = Number(req.query.nota4)

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    const resultado = media >= 7 ? "Aprovado" : "Reprovado"

    res.send(`
        Media: ${media.toFixed(1)}
        Resultado: ${resultado}
    `)
})


// executando a aplicação na porta definida


  

app.listen(3000, () => {
    console.log('Api iniciada! rodando em http://localhost:3000')
})

// http:localhost:3000