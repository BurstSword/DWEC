function muestra_numelementos(vector) {
	var numelementos = vector.length;
	return numelementos;
}
function muestraelementos(vector) {
	document.write("<ul type='square'>");
	for (var i = 0; i < vector.length; i++) {
		document.write("<li>" + vector[i] + "</li>");
	}
	document.write("</ul>");
}

function invierteelementos(vector) {
	var nuevovector = new Array();
	//Construyo el nuevo array para que el array original no se vea modificado
	for (var i = 0; i < vector.length; i++) {
		nuevovector[i] = vector[i];
	}
	nuevovector = nuevovector.reverse();
	muestraelementos(nuevovector);
}

//En este caso no ser�a necesario, pues sort no modifica el array. No obstante, lo hacemos igual.
function ordenaelementos(vector) {
	var nuevovector = new Array();
	for (var i = 0; i < vector.length; i++) {
		nuevovector[i] = vector[i];
	}
	nuevovector = nuevovector.sort();
	muestraelementos(nuevovector);
}

function agregaprincipio(vector) {
	var elemento = prompt("introduce un nuevo pais para meterlo al principio");
	vector.unshift(elemento);
	muestraelementos(vector);
}

function agregafinal(vector) {
	var elemento = prompt("introduce un nuevo pais para meterlo al final");
	vector.push(elemento);
	muestraelementos(vector);
}

function eliminaprincipio(vector) {
	var devuelve = vector.shift();
	muestraelementos(vector);
	document.write("<p>El elemento eliminado es " + devuelve + "</p>");
}

function eliminafinal(vector) {
	var devuelve = vector.pop();
	muestraelementos(vector);
	document.write("<p>El elemento eliminado es " + devuelve + "</p>");
}

function diceelemento(vector) {
	do {
		var elemento = prompt("introduce la posici�n del elemento");
	} while (isNaN(elemento) || parseInt(elemento) >= vector.length);
	document.write(vector[parseInt(elemento)]);
}

function devuelveposicion(vector) {
	var paisbuscar = prompt("introduce el pais a buscar");
	paisbuscar = paisbuscar.trim();
	var indicebuscar = vector.indexOf(paisbuscar);
	if (indicebuscar != -1) {
		document.write("El elemento se encuentra en la posici�n " + indicebuscar + "<br>");
	} else {
		document.write("La b�squeda no ha arrojado ninguna coincidencia");
	}
}

function devuelveintervalo(vector) {
	do {
		var posicioninicio = prompt("introduce la posici�n inicial. Debe ser un n�mero entre 0 y " + (vector.length - 1));
	} while (isNaN(posicioninicio) || parseInt(posicioninicio) < 0 || parseInt(posicioninicio) >= vector.length);
	do {
		var posicionfinal = prompt("introduce la posici�n final. Debe ser un n�mero entre 0 y " + (vector.length - 1) + " y debe ser mayor que " + posicioninicio);
	} while (isNaN(posicionfinal) || parseInt(posicionfinal) < 0 || parseInt(posicionfinal) >= vector.length || parseInt(posicionfinal) <= parseInt(posicioninicio));
	var nuevovector = new Array();
	nuevovector = vector.slice(posicioninicio, posicionfinal + 1);
	var numelementos = nuevovector.length;
	if (numelementos == 0) {
		document.write("El nuevo array no contiene ning�n pa�s<br>");
	} else {
		document.write("<h3>Los pa�ses seleccionados son:</h3>");
		muestraelementos(nuevovector);
	}
}

