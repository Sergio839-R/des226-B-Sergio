let entrada = require("prompt-sync")();

const idade = 14;
const idade2 = 17;
const idade3 = 27;

// Essas são as pessoas que estão na entrada para entrar.

const estaAcompanhado = true;
const naoAcompanhado = true;
const bloqueado = true;

console.log(
  "Se for de menor e estiver acompanhado e não bloqueado pode entrar, se for de maior e estiver bloqueado não pode entrar: ",
);

const idadeComando = entrada("Digite sua idade: ");

if (idade >= 14 && !estaAcompanhado) {
  console.log("pode entrar:");
} else {
  console.log("não pode entrar:");
}

const idadeComando3 = entrada("Digite sua idade: ");

if (idade2 >= 17 && !naoAcompanhado) {
  console.log("Não Está permitido para entrar:");
} else {
  console.log("pode entrar:");
}

const idadeComando2 = entrada("Digite sua idade: ");

if (idade3 >= 27 && !bloqueado) {
  console.log("Não pode entrar:");
} else {
  console.log("Pode entrar:");
}
