//DESAFIO DIA #3:Calculadora

//Criando as variáveis e criando a entrada dos dados
let operacao = Number(prompt("Digite (1) Somar 2) Subtrair 3) Dividir 4) Multiplicar"))
let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))

//Criando as switchcase
switch(operacao){
    case 1:
        console.log(num1+" + "+num2+" = "+(num1+num2))
        break;
    case 2:
        console.log(num1+" - "+num2+" = "+(num1-num2))
        break;
    case 3:
        console.log(num1+" / "+num2+" = "+(num1/num2))
        break;
    case 4:
        console.log(num1+" x "+num2+" = "+(num1*num2))
        break;
    default:
        console.log("Operação Invalida")
        break;
    




}


