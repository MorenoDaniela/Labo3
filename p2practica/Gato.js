"use strict";
var Animales;
(function (Animales) {
    class Gato extends Animales.Mascota {
        constructor(id, nombre, cantidadVidas) {
            super(id, nombre); //llamo al constructor de la clase padre
            this.cantidadVidas = 9;
            this.cantidadVidas = cantidadVidas; //inicializo atributos propios
        }
        getCantidadVidas() {
            return this.cantidadVidas;
        }
        setCantidadVidas(cantidadVidas) {
            this.cantidadVidas = cantidadVidas;
        }
    }
    Animales.Gato = Gato;
})(Animales || (Animales = {}));
