const entrada = require("prompt-sync")();

let soma = 0;
let nRepeticoes = -1;

do {
  // var permite que o while enchergue a variável número mesmo fora do escopo
  var numero = Number(entrada("Digite os números a serem somados:"));
  // mude de var para let e teste o programa
  soma = soma + numero; // soma += numero;
  nRepeticoes++;
} while (numero !== 0);

console.log(`Total somado: ${soma}`);
console.log(`Quantidade de valores somados: ${nRepeticoes}`);

console.log("");
entrada("Pressione ENTER para encerrar!");
