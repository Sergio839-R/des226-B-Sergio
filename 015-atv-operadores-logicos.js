let entrada = require("prompt-sync")();

const idade = 16;
const idade2 = 25;

const estaAcompanhado = true;
const bloqueado = true;

console.log(
  "Se for de menor e estiver acompanhado e não bloqueado pode entrar, se for de maior e estiver bloqueado não pode entrar: ",
);

const idadeComando = entrada("Digite sua idade: ");

if (idade >= 16 && estaAcompanhado) {
  console.log("Está permitido para entrar:");
} else {
  console.log("Não pode entrar:");
}

const idadeComando2 = entrada("Digite sua idade: ");

if (idade2 >= 25 && bloqueado) {
  console.log("Não pode entrar:");
} else {
  console.log("Pode entrar:");
}
