let entrada = require("prompt-sync")();

let numero = "30";

let numPositivo = false;
let numNegativo = false;

let numeroPar = false;
let numeroImpar = false;

console.log("Verifique se é par ou ímpar: ");

let numComando = entrada("Digite o número do comando: ");

if (numero == 30) {
  console.log("Ele é par");
} else {
  console.log("Ele é impar");
}
