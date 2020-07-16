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
    var Perro = /** @class */ (function (_super) {
        __extends(Perro, _super);
        function Perro(nombre, raza) {
            var _this = _super.call(this, nombre) || this;
            _this.raza = raza; //inicializo atributos propios
            return _this;
        }
        Perro.prototype.getRaza = function () {
            return this.raza;
        };
        Perro.prototype.setRaza = function (raza) {
            this.raza = raza;
        };
        return Perro;
    }(Animales.Mascota));
    Animales.Perro = Perro;
})(Animales || (Animales = {}));
