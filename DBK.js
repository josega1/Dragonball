let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {


    fetch('./data.json')
  .then(response => response.json())
  .then(data => console.log( data.map((el) => el.habilidades.map((e) => e))));



    
    
    let selectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    selectionSeleccionarAtaque.style.display = 'none'

    
    let botonLuchadorJugador = document.getElementById('boton-luchador')
    botonLuchadorJugador.addEventListener('click', seleccionarLuchadorJugador)

    let botonHameha = document.getElementById('boton-hameha')
    botonHameha.addEventListener('click', ataqueHameha)
    let botonHenkidama = document.getElementById('boton-henkidama')
    botonHenkidama.addEventListener('click', ataqueHenkidama)
    let botonKaioken = document.getElementById('boton-kaioken')
    botonKaioken.addEventListener('click', ataqueKaioken)
    let botonBigbang = document.getElementById('boton-bigbang')
    botonBigbang.addEventListener('click', ataqueBigbang)
    let botonFinal = document.getElementById('boton-final')
    botonFinal.addEventListener('click', ataqueFinal)
    let botonGalik = document.getElementById('boton-galik')
    botonGalik.addEventListener('click', ataqueGalik)
    let botonLazer = document.getElementById('boton-lazer')
    botonLazer.addEventListener('click', ataqueLazer)
    let botonBlaster = document.getElementById('boton-blaster')
    botonBlaster.addEventListener('click', ataqueBlaster)
    let botonNova = document.getElementById('boton-nova')
    botonNova.addEventListener('click', ataqueNova)


}

