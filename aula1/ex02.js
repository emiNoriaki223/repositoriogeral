const readline = require("readline-sync");

let n1 = Number(readline.question("Primeiro numero: "));
let n2 = Number(readline.question("Segundo numero: "));

console.log(`Soma: ${n1 + n2}`);
console.log(`Subtracao: ${n1 - n2}`);
console.log(`Multiplicacao: ${n1 * n2}`);

if (n2 === 0) {
    console.log("Erro: divisao por zero.");
} else {
    console.log(`Divisao: ${n1 / n2}`);
}
