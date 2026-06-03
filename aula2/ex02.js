const readline = require("readline-sync");

function validarSenha(senha) {
    return senha.length >= 8;
}

let senha = readline.question("Digite uma senha: ");

if (validarSenha(senha)) {
    console.log("Senha valida");
} else {
    console.log("Senha fraca - minimo 8 caracteres");
}
