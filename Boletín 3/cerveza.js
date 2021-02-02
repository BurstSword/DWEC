function Cerveza(nombre_in, paisorigen_in, graduacion_in, tipocerveza_in, anyofabricacion_in, estadofabricacion_in) {
    this.nombre = nombre_in;
    this.paisorigen = paisorigen_in;
    this.graduacion = graduacion_in;
    this.tipocerveza = tipocerveza_in;
    this.anyofabricacion = anyofabricacion_in;
    this.estadofabricacion = estadofabricacion_in;
    this.defecto = defecto;
    this.dados = dados;
    this.cambiaestanteria = cambiaestanteria;
    this.cambiaprestado = cambiaprestado;
    this.muestradisco = muestradisco;
}

function defecto() {
    this.nombre = "";
    this.paisorigen = "";
    this.graduacion = 0;
    this.tipocerveza = "";
    this.anyofabricacion = 0;
    this.estadofabricacion = true;
}

//M�todo que asigna valores al objeto creado
function dados(nombre_en,paisorigen_en,graduacion_en,tipocerveza_en,anyofabricacion_en) {
    this.nombre = nombre_en;
    this.paisorigen = paisorigen_en;
    this.graduacion = graduacion_en;
    this.tipocerveza = tipocerveza_en;
    this.anyofabricacion = anyofabricacion_en;
    this.estadofabricacion = true;
}

function cambiatipo() {
	do {
		var peticion = prompt("Introduce el nuevo tipo de cerveza de forma numérica");
		peticion = peticion.trim();
		this.tipocerveza = parseInt(peticion);
	} while (isNaN(peticion) || this.localizacion < 0);
}
function cambiapais() {
	do {
		var peticion = prompt("Introduce el país de forma numérica");
		peticion = peticion.trim();
		this.paisorigen = parseInt(peticion);
	} while (isNaN(peticion) || this.localizacion < 0);
}
function cambiaestado() {
	if (this.estadofabricacion) {
		this.estadofabricacion = false;
	} else {
		this.estadofabricacion = true;
	}
}
function muestracerveza() {
	document.write("<h3>La cerveza " + this.nombre + " presenta la siguiente información:</h3>");
	document.write("<ul type='disc'>");
	document.write("<li>Nombre: " + this.nombre + "</li>");
	document.write("<li>País origen: " + this.paisorigen + "</li>");
	document.write("<li>Graduación: " + this.graduacion + "</li>");
	document.write("<li>Tipo de cerveza: " + this.tipocerveza + "</li>");
	document.write("<li>Se empezó a fabricar en: " + this.anyofabricacion + "</li>");
	if (this.estadofabricacion) {
		document.write("<li>La cerveza ya no se fabrica</li>");
	} else {
		document.write("<li>Sigue en fabricación</li>");
	}
	document.write("</ul>");
}