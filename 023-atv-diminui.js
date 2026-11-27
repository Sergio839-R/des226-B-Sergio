const entrada = require("prompt-sync")();

const valorInicial = Number(
  entrada("Digite o valor para iniciar a contagem regressiva: "),
);

console.log("Iniciando contagem regressiva...");

for (let i = valorInicial; i >= 0; i--) {
  console.log(i);
}

console.log("Decolagem autorizada");
console.log("");

entrada("Pressione ENTER para encerrar o programa!");
