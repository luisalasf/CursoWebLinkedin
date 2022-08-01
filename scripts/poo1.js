class Producto {
    constructor(numSerie, nombreTienda = "patito"){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
        this.nombreTienda = nombreTienda;
    }
    get infoTienda(){
        console.log("Productos de la tienda ");
    }

    set garantia (value){
        this.tiempoGarantia = value;
    }

    get garantia (){
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto{
    
    constructor(numSerie,modelo, marca, pulgadas, encendido=false, volumen = 0){
        super(numSerie);
        this.modelo = modelo;
        this.marca = marca;
        this.pulgadas = pulgadas;
        this.encendido = encendido;
        this.volumen = volumen;
    }

    encender(){
        console.log(`La pantalla ${this.marca} está encendiendo`);
        this.encendido = true;
    }

    subirVolumen(){
        console.log(`El volumen está subiendo`);
        this.volumen++;
    }

    obtenerInfo(){
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas
        y tiene ${this.volumen} de volumen`);
    }
}

const tvSala = new Pantalla(456654,"Master", "Oasis", 55);
const tvHabitacion = new Pantalla(1411187);