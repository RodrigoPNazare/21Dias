//Você deve criar uma calculadora que faça as operações: soma, subtração, divisão, multiplicação e exponenciação.

function calculadora (numero1, numero2, operacoes){

    let resultado
    let num1= parseInt(numero1)
    let num2= parseInt(numero2)

    switch(operacoes){

        case "+":
            resultado = num1 + num2
            break;
        case "-":
            resultado = num1 - num2
            break;
        case "/":
            resultado = num1 / num2
            break;
        case "*":
            resultado = num1 * num2
            break;
        case "e":
            let contador = 1
            resultado = num1 * num1
            while(contador < num2 -1){
                resultado = resultado * num1
            contador++
            }
        break;
        
     }   
            
    if(resultado == undefined || resultado > 1000000)
        resultado = "ERRO"
    
    return resultado

    
}    

calculadora(3,1,"e")
