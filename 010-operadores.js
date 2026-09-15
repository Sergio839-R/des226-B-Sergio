let entrada = require("prompt-sync")();

// vamos calcular
let strNum1 = entrada("insira o 1º valor: ");
let strNum2 = entrada("insira o 2º valor: ");

let num1 = parseInt(strNum1);
let num2 = parseInt(strNum2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

console.log(`Soma: ${num1} + ${num2} = ${soma}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);
console.log(`Divisão: ${num1} ÷ ${num2} = ${divisao}`);
console.log(`Resto Divisão: ${num1} % ${num2} = ${restoDivisao}`);
