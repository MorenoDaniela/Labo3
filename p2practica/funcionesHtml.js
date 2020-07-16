"use strict";
var Animales;
(function (Animales) {
    var listaMascotas = new Array();
    window.onload = function () {
        var _a, _b, _c;
        (_a = document.getElementById("btnGuardar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", Animales.Guardar);
        (_b = document.getElementById("btnModificar")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", Animales.Modificar);
        (_c = document.getElementById("btnEliminar")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", Animales.Eliminar);
    };
    function Guardar() {
        var p = new Promise(function (resolve, reject) {
            var tipo = document.getElementById("tipo").value;
            if (tipo == "Gato") {
                resolve();
            }
        });
        var nombre = document.getElementById("nombre").value;
        var atributo = document.getElementById("atributo").value;
        var tabla = document.getElementById("tabla");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(jsonObj[i].nombre));
        tr.appendChild(td);
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(jsonObj[i].cuatrimestre));
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(jsonObj[i].fechaFinal));
        tr.appendChild(td3);
        var td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(jsonObj[i].turno));
        tr.appendChild(td4);
        var td5 = document.createElement("td");
        td5.appendChild(document.createTextNode(jsonObj[i].id));
        td5.hidden = true;
        tr.appendChild(td5);
        tr.addEventListener("dblclick", AbrirRecuadro);
        tabla.appendChild(tr);
    }
    Animales.Guardar = Guardar;
    function Modificar() {
    }
    Animales.Modificar = Modificar;
    function Eliminar() {
    }
    Animales.Eliminar = Eliminar;
})(Animales || (Animales = {}));
