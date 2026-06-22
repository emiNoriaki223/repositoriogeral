const readline = require("readline-sync");

let numero = parseFloat(readline.question("Digite um número: "));

console.log(numero % 2 === 0 ? "par" : "impar");