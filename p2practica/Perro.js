"use strict";
var Animales;
(function (Animales) {
    class Perro extends Animales.Mascota {
        constructor(id, nombre, raza) {
            super(id, nombre); //llamo al constructor de la clase padre
            this.raza = raza; //inicializo atributos propios
        }
        getRaza() {
            return this.raza;
        }
        setRaza(raza) {
            this.raza = raza;
        }
    }
    Animales.Perro = Perro;
})(Animales || (Animales = {}));
