
   // ATIVIDADE CONHECENDO O USUARIO Dia 9
 do{    
    //CRIANDO AS VARIÁVEIS E REGISTRANDO AS INFORMAÇÕES
    let nome = prompt("Digite seu nome")
    let idade = Number(prompt("Digite sua idade"))
    let anoAtul = Number(prompt("Digite o ano atual"))
    let altura = Number(prompt("Digite sua altura"))
    let peso = Number(prompt("Digite seu peso"))
    let profissao = prompt("Digite sua profissão")
   
       //EXIBINDO AS INFORMAÇÕES DO USUARIO
    console.log("Ola " +nome+ " você tem: "+idade+ "anos, "+"é: "+profissao+", tem: " +altura+"M de altura"+" e pesa: " +peso+ "kg" )

    if(idade < 18){
        console.log("Sem gelada para você")
    }else{
        console.log("Está liberado para tomar umas geladas")
    }
    //CALCULANDO ANO DE NASCIMENTO
    let anoDeNascimento = anoAtul-idade
    console.log("Você nasceu em: "+anoDeNascimento)
    //CALCULANDO E EXIBINDO A IDADE EM DIAS/SEMANAS/MESES
    let idadeEmDias = console.log("Sua idade em dias é: "+idade*365)
    let idadeEmSemanas = console.log("Sua idade em semanas é: "+idade*52)
    let idadeEmMeses = console.log("Sua idade em meses é: "+idade*12)

    //CALCULANDO O IMC E EXIBINDO O RESULTADO
    let imc = (peso / (altura * altura))
    console.log("Seu IMC é: "+imc+"kg/m2;")
    if(imc < 18.5){
        console.log("você está com Magreza, quando o resultado do IMC é menor que 18,5 kg/m2;")
    }else if(imc >=18.5 && imc < 24.9 ){
        console.log("você está Normal, quando o resultado do IMC está entre 18,5 e 24,9 kg/m2;")
    }else if(imc >= 24.9 && imc <= 30){
        console.log("você está com Sobrepeso, quando o resultado do IMC está entre 24,9 e 30 kg/m2;")
    }else if(imc > 30){
        console.log("você está com Obesidade, quando o resultado do IMC é maior que 30 kg/m2.")
    }
    //CALCULANDO E EXIBINDO OS ANOS QUE O USUÁRIO VIVEU ATÉ O ANO ATUAL
    let contadorDeAnos =0
    for(let anosQueViveu = anoDeNascimento; anoAtul>=anosQueViveu; anosQueViveu++){
        
        if(contadorDeAnos<=1){
        console.log(anosQueViveu + " = " + "você tinha: "+ contadorDeAnos++ +" ano de idade" )
        }else{
            console.log(anosQueViveu + " = " + "você tinha: "+ contadorDeAnos++ +" anos de idade" )
        }

    }
        let prosseguir = Number(prompt("Para add os dados novamente digite (1)  para encerrar digite (2)"))
        if(prosseguir === 1){
            continuar = true
        }else {
            continuar =false
        }

     }while(continuar)



  
