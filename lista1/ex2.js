const readline = require("readline-sync");

let base = parseFloat(readline.question("Digite a base do retangulo: "));
let altura = parseFloat(readline.question("Digite a altura do retangulo: "));

let area = base * altura;
let perimetro = 2 * (base + altura);

console.log(`A área do retângulo é: ${area}`);
console.log(`O perímetro do retângulo é: ${perimetro}`);