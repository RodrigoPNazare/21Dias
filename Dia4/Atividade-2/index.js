
// DESAFIO DIA 4 "MOTORISTA" 

//CRIANDO VARIÁVEIS & PEDINDO INFORMAÇÕES ao USUARIO
 let nome = prompt("Digite seu nome: ")
 let idade = Number(prompt("Digite sua idade: "))
 let cnh = prompt("Você possui CNH ?  Digite SIM ou NÃO")
 let possuiCarro = prompt("Você possui Carro ?  Digite SIM ou NÃO")

// EXIBINDO MENSAGEM NO CONSOLE
 if(idade <18 && cnh === "não"){
    console.log(nome + ", você não pode dirigir")
}else if(idade >=18 && cnh === "sim" && possuiCarro === "não"){
    console.log(nome + ", você pode dirigir mas não tem um carro")
}else if(idade >=18 && cnh === "sim" && possuiCarro === "sim"){
    console.log(nome + ", você será o motorista!")
}else{
    console.log(" você não pode dirigir")
}