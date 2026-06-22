const readline = require("readline-sync");

function reverter(array) {
    let invertido = [];

    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]);
    }

    return invertido;
}

let entrada = readline.question(
    "Digite os números separados por vírgula: "
);

let array = entrada.split(",");

console.log("Original:", array);
console.log("Invertido:", reverter(array));