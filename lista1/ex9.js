const readline = require("readline-sync");

const a = readline.questionFloat("Digite o primeiro número: ");
const b = readline.questionFloat("Digite o segundo número: ");

function min(a, b) {
    return a < b ? a : b;
}

console.log(`O menor número é ${min(a, b)}`);