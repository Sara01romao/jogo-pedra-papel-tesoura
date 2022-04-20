

let resultado = document.getElementById('resultado')
let selecionado = document.getElementById('selecionado')
let comp = document.getElementById('comp');
const msgErro = document.getElementById('msgErro')
const resetContainer = document.querySelector(".resetContainer") 
const btnStart = document.getElementById('start')
const btnReset = document.getElementById('reset')
const inputs = document.querySelectorAll(".input")

let pc = '';
let player = '';

//gera jogada computador
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

 



//verifica e msg de resultado
function res(player, pc){
    comp.innerHTML=` <img src="../images/${pc}.svg" alt="${pc}"><p>${pc}</p>`
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

  /*  selecionado.innerHTML=`<img src="../images/${valor}.svg" alt="${valor}"> <p>${valor}</p>`; */
 

}


function start(){
    
  if(player !== ""){
    msgErro.innerText=""
    console.log(player)
    console.log(computer())
    selecionado.innerHTML=`<img src="../images/${player}.svg" alt="${player}"> <p>${player}</p>`;
    res(player, computer())
    selecionado.classList.add("animeLeft");
    comp.classList.add("animeRight");
    btnStart.style.display="none";
    resetContainer.style.display="flex";
    inputs.forEach(elements =>{
        elements.disabled =true;
    })


  }else{
    
    msgErro.style.color="red"  ;
    msgErro.innerHTML=`<img src="../images/alerta.svg" alt="icon"> você esqueceu ` ;
  }
    
}

btnStart.addEventListener('click', start)


function reset(){
    inputs.forEach(elements =>{
        elements.disabled =false;
    })

    player="";
    selecionado.innerHTML=``;
    comp.innerHTML=``;
    comp.classList.remove("animeRight");
    selecionado.classList.remove("animeLeft");
    btnStart.style.display="block";
    resetContainer.style.display="none";
    inputs.forEach(item =>{
        item.checked=false;
    })
  
    

}

btnReset.addEventListener('click', reset)