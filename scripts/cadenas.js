var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho"

var resultado;

//indexOf
//resultado = mensaje.indexOf("aprendiendo");

//lastIndex
//resultado = mensaje.lastIndexOf("aprendiendo");

//search
resultado = mensaje.search("aprendiendo");

//match
//resultado = mensaje.match(/aprendiendo/gi);

console.log(mensaje);
console.log(resultado, mensaje.substr(resultado,"aprendiendo".length));