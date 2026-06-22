const readline = require("readline-sync");

function podeVotar(idade) {
    return idade >= 16;
}

const idade = readline.questionInt("Digite sua idade: ");

console.log(
    podeVotar(idade)
        ? "Você pode votar."
        : "Você não pode votar."
);