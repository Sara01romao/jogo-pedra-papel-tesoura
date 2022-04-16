

let resultado = document.getElementById('resultado')
let selecionado = document.getElementById('selecionado')
let comp = document.getElementById('comp');
const msgErro = document.getElementById('msgErro')
const resetContainer = document.querySelector(".resetContainer") 
const btnStart = document.getElementById('start')
const btnReset = document.getElementById('reset')
let  img = document.querySelector(".imgOption")


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
    comp.innerHTML=` <img src="../images/${pc}.jpg" alt="${pc}"><p>${pc}</p>`
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

   selecionado.innerHTML=`<img src="../images/${valor}.jpg" alt="${valor}"> <p>${valor}</p>`;


}


function start(){
    
  if(player !== ""){
    msgErro.innerText=""
    console.log(player)
    console.log(computer())
    res(player, computer())
    selecionado.classList.add("animeLeft");
    btnStart.style.display="none";
    resetContainer.style.display="flex";


  }else{
    
    msgErro.style.color="red"  
    msgErro.innerText="selecione uma jogada"
  }
    
}

btnStart.addEventListener('click', start)


function reset(){
    player="";
    selecionado.innerHTML=``;
    comp.innerHTML=``;
    selecionado.classList.remove("animeLeft");
    btnStart.style.display="block";
    resetContainer.style.display="none";
    img.style.border='none'

}

btnReset.addEventListener('click', reset)