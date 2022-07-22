"use strict"

/*          Evento load     */
window.addEventListener("load", ()=> {
    console.log("la ventana se ha cargado correctamente");
});

/*          eventos del mouse           */
const boton = document.getElementById("boton");

boton.addEventListener('click', function xd () {
    console.log("El boton se ha pulsado");
} );

boton.addEventListener("mouseover", () => {
    console.log("El mouse está sobre el botón :3");
});

boton.addEventListener("mouseout", ()=>{
    console.log("El mouse salió del botón")
})

/*              eventos del teclado             */
//  cuando recién se presiona una tecla
window.addEventListener("keydown", (event) => {
    console.log("Se está pulsando una tecla");
    console.log(event["key"]);
})
//  Cuando se deja presionada la tecla
window.addEventListener("keypress", (event) => {
    console.log("Tecla pulsada");
    console.log(event["key"]);
})
//cuando la tecla se deja de presionar

window.addEventListener("keypress", (event) => {
    console.log("esta tecla ya no se está presionando");
    console.log(event["key"]);
})

/*              Eventos con reproductores de video          */
const video = document.getElementById("video");
//  Botón play del reproductor de video
video.addEventListener("play", () => {
    console.log("Se pulsó el botón play del video");
});

//  Pulsa botón pause del video
video.addEventListener("pause", () => {
    console.log("Se pulsó el botón pause del video");
});

//  Moviendo de posicion el video
video.addEventListener("seeking", function () {
    console.log("Se está buscando en el video: " + this.currentTime);
});

