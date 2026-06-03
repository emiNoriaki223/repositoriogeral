const readline = require("readline-sync");

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if (b === 0) {
        return "Erro: divisao por zero";
    }
    return a / b;
};

let n1 = Number(readline.question("Digite o primeiro numero: "));
let n2 = Number(readline.question("Digite o segundo numero: "));

console.log("Soma:", somar(n1, n2));
console.log("Subtracao:", subtrair(n1, n2));
console.log("Multiplicacao:", multiplicar(n1, n2));
console.log("Divisao:", dividir(n1, n2));
