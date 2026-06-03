const readline = require("readline-sync");

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisao por zero";
    }
    return a / b;
}

let n1 = Number(readline.question("Digite o primeiro numero: "));
let n2 = Number(readline.question("Digite o segundo numero: "));

console.log("Soma:", somar(n1, n2));
console.log("Subtracao:", subtrair(n1, n2));
console.log("Multiplicacao:", multiplicar(n1, n2));
console.log("Divisao:", dividir(n1, n2));
