namespace Animales
{
    export class Mascota
    {
        private nombre : string;
        private id : number;
        constructor(id:number,nombre:string)
        {
            this.id=id;
            this.nombre=nombre;
        }

        public getNombre():string
        {
            return this.nombre;
        }

        public setNombre(nombre:string):void
        {
            this.nombre=nombre;
        }

        public getId():number
        {
            return this.id;
        }

        public setId(id:number):void
        {
            this.id=id;
        }
    }
}