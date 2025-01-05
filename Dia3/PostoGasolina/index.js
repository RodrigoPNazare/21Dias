//DESAFIO DIA #3:thru

//Criando variáveis 
 let opcao = Number(prompt("Escolha a opção de combustível:\n 1) Gasolina 2) Álcool ou 3 Para calibrar os pneus."))
 let precoGasolina = 5;
 let precoAlcool= 3;
 let valor 
 
 //Criando SwitchCase
 switch(opcao){
   
    case 1:
        valor = Number(prompt("Digite o valor que deseja"))
        console.log("Foram abastecidos " +(valor/precoGasolina)+ "L de gasolina")
        break;
    case 2:
        valor = Number(prompt("Digite o valor que deseja"))
        console.log("Foram abastecidos " +(valor/precoAlcool)+ "L de álcool")
        break;
    case 3:
        console.log("pneus calibrados com sucesso!!")


 }