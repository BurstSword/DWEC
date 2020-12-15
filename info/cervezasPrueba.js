class Cerveza {
    constructor(nombre_in, pais_origen_in, graduacion_in, tipocerveza_in, anio_in, estadofabricacion_in) {
        this.nombre = nombre_in;
        this.pais_origen = pais_origen_in;
        this.anio = anio_in;
        this.tipocerveza = tipocerveza_in;
        this.graduacion = graduacion_in;
        this.estadofabricacion = estadofabricacion_in;
    }
     defecto() {
        this.nombre = "";
        this.pais_origen = "";
        this.anio = "";
        this.tipocerveza = "";
        this.graduacion = 0;
        this.estadofabricacion = true;
    }
    cambiapais() {
        var peticion = prompt("Introduce el nuevo pa�s de origen").trim();
        this.pais_origen = peticion;
    }

     muestraetiqueta() {

        document.write("<h3>La etiqueta de la cerveza " + this.nombre + " presenta la siguiente informaci�n:</h3>");
        document.write("<ul type='disc'>");
        document.write("<li>Nombre: " + this.nombre + "</li>");
        document.write("<li>Pa�s de origen: " + this.pais_origen + "</li>");
        document.write("<li>Antig�edad: " + this.anio + "</li>");
        document.write("<li>Graduaci�n: " + this.graduacion.toFixed(1) + "</li>");
        document.write("<li>Tipo de cerveza: " + this.tipocerveza + "</li>");
        if (this.estadofabricacion) {
            document.write("<li>La cerveza se fabrica actualmente</li>");
        } else {
            document.write("<li>La cerveza no se fabrica actualmente</li>");
        }
        document.write("</ul>");
    }

    cambiaTipo() {
        var valido = false;
    
        while (!valido) {
            var texto = "Introduce el nuevo tipo de cerveza de entre los que se te muestran:\n";
            texto += "Lager, Tostada, Negra, Trigo, Pilsen, Abad�a"
            var peticion = prompt(texto).trim();
            var peticioncomprueba = peticion.toLowerCase();
            if (peticioncomprueba == "lager" || peticioncomprueba == "tostada" || peticioncomprueba == "negra" || peticioncomprueba == "trigo" || peticioncomprueba == "pilsen" || peticioncomprueba == "abadia") {
                valido = true;
                this.pais_origen = peticion;
            } else {
                valido = false;
            }
        }
    }

    cambiaestado() {
       this.estadofabricacion=!this.estadofabricacion;
    }

}
