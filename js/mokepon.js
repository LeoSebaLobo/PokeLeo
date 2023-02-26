const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const sectionReglas = document.getElementById("reglas");
const sectionParrafoPerdiste = document.getElementById("perdiste");
const sectionParrafoGanaste = document.getElementById("ganaste");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonPiedra = document.getElementById("boton-piedra");
const botonPapel = document.getElementById("boton-papel");
const botonTijera = document.getElementById("boton-tijera");
const botonLagarto = document.getElementById("boton-lagarto");
const botonSpock = document.getElementById("boton-spock");
const botonReiniciar = document.getElementById("boton-reiniciar");
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const inputSheldon = document.getElementById("sheldon");
const inputLeonard = document.getElementById("leonard");
const inputHoward = document.getElementById("howard");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanVidaJugador = document.getElementById("vidasJugadorHtml");
const spanVidaEnemigo = document.getElementById("vidasEnemigoHtml");
const sectionMensajes = document.getElementById("resultado");
const sectionDelJugador = document.getElementById("ataquesDelJugador");
const sectionDelEnemigo = document.getElementById("ataquesDelEnemigo");

let ataqueJugador = 0;
let ataqueEnemigo = 0;
let resultadoDelAtaque = 0;
let vidaJugador = 5;
let vidaEnemigo = 5;

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none";

    sectionReiniciar.style.display = "none";

    sectionReglas.style.display = "none";

    sectionParrafoPerdiste.style.display = "none";

    sectionParrafoGanaste.style.display = "none";

    botonMascotaJugador.addEventListener("click", seleccionarMascota);

    botonPiedra.addEventListener("click", seleccionarAtaquePiedra);
    botonPapel.addEventListener("click", seleccionarAtaquePapel);
    botonTijera.addEventListener("click", seleccionarAtaqueTijera);
    botonLagarto.addEventListener("click", seleccionarAtaqueLagarto);
    botonSpock.addEventListener("click", seleccionarAtaqueSpock);
    botonReiniciar.addEventListener("click", reiniciar);
}

function seleccionarMascota() {
    sectionSeleccionarMascota.style.display = "none";

    sectionSeleccionarAtaque.style.display = "flex";

    sectionReglas.style.display = "block";

    if (inputSheldon.checked) {
        spanMascotaJugador.innerHTML = "Sheldon";
    } else if (inputLeonard.checked) {
        spanMascotaJugador.innerHTML = "Leonard";
    } else if (inputHoward.checked) {
        spanMascotaJugador.innerHTML = "Howard";
    } else {
        alert("Debes seleccionar una mascota para pelear");
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3);

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Sheldon";
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Leonard";
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Howard";
    }
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 5);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Piedra";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Papel";
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "Tijera";
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = "Lagarto";
    } else if (ataqueAleatorio == 5) {
        ataqueEnemigo = "Spock";
    }

    resultadoAtaque();
    crearMensaje();
}

function seleccionarAtaquePiedra() {
    ataqueJugador = "Piedra";
    ataqueAleatorioEnemigo();
}
function seleccionarAtaquePapel() {
    ataqueJugador = "Papel";
    ataqueAleatorioEnemigo();
}

function seleccionarAtaqueTijera() {
    ataqueJugador = "Tijera";
    ataqueAleatorioEnemigo();
}

function seleccionarAtaqueLagarto() {
    ataqueJugador = "Lagarto";
    ataqueAleatorioEnemigo();
}

function seleccionarAtaqueSpock() {
    ataqueJugador = "Spock";
    ataqueAleatorioEnemigo();
}

function resultadoAtaque() {
    if (ataqueJugador == ataqueEnemigo) {
        resultadoDelAtaque = "EMPATE";
    } else if (ataqueJugador == "Tijera" && ataqueEnemigo == "Papel") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Papel" && ataqueEnemigo == "Piedra") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Piedra" && ataqueEnemigo == "Lagarto") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Lagarto" && ataqueEnemigo == "Spock") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Spock" && ataqueEnemigo == "Tijera") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Tijera" && ataqueEnemigo == "Lagarto") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Lagarto" && ataqueEnemigo == "Papel") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Papel" && ataqueEnemigo == "Spock") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Spock" && ataqueEnemigo == "Piedra") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else if (ataqueJugador == "Piedra" && ataqueEnemigo == "Tijera") {
        resultadoDelAtaque = "GANASTE";
        vidaEnemigo--;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
    } else {
        resultadoDelAtaque = "PERDISTE";
        vidaJugador--;
        spanVidaJugador.innerHTML = vidaJugador;
    }

    revisarVidas();
}

function revisarVidas() {
    if (vidaJugador == 0) {
        mensajeFinal();

        sectionParrafoPerdiste.style.display = "block";

        sectionReglas.style.display = "none";
    } else if (vidaEnemigo == 0) {
        mensajeFinal();

        sectionParrafoGanaste.style.display = "block";

        sectionReglas.style.display = "none";
    }
}

function crearMensaje() {
    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p");

    sectionMensajes.innerHTML = resultadoDelAtaque;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    sectionDelJugador.appendChild(nuevoAtaqueDelJugador);
    sectionDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function mensajeFinal() {
    botonPiedra.disabled = true;
    botonPapel.disabled = true;
    botonTijera.disabled = true;
    botonLagarto.disabled = true;
    botonSpock.disabled = true;

    sectionReiniciar.style.display = "block";
}

function reiniciar() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
