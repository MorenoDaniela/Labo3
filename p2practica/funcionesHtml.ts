namespace Animales
{
    var listaMascotas: Array<Mascota> = new Array <Mascota>();
    var mascotaSeleccionada : boolean = false;
    var globalTr : any;

    window.onload = function ()
    {
        document.getElementById("btnGuardar")?.addEventListener("click",Animales.Guardar);
        document.getElementById("btnModificar")?.addEventListener("click",Animales.Modificar);
        document.getElementById("btnEliminar")?.addEventListener("click",Animales.Eliminar);
        document.getElementById("textBuscar")?.addEventListener("keypress",Animales.SwapTables);
    }
    
    export function Guardar()
    {

        var nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value;
        var atributo = (<HTMLInputElement>document.getElementById("atributo")).value;
        var tipoMascota = (<HTMLSelectElement>document.getElementById("tipo")).value;
        console.log(tipoMascota);
        var p = new Promise((resolve, reject) => {
            var tipo = (<HTMLSelectElement>document.getElementById("tipo")).value;
            if (tipo == "Gato")
            {
                var vidas = parseInt(atributo);
                if (vidas.toString() != "NaN")
                {
                resolve(new Gato(CalcularId(),nombre, vidas))
                }
                else
                {
                    reject("EPIC FAIL!!")
                }
            }
            else if (tipo == "Perro")
            {
                var raza = atributo;
                resolve (new Perro(CalcularId(),nombre, raza))
            }
            else if (tipo == "Pajaro")
            {
                if ((<any>Object).values(eTipo).includes(atributo)) {
                    var tipoDePajaro : eTipo = (<any>eTipo)[atributo];
                    resolve (new Pajaro(CalcularId(),nombre, tipoDePajaro))
                }
                else 
                {
                    reject("EPIC FAIL!!")
                }
            }
            else 
            {
                reject("EPIC FAIL!!")
            }
        });

        p.then((mascota) => {
            listaMascotas.push(<Mascota>mascota);
            var tablaMascotas = (<HTMLTableElement>document.getElementById("tabla")); 
            ConstruirFila(tablaMascotas, (<Mascota>mascota).getId(), nombre, atributo,tipoMascota);
                }).catch((error)=>
        {
            alert("epic fail" + error)
        })
    }

    export function Modificar ()
    {
        if(mascotaSeleccionada)
        {
            var idMascota = globalTr.childNodes[2].innerHTML;
            var nombreNuevo = (<HTMLInputElement>document.getElementById("nombre")).value;
            var atributoNuevo=(<HTMLInputElement>document.getElementById("atributo")).value;
            var tipoNuevo = (<HTMLSelectElement>document.getElementById("tipo")).value;
            var tablaMascotas = (<HTMLTableElement>document.getElementById("tablaMascotas"));

            console.log(tablaMascotas.childNodes[2].childNodes[2])
            // tablaMascotas.childNodes[2].childNodes[2].forEach(element => {
            //     console.log(element)
            //     console.log(element.childNodes)

            //     if (element.childNodes[2].textContent==idMascota)
            //     {
            //         console.log(globalTr)
            //         globalTr=element;
            //         console.log(globalTr)

            //         return;
            //     }
            // });

            listaMascotas.forEach(mascota => {
                if(mascota.getId()==idMascota)
                {

                    if (tipoNuevo == "Gato")
                    {
                        var vidas = parseInt(atributoNuevo);
                        if (vidas.toString() != "NaN")
                        {
                            (<Gato>mascota).setCantidadVidas(vidas)
                            globalTr.childNodes[1].innerHTML=atributoNuevo;
                            mascota.setNombre(nombreNuevo);
                            globalTr.childNodes[0].innerHTML=nombreNuevo;
                        }
                        else
                        {
                            alert("debe ser un numero")
                        }
                    }
                    else if (tipoNuevo == "Perro")
                    {
                        var raza = atributoNuevo;
                        (<Perro>mascota).setRaza(raza);
                        globalTr.childNodes[1].innerHTML=atributoNuevo;
                        mascota.setNombre(nombreNuevo);
                        globalTr.childNodes[0].innerHTML=nombreNuevo;
                    }
                    else if (tipoNuevo == "Pajaro")
                    {
                        if ((<any>Object).values(eTipo).includes(atributoNuevo)) 
                        {
                        var tipoDePajaro : eTipo = (<any>eTipo)[atributoNuevo];
                        (<Pajaro>mascota).setTipo(tipoDePajaro);
                        globalTr.childNodes[1].innerHTML=atributoNuevo;
                        mascota.setNombre(nombreNuevo);
                        globalTr.childNodes[0].innerHTML=nombreNuevo;
                        }
                        else 
                        {
                            alert("debe ser un tipo válido de pájaro")
                        }
                    }
                    mascotaSeleccionada=false;
                    return;
                }
            });
        }
        else{
            alert("seleccione mascota");
        }
    }

    export function Eliminar()
    {
        if(mascotaSeleccionada)
        {
            var idMascota = globalTr.childNodes[2].innerHTML;
            for (var i=0;i<listaMascotas.length;i++)
            {
                if (idMascota==listaMascotas[i].getId())
                {
                    listaMascotas.splice(i,1);
                    globalTr.remove();
                }
            }
            mascotaSeleccionada=false;
        }
    }

    function CalcularId()
    {
        var id : number = 1;
        if(listaMascotas.length != 0)
        {
            var lastRegisterIndex : number = listaMascotas.length-1;
            var lastRegister : Mascota = listaMascotas[lastRegisterIndex];
            id = lastRegister.getId() + 1;
        }
        return id;
    }

    export function BuscarMascota()
    {        
        var nombreABuscar:string = (<HTMLInputElement>document.getElementById("textBuscar")).value;
        return new Promise((resolve, reject) => 
        {
            var coincidencias = listaMascotas.filter(mascota=>mascota.getNombre().includes(nombreABuscar));
            resolve(coincidencias);
                });
    }

    export function SwapTables()
    {
        var tablaMascotas = (<HTMLTableElement>document.getElementById("tabla"));
        var tablaCoincidencias = (<HTMLTableElement>document.getElementById("tablaCoincidencias"));
        var tipoMascota:string="";
        if((<HTMLInputElement>document.getElementById("textBuscar")).value != "")
        {
            tablaMascotas.hidden=true;
            tablaCoincidencias.innerHTML="";
            BuscarMascota().then((listaFiltrada) => {
                (<Array<Mascota>>listaFiltrada).forEach(mascota => {
                    var atributo : string = "";
                    if (mascota instanceof Gato)
                    {
                        tipoMascota="Gato";
                        atributo = (<Gato>mascota).getCantidadVidas().toString();
                    }
                    if (mascota instanceof Perro)
                    {
                        tipoMascota="Perro";
                        atributo = (<Perro>mascota).getRaza();
                    }
                    if (mascota instanceof Pajaro)
                    {
                        tipoMascota="Pajaro";
                        atributo = eTipo[(<Pajaro>mascota).getTipo()];
                    }
                    ConstruirFila(tablaCoincidencias, (<Mascota>mascota).getId(), (<Mascota>mascota).getNombre(), atributo,tipoMascota);

                });    
            });
            tablaCoincidencias.hidden=false;
        }
        else
        {
            tablaMascotas.hidden=false;
            tablaCoincidencias.hidden=true;
        }
    }

    export function ConstruirFila(tabla:HTMLTableElement, id:number, nombre:string, atributo:string,tipo:string):void
    {

        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.appendChild(document.createTextNode(nombre));
        tr.appendChild(td);

        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(atributo));
        tr.appendChild(td2);

        var td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(tipo));
        tr.appendChild(td4);

        var td3 = document.createElement("td");
        td3.appendChild(document.createTextNode((id.toString())));
        tr.appendChild(td3);
        //td3.hidden=true;

        tr.addEventListener("dblclick", fillData);
        tabla.appendChild(tr); 
    } 

    export function fillData(tr:any)
    {
        var trForFilling = tr.target.parentNode;
        globalTr=trForFilling;
        mascotaSeleccionada=true, 
        (<HTMLInputElement>document.getElementById("nombre")).value=trForFilling.childNodes[0].innerHTML;
        (<HTMLInputElement>document.getElementById("atributo")).value=trForFilling.childNodes[1].innerHTML;
        (<HTMLInputElement>document.getElementById("tipo")).value=trForFilling.childNodes[2].innerHTML;
    }
}