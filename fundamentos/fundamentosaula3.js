//Impressão de informação terminal 


console.log('Testando impressão de informação no terminal')
console.error("Testando console erro")
console.warn('testando console warn')

//criando variaveis com o var
var nome
nome = "Isabela Sousa"
nome = "Yasmim Sousa"

console.log("Imprimindo variavel nome: ")
console.log(nome)

// let e const

//const (constante)
//criar uma variavel que não vai poder ser alterada
const primeiroNome = "Isabela"
//primeiroNome = "Yasmim"//não posso reatribuir variaveis constantes

console.log(primeiroNome)

//let
//criar variavel que pode ser alterada

let idade = 20 
idade = 30
idade = "Trinta"

console.log("Imprimindo o valor da variavel idade(com let)")
console.log(idade)

//tipos de dados
//string

let nomeCompleto = "Isabela Sousa"
nomeCompleto = 'Isabela Sousa'

let textoOla = "Olá " + nomeCompleto + " , tudo bem com você?"


//console.log(textoOlaComTemplateString)

let nomeUsuario = "Isabela Sousa"
let idadeUsuario = 23
let cursoUsuario = "Análise e Desenvolvimento de sistemas"
let textoOlaComTemplateString = `Olá ${2 + 2}, tudo bem com você`

// template string
let pessoaComTemplateString = `
Olá ${nomeUsuario},
Sua idade é ${idade},
Seu curso é ${cursoUsuario}, Iesb`

console.log(pessoaComTemplateString)

//verificar o tipo de uma variavel
console.log("Verificando o tipo de variavel idade")
console.log(typeof idade2)

//tipo number
let numeroInteiro = 2000
let numeroNegativo = -60
let numeroFlutuante = 25.90

//tipo array
let lista = []

console.log(lista)

lista.push("PrimeiroItem")

console.log(lista)

lista.pop()

console.log(lista)

// Bolean

true
false

//tipo object



let pessoa ={
    nome: "Isabela",
    idade: 23,
    curso: "ADS",
    semestre: "1/2024"
}

console.log("imprimindo objeto pessoa")
console.log(pessoa)
console.log(typeof pessoa)
console.log(`Olá ${pessoa.nome}`)

//tipos null
let telefone = null // ausência de valor 

//tipo underfined = NaN
let teste = 10 / "ola"
console.log(teste)

//tratamento de daos (String)
let texto = "Isabela Sousa"
//.length // quantidade de caracteres do texto
console.log(texto.length)
//texto em caixa alta
console.log(texto.toUpperCase())
//texto em caixa baixa 
console.log(texto.toLowerCase())
//replace substituição
let valor = "10.50"
console.log(valor)

valor = valor.replace("," , ".")
console.log(valor)

// tratamento de dados (number)
let numero = 10.777777777777777
//fixar numero de casas do numero flutuante

console.log(numero.toFixed(2))

//transformando flot para inteiro
console.log(Number.parseInt(numero))

let numeroIntero = 10

//transformando inteiro para float
console.log(Number.parseFloat(numeroIntero).toFixed(2))
let valorEmDolar = 10.54

console.log(valorEmDolar.toLocaleString('pt-BR', {style:'currency' , currency: 'BRL'}))
console.log(valorEmDolar.toLocaleString('pt-BR', {style:'currency' , currency: 'USD'}))

let idadeUser =  "20"
console.log(Number(idadeUser))

console.log(Math.PI)

//operadores relacionais 

//condições
// if else

//if(condicao) {
 //   acao
//}
//if (condicao) {
//    acao
//} else {
 //   acao
//}
 