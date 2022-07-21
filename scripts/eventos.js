"use strict"

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

