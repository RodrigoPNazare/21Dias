//DESAFIO DO DIA 6

//algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostra no console uma contagem de 0 até o número recebido.
   let numero = Number(prompt("Digite um numero inteiro!"))
   console.log ("Contagem de 0 a "+ numero + ":")
   for(let intnum =0; intnum<=numero; intnum++){
    console.log(intnum)
   }
//algoritmo que usando a estrutura FOR mostra no console uma contagem de 0 a 50 de 5 em 5
    console.log("\nContagem de 0 a 50, de 5 em 5")
    for(let cont = 0; cont <=50; cont+=5){
    console.log(cont)
    }
//  algoritmo que usando a estrutura FOR mostra no console uma contagem de 50 a 0 de 5 em 5
    console.log("contagem inversa de 50 a 0")
    for(let cont = 50; cont>=0; cont-=5 ){
        console.log(cont)
    }




    