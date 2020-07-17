"use strict";
var Animales;
(function (Animales) {
    class Pajaro extends Animales.Mascota {
        constructor(id, nombre, tipo) {
            super(id, nombre); //llamo al constructor de la clase padre
            this.tipo = tipo; //inicializo atributos propios
        }
        getTipo() {
            return this.tipo;
        }
        setTipo(tipo) {
            this.tipo = tipo;
        }
    }
    Animales.Pajaro = Pajaro;
    let eTipo;
    (function (eTipo) {
        eTipo[eTipo["Avestruz"] = 0] = "Avestruz";
        eTipo[eTipo["Buitre"] = 1] = "Buitre";
        eTipo[eTipo["Canario"] = 2] = "Canario";
        eTipo[eTipo["Cig\u00FCe\u00F1a"] = 3] = "Cig\u00FCe\u00F1a";
        eTipo[eTipo["Loro"] = 4] = "Loro";
    })(eTipo = Animales.eTipo || (Animales.eTipo = {}));
})(Animales || (Animales = {}));
