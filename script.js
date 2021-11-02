var solucao = [0,0,0,0,0,0,0,0,0]
var botao = [0,0,0,0,0,0,0,0,0]
var verificador = [false,false,false,false,false,false,false,false,false,]
var luzes = document.getElementsByClassName('luzes')
var luzes2 = document.getElementsByClassName('luzes2')
var contador = 1

//Aumenta valor dos botões
function contagem(elem){
    if (elem.innerHTML<9){
        elem.innerHTML++
    }else{ 
        elem.innerHTML = 0
    }
    botao[elem.id.substr(-1)] = Number(elem.innerHTML)
    console.log(botao)
}

//Faz comparação entre resposta e solução
function verifica(){
   var vezes = document.getElementById('vezes')
   contador++
   vezes.innerHTML = "0"+contador+"/10"
    for(i = 0;i<solucao.length;i++){
        if(botao[i] == solucao[i]){
                verificador[i] = true
        }else{
                verificador[i] = false
        }
            
     }
        console.log(verificador)

     // Verificação de Luzes Horizontal

     if (verificador[0] == true && verificador[1] == true && verificador[2] == true){
        luzes[0].src = "./img/ligado.png"
        luzes[1].src = "./img/ligado.png"
        luzes[2].src = "./img/ligado.png"
     }else{
         if((verificador[0] == true && verificador[1] == true) || (verificador[0] == true && verificador[2] == true) || (verificador[1] == true && verificador[2] == true)){
            luzes[0].src = "./img/ligado.png"
            luzes[1].src = "./img/ligado.png"
            luzes[2].src = "./img/desligado.png"
         }else{
            if(verificador[0] == true || verificador[1] == true || verificador[2] == true){
            luzes[0].src = "./img/ligado.png"
            luzes[1].src = "./img/desligado.png"
            luzes[2].src = "./img/desligado.png"
            }else{
            luzes[0].src = "./img/desligado.png"
            luzes[1].src = "./img/desligado.png"
            luzes[2].src = "./img/desligado.png"
            }
         }
     }
     if (verificador[3] == true && verificador[4] == true && verificador[5] == true){
        luzes[3].src = "./img/ligado.png"
        luzes[4].src = "./img/ligado.png"
        luzes[5].src = "./img/ligado.png"
     }else{
         if((verificador[3] == true && verificador[4] == true) || (verificador[3] == true && verificador[5] == true) || (verificador[4] == true && verificador[5] == true)){
            luzes[3].src = "./img/ligado.png"
            luzes[4].src = "./img/ligado.png"
            luzes[5].src = "./img/desligado.png"
         }else{
            if(verificador[3] == true || verificador[4] == true || verificador[5] == true){
            luzes[3].src = "./img/ligado.png"
            luzes[4].src = "./img/desligado.png"
            luzes[5].src = "./img/desligado.png"
            }else{
            luzes[3].src = "./img/desligado.png"
            luzes[4].src = "./img/desligado.png"
            luzes[5].src = "./img/desligado.png"
            }
         }
     }
     if (verificador[6] == true && verificador[7] == true && verificador[8] == true){
        luzes[6].src = "./img/ligado.png"
        luzes[7].src = "./img/ligado.png"
        luzes[8].src = "./img/ligado.png"
     }else{
         if((verificador[6] == true && verificador[7] == true) || (verificador[6] == true && verificador[8] == true) || (verificador[7] == true && verificador[8] == true)){
            luzes[6].src = "./img/ligado.png"
            luzes[7].src = "./img/ligado.png"
            luzes[8].src = "./img/desligado.png"
         }else{
            if(verificador[6] == true || verificador[7] == true || verificador[8] == true){
            luzes[6].src = "./img/ligado.png"
            luzes[7].src = "./img/desligado.png"
            luzes[8].src = "./img/desligado.png"
            }else{
            luzes[6].src = "./img/desligado.png"
            luzes[7].src = "./img/desligado.png"
            luzes[8].src = "./img/desligado.png"
            }
         }
     }

     // Verificação de Luzes Vertical

     if (verificador[0] == true && verificador[3] == true && verificador[6] == true){
        luzes2[0].src = "./img/ligado.png"
        luzes2[3].src = "./img/ligado.png"
        luzes2[6].src = "./img/ligado.png"
     }else{
         if((verificador[0] == true && verificador[3] == true) || (verificador[0] == true && verificador[6] == true) || (verificador[3] == true && verificador[6] == true)){
            luzes2[0].src = "./img/ligado.png"
            luzes2[3].src = "./img/ligado.png"
            luzes2[6].src = "./img/desligado.png"
         }else{
            if(verificador[0] == true || verificador[3] == true || verificador[6] == true){
            luzes2[0].src = "./img/ligado.png"
            luzes2[3].src = "./img/desligado.png"
            luzes2[6].src = "./img/desligado.png"
            }else{
            luzes2[0].src = "./img/desligado.png"
            luzes2[3].src = "./img/desligado.png"
            luzes2[6].src = "./img/desligado.png"
            }
         }
     }
     if (verificador[1] == true && verificador[4] == true && verificador[7] == true){
        luzes2[1].src = "./img/ligado.png"
        luzes2[4].src = "./img/ligado.png"
        luzes2[7].src = "./img/ligado.png"
     }else{
         if((verificador[1] == true && verificador[4] == true) || (verificador[1] == true && verificador[7] == true) || (verificador[4] == true && verificador[7] == true)){
            luzes2[1].src = "./img/ligado.png"
            luzes2[4].src = "./img/ligado.png"
            luzes2[7].src = "./img/desligado.png"
         }else{
            if(verificador[1] == true || verificador[4] == true || verificador[7] == true){
            luzes2[1].src = "./img/ligado.png"
            luzes2[4].src = "./img/desligado.png"
            luzes2[7].src = "./img/desligado.png"
            }else{
            luzes2[1].src = "./img/desligado.png"
            luzes2[4].src = "./img/desligado.png"
            luzes2[7].src = "./img/desligado.png"
            }
         }
     }
     if (verificador[2] == true && verificador[5] == true && verificador[8] == true){
        luzes2[2].src = "./img/ligado.png"
        luzes2[5].src = "./img/ligado.png"
        luzes2[8].src = "./img/ligado.png"
     }else{
         if((verificador[2] == true && verificador[5] == true) || (verificador[2] == true && verificador[8] == true) || (verificador[5] == true && verificador[8] == true)){
            luzes2[2].src = "./img/ligado.png"
            luzes2[5].src = "./img/ligado.png"
            luzes2[8].src = "./img/desligado.png"
         }else{
            if(verificador[2] == true || verificador[5] == true || verificador[8] == true){
            luzes2[2].src = "./img/ligado.png"
            luzes2[5].src = "./img/desligado.png"
            luzes2[8].src = "./img/desligado.png"
            }else{
            luzes2[2].src = "./img/desligado.png"
            luzes2[5].src = "./img/desligado.png"
            luzes2[8].src = "./img/desligado.png"
            }
         }
     }
}

//Ramdomiza os valores que se tornam solução
for (i = 0; i<9; i++){
solucao[i] = Math.floor(Math.random() * 10)
}

console.log(solucao)
