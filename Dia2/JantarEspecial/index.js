//DESAFIO DIA #2:Jantar especial?

//CRIANDO VARIÁVEL E PEDINDO INFORMAÇÕES
 let temFome = prompt("está com fome? sim/não")
 let temDinheiro = prompt("Tem dinheiro? sim/não")
 let restauranteAberto = prompt("o Restaurante está aberto? sim/não")

 //CRIANDO TOMADAS DE DECISÕES E EXIBINDO INFORMAÇÕES
 if(temFome === "não" || temDinheiro === "não" ){
    console.log("Hoje a janta será em casa")
 }else if (temFome === "sim" && temDinheiro ==="sim" && restauranteAberto === "sim"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
 }else{
    console.log("Peça um delivery!")
 }

