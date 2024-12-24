//DESAFIO DIA #2:Motorista

//Criando variáveis e pedindo informações
 let nome = prompt("Digite seu nome")
 let idade = Number(prompt("Digite sua idade: "))
 let temCnh = prompt("Você tem carta de motorista? sim/não")
 let temCarro = prompt("Você tem carro? sim/não")
//Criando tomada de decisão para ver se pode ou não dirigir
 if(idade < 18 || temCnh === "não"){
    console.log("Olá "+nome+" você não pode dirigir")
 }else if(idade >=18 && temCnh === "sim" && temCarro === "não"){
    console.log("Olá "+nome+" você pode dirigir mas não tem um carro")
 }else{
    console.log("Olá "+nome+" você será o motorista!")
 }

