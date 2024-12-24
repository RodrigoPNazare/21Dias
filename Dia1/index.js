/*DESAFIO DIA #3:
Conhecendo o usuário*/

//CRIANDO VARIÁVEIS E PEDINDO INFORMAÇÕES
  let nome = prompt("Digite seu nome")
  let idade = Number(prompt("Digite sua idade"))
  let altura = Number(prompt("Digite sua altura"))
  let peso = Number(prompt("Digite seu peso"))
  let anoAtual = Number(prompt ("Digite o ano atual"))
//CALCULANDO IMC
  let imc = peso / (altura * altura)
//CALCULANDO ANO DE NASCIMENTO 
  let anoNascimento = anoAtual - idade  
//EXIBINDO AS INFORMAÇÕES
  console.log("Ola, "+nome+ " você tem: "+idade+" anos, nasceu em: "+anoNascimento+
    ",tem: "+altura+"m de altura e pesa: "+peso+"kg, seu IMC é: "+imc+"Kg/m2")


