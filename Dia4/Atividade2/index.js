//DESAFIO DIA #4: algoritmo utilizando a estrutura de repetição FOR que receba 1 número
//e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.


//Criando Variáveis
 let recebeValor = Number(prompt("Digite um número inteiro positivo!"))

 for(let tabuada = recebeValor; tabuada<=recebeValor+2; tabuada++){
    console.log("A tabuada do numero: " + tabuada)
    for(let contador=0; contador<=10; contador++){
        
        console.log(tabuada +" * "+ contador +" = "+ (tabuada*contador))

    }

 }

        

    







