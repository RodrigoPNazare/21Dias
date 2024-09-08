
//DESAFIO DIA 5 POSTO DE GASOLINA

//CRIANDO VARIÁVEIS
let opcaoPosto = Number(prompt("Digite 1 para abastecer com gasolina, 2 para abastecer com Álcool, 3 para Calibrar os pneus"))
let valorGasolina = 5
let valorAlcool = 3
let calibrarPneus
let quantidadeDesejado

//CRIANDO SWITCHCASE
switch(opcaoPosto){

    case 1:
        quantidadeDesejado = Number(prompt("Digite a quantidade que deseja abastecer"))
        console.log("Foram abastecidos " + quantidadeDesejado + "L de gasolina, valor a pagar: " + (quantidadeDesejado*valorGasolina) + "R$")
        break;
    case 2:
        quantidadeDesejado = Number(prompt("Digite a quantidade que deseja abastecer"))
        console.log("Foram abastecidos " + quantidadeDesejado + "L de Álcool, valor a pagar: " + (quantidadeDesejado*valorAlcool) + "R$")
        break;
    case 3:
        console.log("pneus calibrados com sucesso")
        break;
    default:
        console.log("OPÇÃO INVALIDA!!")
        break;
}
