let entrada = require("prompt-sync")();

let usuario1 = "Sergio";
let usuario2 = "Marcos";
let usuario3 = "Ana";

let saldoUsuario1 = "50";
let saldoUsuario2 = "250";
let saldoUsuario3 = "-20";

let saldoUsuario = false;

let senhaUs1 = "15890";
let senhaUs2 = "46890";
let senhaUs3 = "78123";

let usOk = false;
let snOk = false;
let slOk = false;
let salUs1 = false;
let salUs2 = false;
let salUs3 = false;
let acessoPermitido = false;
let saldoPositivo = false;

console.log("Insira seus dados para acessar o sistema!");

let loginUsuario = entrada("Nome de usuario: ");
let loginSenha = entrada("Insira sua senha: ");
let saldoBancario = entrada("Permitido Sacar: ");

if (usuario1 == loginUsuario.toLowerCase()) {
  console.log("Nome de usuário verificado com sucesso!");
  usOk = true;
}

if (usuario2 == loginUsuario.toLowerCase()) {
  console.log("Nome de usuário verificado com sucesso!");
  usOk = true;
}

if (usuario3 == loginUsuario.toLowerCase()) {
  console.log("Nome de usuário verificado com sucesso!");
  usOk = true;
}

if (senhaUs1 == loginSenha) {
  console.log("Senha verificada com sucesso!");
  snOk = true;
}

if (senhaUs2 == loginSenha) {
  console.log("Senha verificada com sucesso!");
  snOk = true;
}

if (senhaUs3 == loginSenha) {
  console.log("Senha verificada com sucesso!");
  snOk = true;
}

if (saldoUsuario >= saldoBancario) {
  console.log("Pode sacar!");
  slOk = true;
} else {
  console.log("Saldo insuficiente para realizar o saque.");
}

if (usOk == true) {
  if (snOk == true) {
    acessoPermitido = true;
  }
}

if (acessoPermitido == true) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}

if (saldoPositivo == true) {
  console.log("Permitido sacar!");
} else {
  console.log("Não permitido sacar!");
}

entrada("Pressione enter para finalizar o programa!");
