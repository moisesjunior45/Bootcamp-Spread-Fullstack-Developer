// Função Anônima

const soma = function(a,b) {
    return a + b;
}
console.log(soma(2,4))

// Função autoinvocável

const soma2 = (
    function(a,b) {
        return a + b;
}
)(1,2);

console.log(soma2);

// Função Callbacks - Função que é passada como argumento para outra função

const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma3 = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSoma);    
console.log(resultSub);