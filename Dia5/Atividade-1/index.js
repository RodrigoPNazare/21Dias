//DESAFIO DIA  "CALCULADORA"

//CRIANDO VARIÁVEIS
let num1 = Number(prompt("Digite o primeiro numero: "))
let num2 = Number(prompt("Digite o segundo numero: "))
let operacao = Number(prompt("Digite (1) para Somar, (2) para Subtrair, (3) para Multiplicar e (4) para Dividir"))

//CRIANDO SWITCHCASE
switch(operacao){

    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1+num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1-num2))
        break;
    case 3:
        console.log(num1 + " x " + num2 + " = " + (num1*num2))
        break;
    case 4:
        console.log(num1 + " / " + num2 + " = " + (num1/num2))
        break;
    default:
        console.log("OPERAÇÃO INVALIDA")
        break;

}