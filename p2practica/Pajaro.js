"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animales;
(function (Animales) {
    var Pajaro = /** @class */ (function (_super) {
        __extends(Pajaro, _super);
        function Pajaro(nombre, tipo) {
            var _this = _super.call(this, nombre) || this;
            _this.tipo = tipo; //inicializo atributos propios
            return _this;
        }
        Pajaro.prototype.getTipo = function () {
            return this.tipo;
        };
        Pajaro.prototype.setTipo = function (tipo) {
            this.tipo = tipo;
        };
        return Pajaro;
    }(Animales.Mascota));
    Animales.Pajaro = Pajaro;
    var eTipo;
    (function (eTipo) {
        eTipo[eTipo["Avestruz"] = 0] = "Avestruz";
        eTipo[eTipo["Buitre"] = 1] = "Buitre";
        eTipo[eTipo["Canario"] = 2] = "Canario";
        eTipo[eTipo["Cig\u00FCe\u00F1a"] = 3] = "Cig\u00FCe\u00F1a";
        eTipo[eTipo["Loro"] = 4] = "Loro";
    })(eTipo = Animales.eTipo || (Animales.eTipo = {}));
})(Animales || (Animales = {}));
