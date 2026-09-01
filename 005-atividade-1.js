let entrada = require("prompt-sync")();

let nome = entrada("digite seu nome");
let profissao = entrada("digite sua profissão");
let ano = entrada("digite ano em que nasceu");

console.log("");

console.log("Tipos de variáveis");
console.log("nome: " + nome);
console.log("profissão: " + profissao);
console.log("Ano de nascimento: " + ano);

console.log("");

console.log("Nome: " + typeof nome);
console.log("Profissão: " + typeof profissao);
console.log("Ano de nascimento: " + typeof ano);

entrada();
