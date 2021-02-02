function generateInput() {
    var br = document.createElement("br");
    var nombre = document.createElement("input");

    var name = prompt("¿Que name quieres poner?")
    nombre.setAttribute("type", "text");
    nombre.setAttribute("name", name);
    nombre.setAttribute("placeholder", "Nombre");
    
    var form = getFormulario();
    form.appendChild(nombre);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
}

function generatePassword() {
    var br = document.createElement("br");
    var contrasena = document.createElement("input");

    var name = prompt("¿Que name quieres poner?")
    contrasena.setAttribute("type", "text");
    contrasena.setAttribute("name", name);
    contrasena.setAttribute("placeholder", "Contraseña");

    var form = getFormulario();
    form.appendChild(contrasena);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
}

function generateTextArea() {
    var br = document.createElement("br");
    var nombreArea = document.createElement("textarea");

    nombreArea.setAttribute("type", "text");
    nombreArea.setAttribute("name", "name");
    nombreArea.setAttribute("rows", "5");
    nombreArea.setAttribute("cols", "40");
    nombreArea.setAttribute("placeholder", "Contraseña");

    var form = getFormulario();
    form.appendChild(nombreArea);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
}

function generateLabel() {
    var br = document.createElement("br");
    var labelName = document.createElement("label");
    var forName = prompt("¿Que for quieres poner?")

    labelName.setAttribute("type", "text");
    labelName.setAttribute("for", forName);

    var form = getFormulario();
    form.appendChild(labelName);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
}

function generateImg() {
    var br = document.createElement("br");
    var img = document.createElement("img");

    var ruta = prompt("¿Que src quieres poner?")
    img.setAttribute("src", ruta);

    var form = getFormulario();
    form.appendChild(img);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
}

function generateCheckBox() {
    var br = document.createElement("br");
    var checkbox = document.createElement("input");

    var name = prompt("¿Que name quieres poner?")
    var value = prompt("¿Que value quieres poner?")
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", name);
    checkbox.setAttribute("value", value);

    var form = getFormulario();
    form.appendChild(checkbox);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
}

function generateRadio() {
    var br = document.createElement("br");
    var radioButton = document.createElement("input");

    var name = prompt("¿Que name quieres poner?")
    var value = prompt("¿Que value quieres poner?")
    radioButton.setAttribute("type", "radio");
    radioButton.setAttribute("name", name);
    radioButton.setAttribute("value", value);

    var form = getFormulario();
    form.appendChild(radioButton);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
}

function generateBtnSubmit() {
    var br = document.createElement("br");
    var btnSubmit = document.createElement("button");

    var name = prompt("¿Que name quieres poner?")
    var value = prompt("¿Que value quieres poner?")
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.setAttribute("name", name);
    btnSubmit.setAttribute("value", value);
    
    var form = getFormulario();
    form.appendChild(btnSubmit);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
}

function getFormulario() {

    var form = document.getElementById("formularioGenerado");
    return form;

}

