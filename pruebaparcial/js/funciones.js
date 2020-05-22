var globalTr="";
var spinner = "";
var http = new XMLHttpRequest();
var contenedorAgregar="";

/*
//pruebo max
var date = new Date();
var parsed = date.getFullYear() +"-" +date.getMonth()+ "-"+ date.getDate();
//alert (parsed);<---sale mal*/
        window.onload = function ()
        {
            
            PedirPersonasGet();
            var modificar = document.getElementById("btnModificar");
            spinner = document.getElementById("loader");
            var cerrar = document.getElementById("cerrar");
            cerrar.onclick=CerrarRecuadro;
            modificar.onclick=EditarPersonaPost;
            modificar.addEventListener("click",CerrarRecuadro);
            var eliminar = document.getElementById("btnEliminar");
            eliminar.onclick=EliminarPersonaPost;
            var agregar = document.getElementById("btnAgregar");
            agregar.onclick= Agregar;
            var male = document.getElementById("male");
            var female = document.getElementById("female");
            if (female.checked==true)
            {
                male.checked=false;
            }else if (male.checked==true)
            {
                female.checked=false;
            }
            /*
            http.onreadystatechange=callback;
            http.open("GET","http://localhost:3000/personas",true);
            http.send(); 
            var agregar = document.getElementById("btnAgregar");*/
            //agregar.onclick=AbrirRecuadro;
        }

        function RealizarPeticionGet(metodo,url,funcion)
        {
            http.onreadystatechange=funcion;
            
            http.open(metodo,url,true);
            http.send();
        }
        function RealizarPeticionPost(metodo,url,funcion)
        {
            http.onreadystatechange=funcion;
            http.open(metodo,url,true);
            http.setRequestHeader("Content-Type","application/json");
            var male = document.getElementById("male");
            var female = document.getElementById("female");
            if (female.checked==true && document.getElementById("user").value.length>=3 && document.getElementById("apellido").value.length>=3)
            {
                male.checked=false;
                var data = {id:document.getElementById("id").value,nombre:document.getElementById("user").value,apellido:document.getElementById("apellido").value,fecha:document.getElementById("fecha").value,sexo:document.getElementById("female").value};
            }else if (male.checked==true&& document.getElementById("user").value.length>=3 && document.getElementById("apellido").value.length>=3)
            {
                female.checked=false;
                var data = {id:document.getElementById("id").value,nombre:document.getElementById("user").value,apellido:document.getElementById("apellido").value,fecha:document.getElementById("fecha").value,sexo:document.getElementById("male").value};
            }
            
            //console.log(data);
            http.send(JSON.stringify(data));
        }

        function RealizarPeticionPostNueva(metodo, url, funcion)
        {
            http.onreadystatechange=funcion;
            http.open(metodo,url,true);
            http.setRequestHeader("Content-Type","application/json");
            var male = document.getElementById("male");
            var female = document.getElementById("female");
            if (female.checked==true && document.getElementById("user").value.length>=3 && document.getElementById("apellido").value.length>=3)
            {
                male.checked=false;
                var data = {nombre:document.getElementById("user").value,apellido:document.getElementById("apellido").value,fecha:document.getElementById("fecha").value,sexo:document.getElementById("female").value};
            }else if (male.checked==true&& document.getElementById("user").value.length>=3 && document.getElementById("apellido").value.length>=3)
            {
                female.checked=false;
                var data = {nombre:document.getElementById("user").value,apellido:document.getElementById("apellido").value,fecha:document.getElementById("fecha").value,sexo:document.getElementById("male").value};
            }
            
            //console.log(data);
            http.send(JSON.stringify(data));
        }

        function callback()
        {
            
            if (http.readyState==4 && http.status==200)
            {
                armarGrilla(JSON.parse(http.responseText));              
            }
        }

        function respuesta()
        {
            if (http.readyState==4 && http.status==200)
            {
                loader.hidden=false;
                Modificar(JSON.parse(http.responseText));
                //loader.hidden=true;
            }
        }

        function dPersona()
        {
            if (http.readyState==4 && http.status==200)
            {
                
                Eliminar(JSON.parse(http.responseText));
            }
        }

        function nueva()
        {
            if (http.readyState==4 && http.status==200)
            {
                
                Agregar(JSON.parse(http.responseText));
            }
        }



        function PedirPersonasGet()
        {
            RealizarPeticionGet("GET","http://localhost:3000/personas",callback);
        }

        function NuevaPersonaPostConParametros()
        {
            RealizarPeticionPostNueva("POST","http://localhost:3000/nueva",nueva);//aca deberia decir enviar? que es la que manda los datos???
        }

        function EditarPersonaPost()
        {
            //contenedorAgregar.hidden=true;
            //loader.hidden=false;
            RealizarPeticionPost("POST","http://localhost:3000/editar",respuesta);
            //loader.hidden=true;
            //contenedorAgregar.hidden=false;
        }

        function EliminarPersonaPost()
        {
            RealizarPeticionPost("POST","http://localhost:3000/eliminar",dPersona);
        }

        
        function armarGrilla(jsonObj)
        {
            var tabla = document.getElementById("tabla");
            
            for(var i = 0;i<jsonObj.length;i++)
            {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(jsonObj[i].nombre));
                //td.setAttribute("id","nombre");
                tr.appendChild(td);

                var td2 = document.createElement("td");
                td2.appendChild(document.createTextNode(jsonObj[i].apellido));
               // td2.setAttribute("id","apellido");
                tr.appendChild(td2);

                var td3 = document.createElement("td");
                td3.appendChild(document.createTextNode(jsonObj[i].fecha));
                //td3.setAttribute("id","fecha");
                tr.appendChild(td3);

                var td4 = document.createElement("td");
                td4.appendChild(document.createTextNode(jsonObj[i].sexo));
                //td4.setAttribute("id","sexo");
                tr.appendChild(td4); 

                var td5 = document.createElement("td");
                td5.appendChild(document.createTextNode(jsonObj[i].id));
                td5.hidden=true;
               // td5.setAttribute("id","id");
                tr.appendChild(td5);
                //td5.hidden=true;

                tr.addEventListener("dblclick",AbrirRecuadro);
                //var modificar = document.getElementById("btnModificar");
                //tr.addEventListener(modificar.onclick,Modificar);
                tabla.appendChild(tr);
            }
           
        }
        

        function AbrirRecuadro(e)
        {
            var recuadro = document.getElementById("contenedorAgregar");
            contenedorAgregar=recuadro;
            recuadro.hidden=false;
            var tr = e.target.parentNode;
            globalTr=tr;//la solucion estaba aca
            document.getElementById("user").value = tr.childNodes[0].innerHTML;
            document.getElementById("apellido").value = tr.childNodes[1].innerHTML;
           
        /*
            document.getElementById("fecha").max = parsed;
            alert (document.getElementById("fecha").max);*/

            document.getElementById("fecha").value = tr.childNodes[2].innerHTML;
            document.getElementById("id").value = tr.childNodes[4].innerHTML;
            //console.log(tr.childNodes[4].innerHTML);
            if (tr.childNodes[3].innerHTML=="Female")
            {
                //alert(tr.childNodes[3].innerHTML);
                document.getElementById("female").checked=true;
                document.getElementById("male").checked=false;
            }else if (tr.childNodes[3].innerHTML=="Male")
            {
                document.getElementById("male").checked=true;
                document.getElementById("female").checked=false;
            }
            
        }

        function Modificar(persona)
        {
            
            //if (globalTr.childNodes[3].innerHTML == persona.id)
            //{
                //console.log(globalTr.childNodes[0].innerHTML);
                globalTr.childNodes[0].innerHTML = persona.nombre;
                //console.log(globalTr.childNodes[0].innerHTML);
                globalTr.childNodes[1].innerHTML = persona.apellido;
                globalTr.childNodes[2].innerHTML= persona.fecha;
                globalTr.childNodes[3].innerHTML = persona.sexo;
                spinner.hidden=true;
            //}
            
        }

        function Agregar(persona)
        {
            var tabla = document.getElementById("tabla");
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(persona.nombre));
            tr.appendChild(td);

            var td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(persona.apellido));
            tr.appendChild(td2);

            var td3 = document.createElement("td");
            td3.appendChild(document.createTextNode(persona.fecha));
            tr.appendChild(td3);

            var td4 = document.createElement("td");
            td4.appendChild(document.createTextNode(persona.sexo));
            //td4.setAttribute("id","sexo");
            tr.appendChild(td4); 

            var td5 = document.createElement("td");
            td5.appendChild(document.createTextNode(persona.id));
            td5.hidden=true;
            
            tr.addEventListener("dblclick",AbrirRecuadro); 
            tabla.appendChild(tr);
        }

        function Eliminar()
        {
            globalTr.remove();
        }

        function CerrarRecuadro()
        {
            var recuadro = document.getElementById("contenedorAgregar");
            recuadro.hidden=true;
            spinner.hidden=false;
            Spinner();
        }

        function Spinner()
        {
            setTimeout(MostrarSpinner,3000);
        }

        function MostrarSpinner()
        {
            spinner.hidden=true;
        }

        
