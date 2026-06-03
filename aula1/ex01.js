const readline = require("readline-sync");

let nome = readline.question("Nome: ");
let idade = Number(readline.question("Idade: "));
let cidade = readline.question("Cidade: ");

console.log(`Ola! Meu nome e ${nome}, tenho ${idade} anos e sou de ${cidade}.`);
