const somar = function (numA, numB){
    return numA + numB
}

const subtrair = function (numA, numB){
    return numA - numB
}

const multiplicar = function (numA, numB){
    return numA * numB
}

const dividir = function (numA, numB){
    return numA / numB
}

console.log(somar(2,2))
console.log(subtrair(10,9))
console.log(multiplicar(10,10))
console.log(dividir(100,10))

module.exports = {
    somar, subtrair, multiplicar, dividir
}