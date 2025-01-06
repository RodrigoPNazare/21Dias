

function calculadora(num1,num2,operador){
    let numero1 = Number(num1)
    let numero2 = Number(num2)
    let resultado

  switch(operador){

    case "+":
        resultado = num1+num2
        break;
    case "-":
        resultado = num1-num2
        break;
    case "*":
        resultado = num1*num2
        break;
    case "/":
        resultado = num1/num2
        break;
    case "e":
        let contador =1
        resultado = num1*num1
        while(contador < num2 -1){
            resultado = resultado*num1
            contador++
        }

        
        break;
    default:
        
  }
return resultado

}
