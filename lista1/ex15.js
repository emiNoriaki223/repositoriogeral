const readline = require("readline-sync");

let produtos = [];

for (let i = 1; i <= 5; i++) {
    let id = i;
    let nome = readline.question(`Nome do produto ${i}: `);
    let preco = readline.questionFloat(`Preco do produto ${i}: `);

    produtos.push({ id, nome, preco });
}

// a)
console.log("\nProduto com ID 3:");
console.log(produtos.find(produto => produto.id === 3));

// b)
console.log("\nProdutos acima de R$100:");
console.log(produtos.filter(produto => produto.preco > 100));

// c)
console.log("\nNomes dos produtos:");
console.log(produtos.map(produto => produto.nome));

// d)
console.log("\nLista completa:");
produtos.forEach(produto => {
    console.log(
        `ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$${produto.preco}`
    );
});