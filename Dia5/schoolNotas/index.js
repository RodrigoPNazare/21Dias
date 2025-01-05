
//DESAFIO DIA #5:Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE.

//Criando variáveis
    let media = 0
    let qntHomens = 0
    let qntMulheresNotaMaior7 = 0
    let maiorNotaHomens =0
    let registraNota = true
    let notasRecebidas=0
//criando estrutura While     
    while(registraNota){
    let sexoDoAluno = prompt("Digite M para Mulher, H para Homem ")
    let notaDoAluno = Number(prompt("Digite sua nota")) 
    notasRecebidas++
//Criando estrutura IF/ElSE
    if(sexoDoAluno === "H"){
        qntHomens++
        if(notaDoAluno>maiorNotaHomens){
            maiorNotaHomens = notaDoAluno
        }
        let continuar = prompt("Deseja continuar? s/n")
         if(continuar === "s"){
            registraNota = true
        }else{
            registraNota = false
        } 

    }else if(sexoDoAluno === "M"){    
        if(notaDoAluno >= 7){
         qntMulheresNotaMaior7++
        }
            
        let continuar = prompt("Deseja continuar? s/n")
            if(continuar === "s"){
            registraNota = true
        }else{
            registraNota = false
            } 

        }
        media += notaDoAluno
        mediaGeral = media/notasRecebidas

 }
//Exibindo os resultados
console.log("Media geral é: "+mediaGeral)
console.log("Alunos que enviaram as notas: ("+notasRecebidas+")")    
console.log("Homens que enviaram as notas: ("+qntHomens+")")
console.log("A maior nota entre os homens: ("+maiorNotaHomens+")")
console.log("Mulheres com nota acima de 7: ("+qntMulheresNotaMaior7+")")