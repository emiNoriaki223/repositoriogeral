const readline = require("readline-sync");
const celsius = readline.questionFloat("celsius pra conversão: ")
const fahrenheit = celsius * 1.8 + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);