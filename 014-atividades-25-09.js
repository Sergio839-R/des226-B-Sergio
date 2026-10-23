let entrada = require("prompt-sync")();

let num = entrada("Se o número é par ou ímpar!");

console.log("Verifique se é par ou ímpar: ");

let numComando = entrada("Digite o número do comando: ");

if (num % 2 === 0) {
  console.log("Ele é par");
} else if (num % 1 === 0) {
  console.log("Ele é impar");
} else {
  console.log("Ele é zero");
  
}
