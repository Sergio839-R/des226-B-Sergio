let entrada = require("prompt-sync")();

const codigoProduto = "A1";
const codigoProduto2 = "B2";
const codigoProduto3 = "C3";

console.log("--- Menu de atendimento ---");

const numComando = entrada("Escolha uma das opções: ");

switch (codigoProduto) {
  case "A1":
    console.log("O produto custa 50 reais;");
    break;

  default:
    console.log("Opção inválida! Por favor, digite A, B ou C para continuar.");
}

const numComando2 = entrada("Escolha uma das opções: ");

switch (codigoProduto2) {
  case "B2":
    console.log("O produto custa 550 reais;");
    break;

  default:
    console.log("Opção inválida! Por favor, digite A, B ou C para continuar.");
}

const numComando3 = entrada("Escolha uma das opções: ");

switch (codigoProduto3) {
  case "C3":
    console.log("O produto custa 300 reais;");
    break;

  default:
    console.log("Opção inválida! Por favor, digite A, B ou C para continuar.");
}
