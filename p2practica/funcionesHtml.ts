namespace Animales
{
    var listaMascotas: Array<Mascota> = new Array <Mascota>();
    window.onload = function ()
    {
        document.getElementById("btnGuardar")?.addEventListener("click",Animales.Guardar);
        document.getElementById("btnModificar")?.addEventListener("click",Animales.Modificar);
        document.getElementById("btnEliminar")?.addEventListener("click",Animales.Eliminar);
    }
    
    export function Guardar()
    {
        
        var p = new Promise((resolve, reject)=>
        {
            var tipo = (<HTMLSelectElement>document.getElementById("tipo")).value;
            if (tipo == "Gato")
            {
                resolve ()
            }
        });
        var nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value;
        var atributo = (<HTMLInputElement>document.getElementById("atributo")).value;
        
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
        td5.hidden=true;
        tr.appendChild(td5);

        tr.addEventListener("dblclick",AbrirRecuadro);
        tabla!.appendChild(tr);
    }

    export function Modificar ()
    {

    }

    export function Eliminar()
    {

    }
}