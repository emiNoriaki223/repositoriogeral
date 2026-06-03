const readline = require("readline-sync");

const secreto = 42;
let tentativas = 0;

while (true) {
    let numero = Number(readline.question("Digite um numero: "));
    tentativas++;

    if (numero === secreto) {
        console.log(`Parabens! Voce acertou em ${tentativas} tentativa(s).`);
        break;
    }

    if (numero < secreto) {
        console.log("O numero secreto e maior.");
    } else {
        console.log("O numero secreto e menor.");
    }
}
