const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const sectionReglas = document.getElementById("reglas");
const sectionParrafoPerdiste = document.getElementById("perdiste");
const sectionParrafoGanaste = document.getElementById("ganaste");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");
const mensajeDelFinal = document.getElementById("resultadoMensaje")
const sectionSeleccionarMascota = document.getElementById(
    "seleccionar-mascota"
);
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanVidaJugador = document.getElementById("vidasJugadorHtml");
const spanVidaEnemigo = document.getElementById("vidasEnemigoHtml");
const sectionMensajes = document.getElementById("resultado");
const sectionDelJugador = document.getElementById("ataquesDelJugador");
const sectionDelEnemigo = document.getElementById("ataquesDelEnemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

let genios = [];
let ataqueJugador = 0;
let ataqueEnemigo = 0;
let resultadoDelAtaque = 0;
let vidaJugador = 3;
let vidaEnemigo = 3;
let opcionDeGenios;
let inputSheldon;
let inputLeonard;
let inputHoward;
let mascotaJugador;
let ataquesGenio;
let botonPiedra;
let botonPapel;
let botonTijera;
let botonLagarto;
let botonSpock;
let botones = [];

class Genio {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let sheldon = new Genio("Sheldon", "assets/img/SheldonPixelSinFondo.png", 3);
let howard = new Genio("Howard", "assets/img/HowardPixelSinFondo.png", 3);
let leonard = new Genio("Leonard", "assets/img/LeonardPixelSinFondo.png", 3);

sheldon.ataques.push(
    { nombre: "Piedra", id: "boton-piedra", logo: `fa-solid fa-hand-back-fist` },
    { nombre: "Papel", id: "boton-papel", logo: `fa-solid fa-hand`  },
    { nombre: "Tijera", id: "boton-tijera", logo: "fa-solid fa-hand-scissors"  },
    { nombre: "Lagarto", id: "boton-lagarto", logo: `fa-solid fa-hand-lizard`  },
    { nombre: "Spock", id: "boton-spock", logo: `fa-solid fa-hand-spock`  }
);

howard.ataques.push(
    { nombre: "Piedra", id: "boton-piedra", logo: `fa-solid fa-hand-back-fist` },
    { nombre: "Papel", id: "boton-papel", logo: `fa-solid fa-hand` },
    { nombre: "Tijera", id: "boton-tijera", logo: "fa-solid fa-hand-scissors" },
    { nombre: "Lagarto", id: "boton-lagarto", logo: `fa-solid fa-hand-lizard` },
    { nombre: "Spock", id: "boton-spock", logo: `fa-solid fa-hand-spock` }
);

leonard.ataques.push(
    { nombre: "Piedra", id: "boton-piedra", logo: `fa-solid fa-hand-back-fist` },
    { nombre: "Papel", id: "boton-papel", logo: `fa-solid fa-hand` },
    { nombre: "Tijera", id: "boton-tijera", logo: "fa-solid fa-hand-scissors" },
    { nombre: "Lagarto", id: "boton-lagarto", logo: `fa-solid fa-hand-lizard` },
    { nombre: "Spock", id: "boton-spock", logo: `fa-solid fa-hand-spock` }
);

genios.push(sheldon, howard, leonard);

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none";

    genios.forEach((genio) => {
        opcionDeGenios = `
        <input type="radio" name="mascota" id="${genio.nombre}">
        <label class="tarjeta-de-genio" for="${genio.nombre}">
            <p>${genio.nombre}</p>
            <img src= ${genio.foto} width="75px" height="75px" alt="Imagen de ${genio.nombre}">
        </label>
        `;
        contenedorTarjetas.innerHTML += opcionDeGenios;

        inputSheldon = document.getElementById("Sheldon");
        inputLeonard = document.getElementById("Leonard");
        inputHoward = document.getElementById("Howard");
    });
    sectionReiniciar.style.display = "none";

    sectionReglas.style.display = "none";

    sectionParrafoPerdiste.style.display = "none";

    sectionParrafoGanaste.style.display = "none";

    botonMascotaJugador.addEventListener("click", seleccionarMascota);

    botonReiniciar.addEventListener("click", reiniciar);
}

function seleccionarMascota() {
    sectionSeleccionarMascota.style.display = "none";
    sectionSeleccionarAtaque.style.display = "flex";
    sectionReglas.style.display = "block";

    if (inputSheldon.checked) {
        spanMascotaJugador.innerHTML = inputSheldon.id;
        mascotaJugador = inputSheldon.id;
    } else if (inputLeonard.checked) {
        spanMascotaJugador.innerHTML = inputLeonard.id;
        mascotaJugador = inputLeonard.id;
    } else if (inputHoward.checked) {
        spanMascotaJugador.innerHTML = inputHoward.id;
        mascotaJugador = inputHoward.id;
    } else {
        alert("Debes seleccionar una mascota para pelear");
        sectionSeleccionarMascota.style.display = "flex";
        sectionSeleccionarAtaque.style.display = "none";
        sectionReglas.style.display = "none";
    }

    extraerAtaques(mascotaJugador);
    seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
    let ataques;
    for (let i = 0; i < genios.length; i++) {
        if (mascotaJugador === genios[i].nombre) {
            ataques = genios[i].ataques;
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesGenio = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}  <i class="${ataque.logo}"></i>
        </button>`;
        contenedorAtaques.innerHTML += ataquesGenio;
    });
    botonPiedra = document.getElementById("boton-piedra");
    botonPapel = document.getElementById("boton-papel");
    botonTijera = document.getElementById("boton-tijera");
    botonLagarto = document.getElementById("boton-lagarto");
    botonSpock = document.getElementById("boton-spock");
    botones = document.querySelectorAll(".BAtaque");

    botonPiedra.addEventListener("click", seleccionarAtaquePiedra);
    botonPapel.addEventListener("click", seleccionarAtaquePapel);
    botonTijera.addEventListener("click", seleccionarAtaqueTijera);
    botonLagarto.addEventListener("click", seleccionarAtaqueLagarto);
    botonSpock.addEventListener("click", seleccionarAtaqueSpock);
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, genios.length - 1);

    spanMascotaEnemigo.innerHTML = genios[mascotaAleatoria].nombre;
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
