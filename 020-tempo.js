let i = 1;

console.log("iniciando contagem na mesma linha...\n");

const intervalo = setInterval(() => {
  // Limpa a linha do terminal e move o cursor para o ínicio
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  // Escreve o número atual na mesma linha
  process.stdout.write(`Contagem: ${i}`);

  if (i == 10) {
    clearInterval(intervalo); // Para o contador quando chega a 10
    console.log("\n\n Fim da contagem!");
  }

  i++;
}, 3000); // 3000 milissegundos = 3 segundos
