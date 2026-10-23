let entrada = require("prompt-sync")();

const valorCompra = parseFloat(entrada("Insira o valor: "));

const valorTotal = valorCompra > 150 ? valorCompra : valorCompra + 20;

console.log(`valor total do pedido R$ ${valorTotal}`);
