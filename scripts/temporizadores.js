var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");

boton.addEventListener("click", ()=>{
    setTimeout(()=>{
        setColor();
    }, 3000);   
});
var temporizador;
boton2.addEventListener("click", ()=>{
    temporizador = setInterval(function(){
        setColor();
    }, 2000);    
});

boton3.addEventListener("click", ()=>{
    clearInterval(temporizador);
});


setColor = () =>{
    let pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}