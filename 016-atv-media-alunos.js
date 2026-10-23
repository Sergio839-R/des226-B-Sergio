let entrada = require("prompt-sync")();

const nota1 = parseFloat(entrada("digite a 1º nota: "));
const nota2 = parseFloat(entrada("digite a 2º nota: "));
const nota3 = parseFloat(entrada("digite a 3º nota: "));

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log(`Média final: ${media.toFixed(1)} - APROVADO`);
} else if (media >= 5 && media < 7) {
  console.log(`Média final: ${media.toFixed(1)} - RECUPERAÇÃO`);
} else {
  console.log(`Média final: ${media.toFixed(1)} - REPROVADO`);
}
