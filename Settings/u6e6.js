function crear_input() {
    var nombre = prompt("Introduzca el nombre (name) del input a crear");
    do {
        var tipo = prompt("Introduzca el tipo de input a crear: text, passwd, checkbox, radio, submit");
        tipo = tipo.trim();
        tipo = tipo.toLowerCase();
    } while (tipo != "text" && tipo != "passwd" && tipo != "checkbox" && tipo != "radio" && tipo != "submit");

    var nuevo_div = document.createElement("div");
    var nuevo_input = document.createElement("input");

    nuevo_div.setAttribute("id", "div_" + nombre);
    nuevo_input.setAttribute("name", nombre);
    nuevo_input.setAttribute("type", tipo);

    if (tipo != "radio") {
        nuevo_input.setAttribute("id", nombre);
    } else {
        var id_radio = prompt("Introduce el identificador id del elemento radio a introducir");
        nuevo_input.setAttribute("id", id_radio);
    }


    //Los submits no llevarán label, el resto sí
    if (tipo != "submit") {
        var nombrelabel = prompt("Introduzca el texto del label asociado al input");
        var nuevo_label = document.createElement("label");
        var texto_label = document.createTextNode(nombrelabel);
        nuevo_label.setAttribute("for", nombre);
        nuevo_label.appendChild(texto_label);
        nuevo_div.appendChild(nuevo_label);
    }

    if (tipo == "checkbox" || tipo == "radio" || tipo == "submit") {
        var valor = prompt("Introduce el Value del elemento creado");
        nuevo_input.setAttribute("Value", valor);
    }
    
    //Anexamos el nodo nuevoinput al formulario
    nuevo_div.appendChild(nuevo_input);
    document.getElementById("miformulario").appendChild(nuevo_div);
    //Para los checkbox y los radios, colocamos el label detrás del input
    if (tipo == "checkbox" || tipo == "radio") {
        var ordenarnodo = nuevo_div.insertBefore(nuevo_input, nuevo_label);
    }
}


function crear_imagen() {
    var nombreimagen = prompt("Introduce el nombre de la imagen a insertar");
    var nuevo_div = document.createElement("div");
    nuevo_div.setAttribute("id", "div_" + nombreimagen);
    var imagen = document.createElement("img");
    var srcpedida = prompt("Introduce la ruta hacia la imagen");
    imagen.setAttribute("src", srcpedida);
    imagen.setAttribute("width", "100");
    nuevo_div.appendChild(imagen);
    document.getElementById("miformulario").appendChild(nuevo_div);
}

function crear_textarea() {
    //Creamos dos capas div para que el label quede por encima del textarea en el documento
    var nombretextarea = prompt("Introduce el name del textarea");
    var nuevo_div_label = document.createElement("div");
    var nuevo_div_textarea = document.createElement("div");
    nuevo_div_label.setAttribute("id", "div_label_" + nombretextarea);
    nuevo_div_textarea.setAttribute("id", "div_textarea_" + nombretextarea);
    var textarea = document.createElement("textarea");
    textarea.setAttribute("id", nombretextarea);
    textarea.setAttribute("name", nombretextarea);
    textarea.setAttribute("rows", "5");
    textarea.setAttribute("cols", "40");
    var valuetextarea = prompt("Introduce el valor que aparecerá por defecto en el textarea");
    var textotextarea = document.createTextNode(valuetextarea);
    var textolabelpedido = prompt("Introduce el texto de la etiqueta que acompañará al textarea");
    var nombrelabel = document.createElement("label");
    var textolabel = document.createTextNode(textolabelpedido);
    nombrelabel.setAttribute("for", nombretextarea);
    nombrelabel.appendChild(textolabel);
    textarea.appendChild(textotextarea);
    nuevo_div_label.appendChild(nombrelabel);
    nuevo_div_textarea.appendChild(textarea);
    document.getElementById("miformulario").appendChild(nuevo_div_label);
    document.getElementById("miformulario").appendChild(nuevo_div_textarea);
}

function crear_parrafo() {
    var parrafo = prompt("Introduce el texto del párrafo a introducir:");
    var nodo_parrafo = document.createElement("p");
    var texto_parrafo = document.createTextNode(parrafo);
    nodo_parrafo.appendChild(texto_parrafo);
    document.getElementById("miformulario").appendChild(nodo_parrafo);
}