namespace Animales
{
    export class Pajaro extends Mascota
    {
        private tipo:eTipo;

        constructor(nombre:string,tipo:eTipo)
        {
            super(nombre);//llamo al constructor de la clase padre
            this.tipo=tipo;//inicializo atributos propios
        }

        public getTipo():eTipo
        {
            return this.tipo;
        }

        public setTipo(tipo:eTipo):void
        {
            this.tipo=tipo;
        }
   }

   export enum eTipo
    {
        Avestruz,
        Buitre,
        Canario,
        Cigüeña,
        Loro
    }
}