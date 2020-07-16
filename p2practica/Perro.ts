namespace Animales
{
    export class Perro extends Mascota
    {
        private raza:string;

        constructor(nombre:string,raza:string)
        {
            super(nombre);//llamo al constructor de la clase padre
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