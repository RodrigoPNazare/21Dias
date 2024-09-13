/*Solicite o nome e o cpf do seu cliente.
Pergunte um valor.
Ofereça a opção de saque ou depósito.
Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
Exiba o saldo total.
Exiba o maior valor inserido(independente de ser depósito ou saque).
Exiba a média dos valores inseridos(independente de ser depósito ou saque).

REGRAS: 
    1- Considere iniciar a variável saldo com algum valor

    1- Não deve ser permitido sacar um valor não disponível no saldo.

    2- Não deve ser permitido sacar nem depositar um valor negativo.*/

//DESAFIO DIA 7 _Caixa Eletrônico_

let saldoTotal = 3000
let maiorValor =0
let mediaValores =0
let continuar = false
let totalTrasacoes =0
do{

    const nome = prompt("Digite Seu Nome: ")
    const cpf = Number(prompt("Digite Seu CPF"))
    const opcaoOperacao = Number(prompt("Escolha a operação que deseja (1) SAQUE (2) DEPOSITO"))
    let valor = Number(prompt("Digite o valor que deseja"))
    
    if(opcaoOperacao === 1 && valor > saldoTotal ){

        console.log("ERRO NO VALOR DO SAQUE!!!")
        console.log("Possivel erro: valor inserido maior que o valor em saldo!!!")
        continuar = false

    }else if(opcaoOperacao === 1 && valor <=0){
        console.log("inserido um valor negativo ou igual a 0")

    }else if(opcaoOperacao === 2 && valor <=0){
        console.log("ERRO DE DEPOSITO!!!")
        console.log("possivel erro: Valor de Deposito Menor ou = 0!!!")
        continuar = false

    }else if(opcaoOperacao === 1){
        saldoTotal -= valor
        totalTrasacoes++
        console.log("ola, " + nome + "  CPF: "+ cpf + " seu saldo é: " +saldoTotal)
        console.log("Saque realizado com sucesso!")
    }else if(opcaoOperacao ===2){
        saldoTotal += valor
        totalTrasacoes++
        console.log("ola, " + nome + "  CPF: "+ cpf + " seu saldo é: " +saldoTotal)
        console.log("Deposito realizado com sucesso!")
    }
    
    let prosseguir = Number(prompt("Desaja voltar as opções? (1) SIM (2) NÃO"))
    
    if(prosseguir === 1){
        continuar = true
    }else{
        continuar = false
    }

    if(maiorValor < valor){
        maiorValor = valor
    }
    if(mediaValores  < valor){
        mediaValores += valor
      mediaValores=mediaValores/totalTrasacoes
    }  
    

}while(continuar)
    
    console.log("O Saldo total da sua conta é: " + saldoTotal)
    console.log("o maior valor inserido é: " + maiorValor)
    console.log("A media dos valores inserido é: " + mediaValores)