const entrada = require("prompt-sync")();

const nInicial = Number(entrada("Digite o número inicial: "));
const nFinal = Number(
  entrada("Digite o número final da tabuada que você quer ver"),
);

for (let contador = nInicial; contador <= nFinal; contador++) {
  console.log(`Tabuada do ${contador}`);
  for (let i = 1; i <= 10; i++) {
    const resultado = contador * i;
    console.log(`${contador} X ${i} = ${resultado}`);
  }
  console.log("");
}

entrada("Pressione ENTER para encerrar!");
