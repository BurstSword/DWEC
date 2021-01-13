

/* 


const prestado = document.getElementsByName("lent");*/



function validar() {
    var mensajeError = "";
    var valida = true;
    const nombre = document.getElementById("name");
    if (nombre.value.length == 0 || nombre.value.length > 20) {
        mensajeError += "El formato del nombre del disco es incorrecto \n";
        cambiaeEstilo("name");
        valida = false;
    } else {
        devuelveEstilo("name");
    }
    const group = document.getElementById("group");
    if (group.value.length == 0 || group.value.length > 20) {
        mensajeError += "El formato del nombre del grupo es incorrecto\n";
        cambiaeEstilo("group");
        valida = false;
    } else {
        devuelveEstilo("group");
    }
    const year = document.getElementById("year");
    if (year.value.length != 4 || isNaN(year.value)) {
        mensajeError += "El formato del año es incorrecto\n"
        cambiaeEstilo("year");
        valida = false;
    } else {
        devuelveEstilo("year");
    }
    const location = document.getElementById("location");
    if (isNaN(location.value)) {
        mensajeError += "El formato de la ubicación es incorrecto\n";
        cambiaeEstilo("location");
        valida = false;
    } else {
        devuelveEstilo("location");
    }
    if (valida) {
        alert("Los campos son válidos");
        console.log("Hola loquete")

    } else {
        alert(mensajeError);
    }
}

function devuelveEstilo(componente) {

    const elemento = document.getElementById(componente);
    /* elemento.style.border = "solid 1px";
    elemento.style.borderColor = "lightgray";
    elemento.style.backgroundColor = "white" */
    elemento.className+=" is-valid"
}

function cambiaeEstilo(componente) {

    const elemento = document.getElementById(componente);
    /* elemento.style.border = "dashed";
    elemento.style.borderColor = "red";
    elemento.style.backgroundColor = "lightyellow" */
    elemento.className += " is-invalid"
}