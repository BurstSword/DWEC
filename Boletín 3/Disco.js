class Disco {

    constructor(nombre, grupo, anyo, tipo, localizacion) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.anyo = anyo;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false;
    }
    constructor() {
        this.nombre = "";
        this.grupo = "";
        this.anyo = "";
        this.tipo = "";
        this.localizacion = 0;
        this.prestado = false;
    }

    cambiarLocalizacion(numero) {
        this.localizacion = numero;

    }

    cambiarPrestado(){
        if(this.prestado){
            this.prestado=false;
        }else{
            this.prestado=true;
        }
    }

    mostrarDisco(){
        this.Disco.toString();
    }
}