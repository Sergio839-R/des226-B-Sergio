let entrada = require("prompt-sync")();

console.log("--- Menu de atendimento ---");

const numComando = entrada("Escolha uma das opções: ");

switch (numComando) {
  case "A1":
    console.log("O produto custa 50 reais;");
    break;

  case "B2":
    console.log("O produto custa 550 reais;");
    break;

  case "C3":
    console.log("O produto custa 300 reais;");
    break;

  default:
    console.log("Opção inválida! Por favor, digite A, B ou C para continuar.");
}
