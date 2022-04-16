

let resultado = document.getElementById('resultado')
let selecionado = document.getElementById('selecionado')
let comp = document.getElementById('comp')

const btnStart = document.getElementById('start')


let pc = '';
let player = '';


function computer(){
    let math= Math.floor(Math.random()*3 + 1)

    if(math == 1){
        return "tesoura"
    } else if(math === 2){
        return "papel"
       
    }else{
        return "pedra"
       
    }

    
}

function jogador(valor){
   return valor
}

 




function res(player, pc){
    comp.innerHTML=`VS <img src="../images/${pc}.jpg" alt="${pc}">${pc}`
    if(player === pc){
        
        return resultado.innerHTML="empate"
        
    }else if(player ==="tesoura" && pc === "papel"){
            return resultado.innerHTML="player ganhou"
    }else if (player ==="tesoura" && pc === "pedra"){
        return resultado.innerHTML="Vc perdeu"
    }else if (player ==="papel" && pc === "pedra"){
        return resultado.innerHTML="Vc ganhou"
    }else if (player ==="papel" && pc === "tesoura"){
        return resultado.innerHTML="Vc perdeu"
    }
    else if (player ==="pedra" && pc === "tesoura"){
        return resultado.innerHTML="Vc ganhou"
    } else if (player ==="pedra" && pc === "papel"){
        return resultado.innerHTML="Vc perdeu"
        
    }



}




function msg(valor){
   player = valor
   
   jogador(valor)

  
   selecionado.innerHTML=`<img src="../images/${valor}.jpg" alt="${valor}"> ${valor}`;


}


function start(){
  
    console.log(player)
    console.log(computer())
    res(player, computer())
   


}

btnStart.addEventListener('click', start)

