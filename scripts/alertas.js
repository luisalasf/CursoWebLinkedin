var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");
/*          ALERTAS          */
setColor = () =>{
    let pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}
//Confrim: it works to confirm something, it returns a boolean value
boton.addEventListener("click", ()=> {
    let confirmedValue = confirm("¿Seguro que quieres cambiar el color prrita?"); //the button returns a boolean value
    if(confirmedValue){
        setColor();
    }else{
        console.log("Ok no xd");
    }
});

//Prompt: it is an input as an alert, you can get information, it returns a string

boton2.addEventListener("click", ()=>{
    let mensaje = prompt("Escribe tu correo electronico", "luispiyu007@gmail.com");
    console.log(mensaje!=null?mensaje:"el mensaje es nulo");

    
});


