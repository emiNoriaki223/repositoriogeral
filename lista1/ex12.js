const readline = require("readline-sync");

function calcular(a, b, operacao) {
    return operacao(a, b);
}

let num1 = readline.questionFloat("Digite o primeiro número: ");
let num2 = readline.questionFloat("Digite o segundo número: ");

console.log(`Soma: ${calcular(num1, num2, (x, y) => x + y)}`);
console.log(`Subtração: ${calcular(num1, num2, (x, y) => x - y)}`);
console.log(`Multiplicação: ${calcular(num1, num2, (x, y) => x * y)}`);