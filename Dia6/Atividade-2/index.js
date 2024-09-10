/*Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.*/
 
 //DESAFIO DO DIA 6

let tabuada = prompt("escolha o numero que deseja")
for(let x =0; x<=2; x++){
    console.log("tabuada do numero " + tabuada)
    for(let contagem =0; contagem <= 10; contagem++){
   
        console.log(tabuada + " X " + contagem + " = " + tabuada*contagem)
    
   }
   tabuada ++
}

