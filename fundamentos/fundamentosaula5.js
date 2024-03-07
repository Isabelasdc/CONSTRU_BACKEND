//função sem parametros e sem retorno
function executar (){
    console.log("Executando função executar")
}

//invocar função

//executar()

function soma (numA, numB){
    console.log(numA + numB)
}

//soma(2, 2)

//função na variavel
const soma2 = function(numA, numB){
    return numA + numB
}
//soma2(2, 2)
//soma2(6, 2)

const resultado =  soma2 (2,2)
console.log("Resultado: " , resultado)

const multiplicador = (numA, numB) => {
    return numA * numB
}
console.log("CHAMANDO MULTIPLICADOR")
console.log(multiplicador(10,1000))

const multiplicar2 = (numA, numB) =>  numA * numB
console.log("CHAMANDO MULTIPLICADOR")
console.log(multiplicar2(20,20))