let objeto = {}; // objeto vazio

let pessoa = {
  nome: "Sergio",
  profissão: "Meteorológico",
  idade: 16,
  trabalha: true,
}; // objeto com atributo

let funcionarios = {
  nome: "Carlos",
  cargo: "Gerente",
  salario: 7332.3,
  endereco: {
    rua: "Brasil",
    numero: 10,
    bairro: "Centro",
    cidade: "Luiziânia",
  },
};

console.log(`Tipo variavel objeto vazio: ${typeof objeto}`);
console.log(`Tipo variavel pessoa: ${typeof pessoa}`);
console.log(pessoa); // visualizar objeto armazenado
console.log(`Nome da pessoa cadastrada: ${pessoa.nome}`); // visualizar atributo do objeto
console.log(`Endereço do funcionário: ${funcionarios.endereco.cidade}`);
