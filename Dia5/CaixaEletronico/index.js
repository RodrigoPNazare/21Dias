//DESAFIO DIA #5:Caixa eletrônico (DOWHILE)

    let contador =0
    let saldo = 3000
    let ativo = true
    let maiorValorInserido=0
    let mediaValores=0
    let totalTransacoes=0
    let media
    
    do{
    const nome = prompt("digite seu nome")
    const cpf = Number(prompt("Digite seu CPF"))
    let opcao = prompt("Digite S para saque e D para deposito")  
    let valor = Number(prompt("Digite o valor desejado")) 
    
   if(valor<=0){
    console.log("Operação não realizada")
     }else if(opcao==="s" && valor>saldo){
      console.log("Valor não disponível em saldo")
       }else if(opcao==="s"){
        console.log("Olá "+nome+" CPF "+cpf+" seu Saldo atual é: ")
        saldo -= valor
        console.log(saldo)
        totalTransacoes++
        
        if(valor>maiorValorInserido){
        maiorValorInserido=valor
        }
        
        }else if(opcao==="d"){
        console.log("Olá "+nome+" CPF "+cpf+" seu Saldo atual é: ")
        saldo+=valor
        console.log("+" +saldo)
        totalTransacoes++
        if(valor>maiorValorInserido){
        maiorValorInserido=valor
        }
        }else{
        console.log("Operação invalida")
        }
        
let continuar = Number(prompt("Insira 1 para continuar e 2 para parar"))
if(continuar===2){
ativo=false
}else{
    ativo=true
    }
 mediaValores+=valor
 media=mediaValores/totalTransacoes
}while(ativo)
console.log("Á média dos valores é: "+ media)
console.log("O maior valor inserido foi: "+ maiorValorInserido)
console.log("Total de transações: "+ totalTransacoes)
console.log("O Saldo total é: "+ saldo)