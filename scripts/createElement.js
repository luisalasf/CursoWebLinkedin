var boton = document.getElementById("boton");
var imagen = document.createElement("img");
imagen.src = "../resources/images/main_image_star-forming_region_carina_nircam_final-5mb.jpg";
imagen.width = 400;
imagen.name = "imagen de una nenulosa";

imagen.addEventListener("click", function(){
    if(this.name == "imagen de una nenulosa"){
        this.src = "../resources/images/main_image_galaxies_stephans_quintet_sq_nircam_miri_final-5mb.jpg";
        this.name = "imagen de 3 galaxias";
    }else{
        this.src = "../resources/images/main_image_star-forming_region_carina_nircam_final-5mb.jpg";
        this.name = "imagen de una nenulosa";
    }
});



console.log("innerHeight: ", window.innerHeight);
console.log("innerWidth: ", window.innerWidth);

localStorage.setItem("contenido", "Código y café es una gran combinación");
var principal = document.getElementsByClassName("principal")[0];
boton.addEventListener("click", ()=>{
    let documento = document.body.appendChild(imagen);
    principal.innerHTML += " " + localStorage.getItem("contenido");
});

var botones = [];
for (let index = 0; index < 3; index++) {
    botones.push(document.getElementById("boton"+(index+1)))
}

botones[0].addEventListener("click", ()=>{
    window.history.forward();
    console.log("llamada a forward");
})
botones[1].addEventListener("click", ()=>{
    window.history.back();
    console.log("llamada a back");
})
botones[2].addEventListener("click", ()=>{
    window.history.go(3);
    console.log("llamada a go(3)");
})