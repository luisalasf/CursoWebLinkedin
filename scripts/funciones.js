function saludo(nombre){
    console.log(nombre);
}
//Parametro rest: ...nombreVariable
function cocinar(...ingredientes){
    console.log("Los ingredientes son: ");
    console.log(ingredientes);
}

//Parametro SPREAD
function cocinarDos(ing1, ing2, ing3, ...otros){
    console.log(ing1);
    console.log(ing2);
    console.log(ing3);
    console.log(otros);
}
//funcion anonima
// (
//     function(){
//         var mensaje = "Hola de nuevo";
//         console.log(mensaje);
//     }
// )()
//      CALLBACK
function calcular(datoA, datoB, imprimirResultado){
    let suma = datoA + datoB;
    let resta =  datoA - datoB;
    console.log("Suma: " + datoA + " + " + datoB);
    imprimirResultado(suma);
    console.log("Resta: " + datoA + " - " + datoB);
    imprimirResultado(resta);
}
//arrowFunction
var multiplicar = (num1, num2) => {
    return num1 + " * " + num2 + " = " + (num1*num2);
}


saludo("luis salas");

cocinar("Pollo", "Tomate", "Arroz", "Agua");
//Parametro SPREAD
cocinarDos(...["huevo", "chile","zanahoria"], "Lechuga", "Pan");
//funcion anonima
var saludar = function(nombre){
    return "Hola " + nombre;
}

//  callback
calcular(5, 3, function(resultado){
    console.log(resultado);
})

//arrow function
console.log(multiplicar(3,7));