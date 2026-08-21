let entrada = require("prompt-sync")();
// comentário de 1 linha
let nome = "Sergio"; // string ex: "qualquer texto"
let idade = 16; // number ex: 10, 18.23
let trabalha = false; // boolean ex: true, false
let endereço = {
  rua: "brasil",
  num: 40,
  bairro: "centro",
}; // object ex: padrão chave/valor
let funcao = () => console.log("oi"); // function ex: bloco de código

/*
comentário
de mais de
uma linha
*/

// exibindo tipos de variáveis
console.log("Tipos de variáveis");
console.log("Variável: nome: " + typeof nome);
console.log("Variável: nome: " + typeof idade);
console.log("Variável: nome: " + typeof trabalha);
console.log("Variável: nome: " + typeof endereço);
console.log("Variável: nome: " + typeof funcao);

// variáveis definidas sem valor
let nomeDigitado;
let idadeDigitado;
let trabalhaDigitado;

console.log(); // pula uma linha

// passsando valor para as variáveis
nomeDigitado = entrada("Digite seu nome: ");
idadeDigitado = entrada("Qual a sua idade? ");
trabalhaDigitado = entrada("Você trabalha? ");

// Mostrando valor e tipos das variáveis
console.log("Nome: " + nomeDigitado + "Tipo: " + typeof nomeDigitado);
console.log("Nome: " + nomeDigitado + "Tipo: " + typeof idadeDigitado);
console.log("Nome: " + nomeDigitado + "Tipo: " + typeof trabalhaDigitado);
