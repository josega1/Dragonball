let enemigo = {goku:[1,2,3], vugueta:[1,2,3], friza:[1,2,3]}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarLuchadorEnemigo(){
    let luchadorAleatorio = aleatorio(1,3)

    let spanLuchadorEnemigo = document.getElementById('luchador-enemigo')
    
    if(luchadorAleatorio == 1) {
        spanLuchadorEnemigo.innerHTML = "Gokus"
        
    } else if(luchadorAleatorio == 2) {
        spanLuchadorEnemigo.innerHTML = "Vugetta"

    } else {
        spanLuchadorEnemigo.innerHTML = "Friza"
    } 
    
}