function seleccionarLuchadorJugador(){
    let selectionSeleccionarLuchador = document.getElementById('seleccionar-luchador')
    selectionSeleccionarLuchador.style.display = 'none'

    let selectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    selectionSeleccionarAtaque.style.display = 'flex'

    let inputGokus = document.getElementById('gokus')
    let inputVugetta = document.getElementById('vugetta')
    let inputFriza = document.getElementById('friza')
    let spanLuchadorJugador = document.getElementById('luchador-jugador')

    if(inputGokus.checked){
        spanLuchadorJugador.innerHTML = 'Gokus'
        let divAtaqueVugetta = document.getElementById('ataque-vugetta')
        divAtaqueVugetta.style.display = 'none'
        let divAtaqueFriza = document.getElementById('ataque-friza')
        divAtaqueFriza.style.display = 'none'

    }else if(inputVugetta.checked){
        spanLuchadorJugador.innerHTML = 'Vugetta'
        let divAtaqueGokus = document.getElementById('ataque-gokus')
        divAtaqueGokus.style.display = 'none'
        let divAtaqueFriza = document.getElementById('ataque-friza')
        divAtaqueFriza.style.display = 'none'

    }else if(inputFriza.checked){
        spanLuchadorJugador.innerHTML = 'Friza'
        let divAtaqueVugetta = document.getElementById('ataque-vugetta')
        divAtaqueVugetta.style.display = 'none'
        let divAtaqueGokus = document.getElementById('ataque-gokus')
        divAtaqueGokus.style.display = 'none'

    } else{ 
        alert('SELECCIONA LUCHADOR')
    }
    seleccionarLuchadorEnemigo()
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

function ataqueHameha(){
    ataqueJugador = 'Hameha'
    ataqueAleatorioEnemigo()
}
function ataqueHenkidama(){
    ataqueJugador = 'Henkidama'
    ataqueAleatorioEnemigo()
}
function ataqueKaioken(){
    ataqueJugador = 'Kaioken'
    ataqueAleatorioEnemigo()
}
function ataqueBigbang(){
    ataqueJugador = 'Bigbang'
    ataqueAleatorioEnemigo()
}
function ataqueFinal(){
    ataqueJugador = 'Final'
    ataqueAleatorioEnemigo()
}
function ataqueGalik(){
    ataqueJugador = 'Galik'
    ataqueAleatorioEnemigo()
}
function ataqueLazer(){
    ataqueJugador = 'Lazer'
    ataqueAleatorioEnemigo()
}
function ataqueBlaster(){
    ataqueJugador = 'Blaster'
    ataqueAleatorioEnemigo()
}
function ataqueNova(){
    ataqueJugador = 'Nova'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorioGokus = aleatorio(1,3)
    
    if(ataqueAleatorioGokus == 1) {
        ataqueEnemigo = 'Hameha'
    } else if(ataqueAleatorioGokus == 2) {
        ataqueEnemigo = 'Henkidama'
    } else if (ataqueAleatorioGokus == 3) {
        ataqueEnemigo = 'Kaioken'
    }
    combate()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorioVugetta = aleatorio(1,3)

    if(ataqueAleatorioVugetta == 1) {
        ataqueEnemigo = 'Bigbang'
    } else if(ataqueAleatorioVugetta == 2) {
        ataqueEnemigo = 'Final'
    } else if (ataqueAleatorioVugetta == 3) {
        ataqueEnemigo = 'Galik'
    } 
    combate()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorioFriza = aleatorio(1,3)

    if(ataqueAleatorioFriza == 1) {
        ataqueEnemigo = 'Lazer'
    } else if(ataqueAleatorioFriza == 2) {
        ataqueEnemigo = 'Blaster'
    } else if (ataqueAleatorioFriza == 3) {
        ataqueEnemigo = 'Nova'
    } 

    combate()
}




function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate 😒")
    } else if(ataqueJugador == 'Hameha' && ataqueEnemigo == 'Henkidama') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Hameha' && ataqueEnemigo == 'Bigbang') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Hameha' && ataqueEnemigo == 'Galik') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Hameha' && ataqueEnemigo == 'Blaster') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Henkidama' && ataqueEnemigo == 'Kaioken') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Henkidama' && ataqueEnemigo == 'Final') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Henkidama' && ataqueEnemigo == 'Lazer') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Henkidama' && ataqueEnemigo == 'Nova') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Kaioken' && ataqueEnemigo == 'Hameha') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Kaioken' && ataqueEnemigo == 'Bigbang') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Kaioken' && ataqueEnemigo == 'Galik') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Kaioken' && ataqueEnemigo == 'Blaster') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Bigbang' && ataqueEnemigo == 'Henkidama') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Bigbang' && ataqueEnemigo == 'Final') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Bigbang' && ataqueEnemigo == 'Lazer') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Bigbang' && ataqueEnemigo == 'Nova') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Final' && ataqueEnemigo == 'Hameha') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Final' && ataqueEnemigo == 'Kaioken') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Final' && ataqueEnemigo == 'Blaster') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Final' && ataqueEnemigo == 'Galik') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Galik' && ataqueEnemigo == 'Henkidama') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Galik' && ataqueEnemigo == 'Bigbang') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Galik' && ataqueEnemigo == 'Lazer') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Galik' && ataqueEnemigo == 'Nova') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Lazer' && ataqueEnemigo == 'Hameha') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Lazer' && ataqueEnemigo == 'Kaioken') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Lazer' && ataqueEnemigo == 'Final') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Lazer' && ataqueEnemigo == 'Blaster') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Blaster' && ataqueEnemigo == 'Henkidama') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Blaster' && ataqueEnemigo == 'Bigbang') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Blaster' && ataqueEnemigo == 'Galik') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Blaster' && ataqueEnemigo == 'Nova') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Nova' && ataqueEnemigo == 'Hameha') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else if(ataqueJugador == 'Nova' && ataqueEnemigo == 'Kaioken') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else if(ataqueJugador == 'Nova' && ataqueEnemigo == 'Final') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else if(ataqueJugador == 'Nova' && ataqueEnemigo == 'Lazer') {
        crearMensaje("Ganaste 🦾")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else {
        crearMensaje("Perdiste 😵")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("🔥🔥🔥Winner🔥🔥🔥")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("❎❎❎Loser❎❎❎")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataque-del-jugador')
    let ataqueDelenemigo = document.getElementById('ataque-del-enemigo')


    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
   
    
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelenemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonHameha = document.getElementById('boton-hameha')
    botonHameha.disabled = true
    let botonHenkidama = document.getElementById('boton-henkidama')
    botonHenkidama.disabled = true
    let botonKaioken = document.getElementById('boton-kaioken')
    botonKaioken.disabled = true 

    let botonBigbang = document.getElementById('boton-bigbang')
    botonBigbang.disabled = true
    let botonFinal = document.getElementById('boton-final')
    botonFinal.disabled = true
    let botonGalik = document.getElementById('boton-galik')
    botonGalik.disabled = true
        
    let botonLazer = document.getElementById('boton-lazer')
    botonLazer.disabled = true
    let botonBlaster = document.getElementById('boton-blaster')
    botonBlaster.disabled = true
    let botonNova = document.getElementById('boton-nova')
    botonNova.disabled = true
    let selectionReiniciar = document.getElementById('reiniciar')
    selectionReiniciar.style.display = 'block'

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)