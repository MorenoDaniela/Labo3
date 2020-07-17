namespace Animales
{
    export class Perro extends Mascota
    {
        private raza:string;

        constructor(id:number,nombre:string,raza:string)
        {
            super(id,nombre);//llamo al constructor de la clase padre
            this.raza=raza;//inicializo atributos propios
        }

        public getRaza():string
        {
            return this.raza;
        }

        public setRaza(raza:string):void
        {
            this.raza=raza;
        }
    }
}