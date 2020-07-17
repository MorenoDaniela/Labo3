"use strict";
var Animales;
(function (Animales) {
    class Mascota {
        constructor(id, nombre) {
            this.id = id;
            this.nombre = nombre;
        }
        getNombre() {
            return this.nombre;
        }
        setNombre(nombre) {
            this.nombre = nombre;
        }
        getId() {
            return this.id;
        }
        setId(id) {
            this.id = id;
        }
    }
    Animales.Mascota = Mascota;
})(Animales || (Animales = {}));
