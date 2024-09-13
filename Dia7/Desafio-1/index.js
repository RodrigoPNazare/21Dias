
//DESAFIO DO DIA 7 DEV SCHOOL

//CRIANDO VARIÁVEIS
let mediaGeral=0
let qntHomens =0
let qntMulheresNotaAcima7 =0
let maiorNotashomens =0
let alunos =1

//SEXO DO ALUNO & NOTAS
 while(alunos <= 10 ){
    
    let sexoDoAluno = prompt("Qual seu sexo M ou F")
    let notas = Number(prompt("Digite a sua nota "))
    
    if(sexoDoAluno==="M"){
        if(notas > maiorNotashomens){
            maiorNotashomens=notas
            qntHomens++
        }
        
    }else if(sexoDoAluno==="F" && notas >7){
        qntMulheresNotaAcima7++
            
        }
    
alunos++

mediaGeral+=notas

}

mediaGeral = mediaGeral/10

console.log("Media geral dos alunos: " + mediaGeral)
 
console.log("A maior nota entre os homens é: " + maiorNotashomens)
console.log("A quantidade de Homens que enviaram as notas é: " +qntHomens)
console.log("Mulheres que tiveram notas acima de 7: " + qntMulheresNotaAcima7)