
//DESAFIO DIA #9:1 - Conhecendo seu usuário
let sair = true
do{

let nome = prompt("Digite seu nome")
let idade = Number(prompt("digite sua idade"))
let peso = Number(prompt("digite seu peso"))
let altura = Number(prompt("digite sua altura"))
let profissao = prompt("digite sua profissão")
let anoAtual = Number(prompt("Digite o ano atual"))
let idadeEmDias = 365*idade
let idadeEmMes= 12*idade
let idadeEmSemanas = 52*idade

if(idade >=18){
    console.log("Está liberado para tomar umas geladas")
}else{
    console.log("Sem gelada para você")
}

console.log( "Ola "+nome+" você tem: " +idade+ " anos é: "+profissao+" tem: "+altura+"M de altura "+ "e pesa: "+ peso +"kg")

console.log("idade em Dias: " +idadeEmDias+" idade em mês: "+idadeEmMes+" idade em semanas:"+idadeEmSemanas)

let imc = peso / (altura * altura)
if(imc <18.5){
    console.log("Magreza, quando o resultado é menor que 18,5 kg/m2;")
}else if(imc >= 18.5 && imc < 24.9){
    console.log("Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;")
}else if(imc >= 24.9 && imc < 30){
    console.log("Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;")
}else{
  console.log("Obesidade, quando o resultado é maior que 30 kg/m2.")
}
console.log("Seu IMC é "+imc+"kg/m2")

let anoNascimento = anoAtual-idade
console.log("Você nasceu em: "+anoNascimento)
let contador=0
for(let anosViveu=anoNascimento; anosViveu<anoAtual; anosViveu++){
    contador++
    console.log("Ano: " + anosViveu+ " idade que tinha: "+contador)
}

let continuar = Number(prompt("Digite 1 Para Sair e 2 Para Continuar"))
    if(continuar === 1){
        sair = false
    }else{
        sair = true
    }

}while(sair)