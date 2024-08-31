export class Mensaje {

    constructor(
        public usuario: string = "default",
        public mensaje: string = "msj vacio",
        public fecha: Date = new Date()
      ) {}
}
