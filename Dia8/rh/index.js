//DESAFIO DIA #9: 2 - RH Previsão salarial de 10 anos

    let confirme = true
    let aumento = 0.015
   
    do{

        const nome = prompt("Digite seu nome")
        let idade = Number(prompt("Digite sua idade"))
        let salarioAtual = Number(prompt("Digite seu salário atual"))
        let anoAtual = Number(prompt("Digite o ano atual"))
        console.log("Ola "+nome+", idade: "+idade+" salario atual: "+salarioAtual)
        
        for(let tempoDeTrabalho=0; tempoDeTrabalho<=10; tempoDeTrabalho++){
           let reajuste =salarioAtual+=salarioAtual*aumento
            aumento*=2
            
            console.log((anoAtual + tempoDeTrabalho)+ " = R$ "+reajuste)
            
            }

        let continuar = Number(prompt("Digite 1 para Retornar 2 para continuar"))
        if(continuar===1){
            confirme=true
        }else if(continuar===2){
            confirme=false
        }else{
            console.log("ERRO!! opção invalida!")
        }
        
    }while(confirme)
        
        