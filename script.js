
const tesoura = document.getElementById('tesoura')
const papel = document.getElementById('papel')
const pedra = document.getElementById('pedra')

let resultado = document.getElementById('resultado')
const jogada = document.getElementById('jogada')
console.log(jogada)

let pc = '';
let player = '';

/*  
tesoura.addEventListener('click', ()=>{
    player = 'Tesoura'
    

   jogada.innerHTML=player
})

papel.addEventListener('click', ()=>{
    player= 'Papel'
   
    jogada.innerHTML=player;

})

pedra.addEventListener('click', ()=>{
    player= 'Pedra'
    jogada.innerHTML=player
})
 */



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

pc = computer()
 




function res(){
    if(player == pc){
        return jogada.innerHTML="empate"
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
        resultado.innerHTML="Vc perdeu"
    }


}

console.log(player)

