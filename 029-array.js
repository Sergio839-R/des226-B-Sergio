let arrayVazio = [];

let listaNumeros = [1, 2, 3, 4];

let listaNumeros2 = [1.3, 2.5, 3, 4.25];

let listaFrutas = ["Maçã", "Melancia", "Pera"];

// Visualizar valor por posição
console.log(listaNumeros[1]);
console.log(`Frutas da lista: ${listaFrutas}`);
console.log(`Frutas da lista: ${listaFrutas[0]}, ${listaFrutas[1]}`);

for (cont = 0; cont < listaNumeros2.length; cont++) {
  console.log(listaNumeros2[cont]);
}

// Exiba a lista de número 1, apresentando os números lado a lado separado por -
// EX: 1 - 7 - 10...
let resultado = "";

for (let listaNumeros = 1; listaNumeros <= 4; listaNumeros++) {
  if (listaNumeros > 1) {
    resultado += " - ";
  }
  resultado += listaNumeros;
}

console.log(resultado);

// Jeito simples
console.log(listaNumeros.join(" - "));

listaNumeros.push(5);

console.log(listaNumeros.join(" - "));

listaNumeros[10] = 10;

console.log(listaNumeros.length);

console.log(listaNumeros.join(" - "));
