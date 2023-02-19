let ataqueJugador = 0
let ataqueEnemigo = 0
let resultadoDelAtaque = 0
let vidaJugador = 5
let vidaEnemigo = 5


function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"
    let sectionReglas = document.getElementById("reglas")
    sectionReglas.style.display = "none"
    
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascota)
    let botonPiedra = document.getElementById("boton-piedra") 
    let botonPapel = document.getElementById("boton-papel")
    let botonTijera = document.getElementById("boton-tijera")
    let botonLagarto = document.getElementById("boton-lagarto")
    let botonSpock = document.getElementById("boton-spock")
    let botonReiniciar = document.getElementById("boton-reiniciar")

    botonPiedra.addEventListener("click", seleccionarAtaquePiedra)
    botonPapel.addEventListener("click", seleccionarAtaquePapel)
    botonTijera.addEventListener("click", seleccionarAtaqueTijera)
    botonLagarto.addEventListener("click", seleccionarAtaqueLagarto)
    botonSpock.addEventListener("click", seleccionarAtaqueSpock)
    botonReiniciar.addEventListener("click", reiniciar)

}


function seleccionarMascota(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    
    
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"
    let sectionReglas = document.getElementById("reglas")
    sectionReglas.style.display = "block"

    
    let inputSheldon = document.getElementById("sheldon")
    let inputLeonard = document.getElementById("leonard")
    let inputHoward = document.getElementById("howard")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputSheldon.checked){
        spanMascotaJugador.innerHTML = "Sheldon"
        
    } else if(inputLeonard.checked){
        spanMascotaJugador.innerHTML = "Leonard"
        
    } else if (inputHoward.checked){
        spanMascotaJugador.innerHTML = "Howard"

    }else { 
        alert("Debes seleccionar una mascota para pelear")}

        
        seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    
    let mascotaAleatoria = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Sheldon"
    }
    else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "Leonard"
    }
    else if (mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML = "Howard"
    }

}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 5)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Piedra"        
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Papel"        
    }else if (ataqueAleatorio == 3){
        ataqueEnemigo = "Tijera"
    } else if (ataqueAleatorio == 4){
        ataqueEnemigo = "Lagarto"
    } else if (ataqueAleatorio == 5){
        ataqueEnemigo = "Spock"
    }
    
    resultadoAtaque()
    crearMensaje()
    
    
}

function seleccionarAtaquePiedra(){
    ataqueJugador = "Piedra"
    ataqueAleatorioEnemigo()
    
}
function seleccionarAtaquePapel(){
    ataqueJugador = "Papel"
    ataqueAleatorioEnemigo()
    
}

function seleccionarAtaqueTijera(){
    ataqueJugador = "Tijera"
    ataqueAleatorioEnemigo()
    
}

function seleccionarAtaqueLagarto(){
    ataqueJugador = "Lagarto"
    ataqueAleatorioEnemigo()
    
}

function seleccionarAtaqueSpock(){
    ataqueJugador = "Spock"
    ataqueAleatorioEnemigo()
    
}

function resultadoAtaque(){
    let spanVidaJugador = document.getElementById("vidasJugadorHtml")
    let spanVidaEnemigo = document.getElementById("vidasEnemigoHtml")

    if(ataqueJugador == ataqueEnemigo){
        resultadoDelAtaque = "EMPATE"

    } else if (ataqueJugador == "Tijera" && ataqueEnemigo == "Papel"){
        resultadoDelAtaque = "GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo

    } else if (ataqueJugador == "Papel" && ataqueEnemigo == "Piedra"){
        resultadoDelAtaque = "GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo

    } else if (ataqueJugador == "Piedra" && ataqueEnemigo == "Lagarto"){
        resultadoDelAtaque ="GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo

    } else if (ataqueJugador == "Lagarto" && ataqueEnemigo == "Spock"){
        resultadoDelAtaque = "GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else if (ataqueJugador == "Spock" && ataqueEnemigo == "Tijera"){
        resultadoDelAtaque = "GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    } else if (ataqueJugador == "Tijera" && ataqueEnemigo == "Lagarto"){
        resultadoDelAtaque = "GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    } else if (ataqueJugador == "Lagarto" && ataqueEnemigo == "Papel"){
    resultadoDelAtaque = "GANASTE"
    vidaEnemigo--
    spanVidaEnemigo.innerHTML= vidaEnemigo
    } else if (ataqueJugador == "Papel" && ataqueEnemigo == "Spock"){
        resultadoDelAtaque = "GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    } else if (ataqueJugador == "Spock" && ataqueEnemigo == "Piedra"){
        resultadoDelAtaque = "GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    } else if (ataqueJugador == "Piedra" && ataqueEnemigo == "Tijera"){
        resultadoDelAtaque = "GANASTE"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    }
    
    else {
        resultadoDelAtaque = "PERDISTE"
        vidaJugador--
        spanVidaJugador.innerHTML = vidaJugador
}

    revisarVidas()


}



function revisarVidas(){
    if(vidaJugador == 0){
        mensajeFinal("LO SIENTO, PERDISTE, INTENTALO DE NUEVO")
        let sectionReglas = document.getElementById("reglas")
        sectionReglas.style.display = "none"
    } else if(vidaEnemigo == 0){
        mensajeFinal("FELICITACIONES GANASTE!!!")
        let sectionReglas = document.getElementById("reglas")
        sectionReglas.style.display = "none"
    }
}

function crearMensaje(){

    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu genio ataco con " + ataqueJugador + " .El genio del enemigo ataco con " + ataqueEnemigo + ". " + resultadoDelAtaque + "."
    sectionMensajes.appendChild(parrafo)
}

function mensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    let botonPiedra = document.getElementById("boton-piedra") 
    let botonPapel = document.getElementById("boton-papel")
    let botonTijera = document.getElementById("boton-tijera")
    let botonLagarto = document.getElementById("boton-lagarto")
    let botonSpock = document.getElementById("boton-spock")
    botonPiedra.disabled = true
    botonPapel.disabled = true
    botonTijera.disabled = true
    botonLagarto.disabled = true
    botonSpock.disabled = true
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    
}

function reiniciar(){
    location.reload()
}



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego)