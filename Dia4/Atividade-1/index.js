   
   //DESAFIO DIA 4 "JANTAR" 
   
   //CRIANDO VAIRÁVEIS E PEDINDO INFORMAÇÕES
    let estaComFome = Number(prompt("Está com fome? digite 1 para Sim e 0 para não"))
    let temDinheiro = Number(prompt("Você tem dinheiro? digite 1 para Sim e 0 para não"))
    let statusRestaurante = Number(prompt(" O restaurante está aberto? digite 1 para Sim e 0 para não"))
    //EXIBINDO MENSAGEMNO CONSOLE
    if(estaComFome === 0 && temDinheiro ===0){
        console.log("Hoje a janta será em casa")
    }else if(estaComFome === 1 && temDinheiro ===1 && statusRestaurante ===0){
        console.log("Peça um delivery!")
    }else if(estaComFome === 1 && temDinheiro ===1 && statusRestaurante ===1){
        console.log("Hoje o jantar será no seu restaurante preferido!")
    }else{
        console.log("Nenhuma opção para você")
    }
    

