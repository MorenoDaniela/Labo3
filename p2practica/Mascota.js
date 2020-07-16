"use strict";
var Animales;
(function (Animales) {
    var Mascota = /** @class */ (function () {
        function Mascota(nombre) {
            this.nombre = nombre;
        }
        Mascota.prototype.getNombre = function () {
            return this.nombre;
        };
        Mascota.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        return Mascota;
    }());
    Animales.Mascota = Mascota;
})(Animales || (Animales = {}));
