const entrada = require("prompt-sync")();
let i = 1;

console.log("iniciando contagem na mesma linha...\n");

const intervalo = setInterval(() => {
  // Limpa a linha do terminal e move o cursor para o ínicio
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  // Escreve o número atual na mesma linha
  process.stdout.write(`Tempo decorrido: ${i} segundos`);

  if (i == 15) {
    clearInterval(intervalo); // Para o contador quando chega a 10
    console.log("\n\n Tempo limite de 15 segundos atingido!");
    entrada("Pressione ENTER para encerrar o programa");
  }

  i++;
}, 1000); // 1000 milissegundos = 1 segundos
