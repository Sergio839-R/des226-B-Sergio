let entrada = require("prompt-sync")();

const media = 6;
const media2 = 4;
const media3 = 8;

if (media >= 7) {
  console.log("Nota 1: Foi bem não precisa estudar!");
} else {
  console.log("Nota 1: Precisa estudar mais!");
}

if (media2 >= 7) {
  console.log("Nota 2: Parabéns você passou!");
} else {
  console.log("Nota 2: Você foi reprovado!");
}

if (media3 >= 7) {
  console.log("Nota 3: Parabéns você passou!");
} else {
  console.log("Nota 3: Você foi reprovado!");
}
