const readline = require("readline-sync");

function range(inicio, fim) {
    let numeros = [];

    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }

    return numeros;
}

function soma(array) {
    let total = 0;

    for (let numero of array) {
        total += numero;
    }

    return total;
}

let inicio = readline.questionInt("Digite o inicio: ");
let fim = readline.questionInt("Digite o fim: ");

let resultado = range(inicio, fim);

console.log(resultado);
console.log("Soma =", soma(resultado));