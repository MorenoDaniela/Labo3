namespace Animales
{
    export class Gato extends Mascota
    {
        private cantidadVidas:number=9;

        constructor(id:number,nombre:string,cantidadVidas:number)
        {
            super(id,nombre);//llamo al constructor de la clase padre
            this.cantidadVidas=cantidadVidas;//inicializo atributos propios
        }

        public getCantidadVidas():number
        {
            return this.cantidadVidas;
        }

        public setCantidadVidas(cantidadVidas:number):void
        {
            this.cantidadVidas=cantidadVidas;
        }
    }
}