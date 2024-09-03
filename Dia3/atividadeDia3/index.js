//Calculo de IMC

let nome = prompt("Digite seu Nome: ");
let idade = Number(prompt("Digite sua idade: "));
let altura = Number(prompt("Digite sua Altura: "));
let peso = Number(prompt("Digite seu peso: "));
let anoAtual = 2024;
let anoDeNascimento = anoAtual - idade;
let imc = peso / (altura * altura);

console.log(
  "Olá: " +
    nome +
    ", você tem: " +
    idade +
    " anos, " +
    " nasceu em: " +
    anoDeNascimento +
    ", tem: " +
    altura +
    " de altura, " +
    " pesa: " +
    peso +
    "Kg" +
    ", seu IMC é: " +
    imc +
    "Kg/m2"
);
