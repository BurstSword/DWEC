//función que muestra el número de elementos del Array vector pasado como parámetro
function muestra_numelementos(vector){
var numelementos=vector.length;
return numelementos;
}

//La siguiente función se aplicaría a un array no formado por objetos
//Si se aplica a un array formado por cadenas de caracteres, mostrará los elementos de dicho array.
function muestraelementos(vector){
				 document.write("<ul type='square'>");
				 for (var i=0;i<vector.length;i++){
				 document.write("<li>"+vector[i]+"</li>");
				 }
				 document.write("</ul>");
}

//La siguiente función se aplicaría a una array formado por objetos con propiedad "Nombre"
//Si se aplica al array de etiquetas de cerveza, mostrará los nombres de las Cervezas
function muestranombreselementos(vector){
				 document.write("<ul type='square'>");
				 for (var i=0;i<vector.length;i++){
				 document.write("<li>"+vector[i].nombre+"</li>");
				 }
				 document.write("</ul>");
}

//La siguiente función muestra en forma de tabla, todos los parámetros de todos los objetos del array de etiquetas de cervezas
function muestra_tabla(vector){
var muestraestado="";
var cabecera="<table border='1'><tr><th>Nombre de la cerveza</th><th>País de origen</th>";
cabecera+="<th>Antigüedad</th><th>Tipo de cerveza</th><th>Graduación</th><th>Estado de fabricación</th></tr>";
var pie="</table>";
document.write(cabecera);
for(var i=0;i<vector.length;i++){
	if(vector[i].estadofabricacion){
	muestraestado="Se fabrica";
	}else{
	muestraestado="No se fabrica";
	}
	document.write("<tr><td>"+vector[i].nombre+"</td><td>"+vector[i].pais_origen+"</td><td>"+vector[i].anio+"</td><td>"+vector[i].tipocerveza+"</td><td>"+vector[i].graduacion+"</td><td>"+muestraestado+"</td></tr>");
	}
document.write(pie);
}

//Función del mostrado de las etiquetas de cervezas belgas
function muestra_belgas(vector){
var arraymuestra=new Array();
	for (var i=0;i<vector.length;i++){
		if(vector[i].pais_origen.toLowerCase()=="belgica"){
		arraymuestra.push(vector[i]);		
		}
	}
muestra_tabla(arraymuestra);
}
/*OTRA FORMA, con MAP
function muestra_belgas(vector){
//Creamos un nuevo array para no modificar el que recibimos
var nuevoarray = new Array();
for(var i=0;i<vector.length;i++){
nuevoarray[i]=vector[i];
}
//Recogemos en otro array el resultado de aplicar la condición a todos los elementos del array
//otroarray no nos interesará. Sólo nos swervirá para poder aplicarle la condición a todos los elementos del Array
//Lo que haremos será que, si se cumple, se complemente el ultimo array con los objetos que la cumplen
var otroarray= new Array();
var ultimoarray=new Array();
otroarray=nuevoarray.map(function(x){
if(x.pais_origen.toLowerCase()=="belgica"){ultimoarray.push(x);}
});
muestra_tabla(ultimoarray);
}
*/

//Función del mostrado de las etiquetas de cervezas con graduación mayor que 5.5
function muestra_graduacion(vector){
var arraymuestra=new Array();
	for (var i=0;i<vector.length;i++){
		if(vector[i].graduacion.toFixed(1)>=5.5){
		arraymuestra.push(vector[i]);		
		}
	}
muestra_tabla(arraymuestra);
}

//Función del mostrado de las etiquetas de cervezas fundadas antes de 1600
function muestra_antiguas(vector){
var arraymuestra=new Array();
	for (var i=0;i<vector.length;i++){
		if(vector[i].anio < 1600){
		arraymuestra.push(vector[i]);		
		}
	}
muestra_tabla(arraymuestra);
}

//Función del mostrado de las etiquetas de cervezas belgas de abvadía o pilsen españolas
function muestra_especiales(vector){
var arraymuestra=new Array();
	for (var i=0;i<vector.length;i++){
		if((vector[i].pais_origen.toLowerCase()=="belgica" && vector[i].tipocerveza.toLowerCase()=="abadia")||(vector[i].pais_origen.toLowerCase()=="españa" && vector[i].tipocerveza.toLowerCase()=="pilsen")){
		arraymuestra.push(vector[i]);		
		}
	}
muestra_tabla(arraymuestra);
}

