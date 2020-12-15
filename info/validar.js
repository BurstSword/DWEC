
//funcion para validar la cadena de caracteres introducida
function validar_cadena(introducido){
introducido=introducido.trim();
while(introducido==""){
introducido=prompt("Introduce la cadena solicitada");
introducido=introducido.trim();
}
return introducido;
}

//funcion para validar el número introducido
function validar_numerico(introducido){
var numerico_devuelto;
introducido=introducido.trim();
while(isNaN(introducido) || introducido==""){
introducido=prompt("Introduce el número solicitado");
introducido=introducido.trim();
}
numerico_devuelto=parseFloat(introducido);
if(!Number.isInteger(introducido)){
numerico_devuelto=numerico_devuelto.toFixed(2);
}
numerico_devuelto=parseFloat(numerico_devuelto);
return numerico_devuelto; 
}
