

let resultado = document.getElementById('resultado')
let selecionado = document.getElementById('selecionado')
let comp = document.getElementById('comp')
const jogada = document.getElementById('jogada');
const btnStart = document.getElementById('start')


let pc = '';
let player = '';


function computer(){
    let math= Math.floor(Math.random()*3 + 1)

    if(math == 1){
        return "Tesoura"
    } else if(math === 2){
        return "Papel"
       
    }else{
        return "Pedra"
       
    }

    
}

function jogador(valor){
   return valor
}

 




function res(player, pc){
    comp.innerHTML=`VS ${pc}`
    if(player === pc){
        
        return resultado.innerHTML="empate"
        
    }else if(player ==="Tesoura" && pc === "Papel"){
            return resultado.innerHTML="player ganhou"
    }else if (player ==="Tesoura" && pc === "Pedra"){
        return resultado.innerHTML="Vc perdeu"
    }else if (player ==="Papel" && pc === "Pedra"){
        return resultado.innerHTML="Vc ganhou"
    }else if (player ==="Papel" && pc === "Tesoura"){
        return resultado.innerHTML="Vc perdeu"
    }
    else if (player ==="Pedra" && pc === "Tesoura"){
        return resultado.innerHTML="Vc ganhou"
    } else if (player ==="Pedra" && pc === "Papel"){
        return resultado.innerHTML="Vc perdeu"
        
    }



}




function msg(valor){
   player = valor
   
   jogador(valor)
  
   selecionado.innerHTML=valor;


}


function start(){
  
    console.log(player)
    console.log(computer())
    res(player, computer())
   


}

btnStart.addEventListener('click', start)

