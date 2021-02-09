function carga_formulario(){

	var salto=document.createElement("br");
	/*Creamos un formulario con sus atributos */
    var formulario=document.createElement("form");
    formulario.setAttribute("action","tratar.php");
	formulario.setAttribute("method","POST");
    formulario.setAttribute("enctype","text/plain");
    
    


    /*Creamos un input de nombre */
	var divnombre=document.createElement("div");
	var labelnombre=document.createElement("label");
	var textonombre=document.createTextNode("Nombre");
    var inputnombre=document.createElement("input");
    
    divnombre.setAttribute("id","capanombre");
	labelnombre.setAttribute("for","nombre");
	inputnombre.setAttribute("id","nombre");
	inputnombre.setAttribute("name","nombre");
	inputnombre.setAttribute("type","text");

    /*Creamos un input de grupo o cantante */
	var divcantante=document.createElement("div");
	var labelcantante=document.createElement("label");
	var textocantante=document.createTextNode("Grupo o cantante");
    var inputcantante=document.createElement("input");

    divcantante.setAttribute("id","capacantante");
	labelcantante.setAttribute("for","cantante");
	inputcantante.setAttribute("id","cantante");
	inputcantante.setAttribute("name","cantante");
	inputcantante.setAttribute("type","text");
    
    /*Creamos un input de año de publicación */
	var divpublicacion=document.createElement("div");
	var labelpublicacion=document.createElement("label");
	var textopublicacion=document.createTextNode("A�o de publicaci�n");
    var inputpublicacion=document.createElement("input");
    
    divpublicacion.setAttribute("id","capapublicacion");
	labelpublicacion.setAttribute("for","publicacion");
	inputpublicacion.setAttribute("id","publicacion");
	inputpublicacion.setAttribute("name","publicacion");
	inputpublicacion.setAttribute("type","number");
	inputpublicacion.setAttribute("min","1950");
	inputpublicacion.setAttribute("max","2020");
	inputpublicacion.setAttribute("value","1950");

    /*Creamos un select con diferentes opciones */
	var divtipomusica=document.createElement("div");
	var labeltipomusica=document.createElement("label");
	var textotipomusica=document.createTextNode("Tipo de m�sica");
	var selecttipomusica=document.createElement("select");
	var option1=document.createElement("option");
	var option2=document.createElement("option");
	var option3=document.createElement("option");
	var option4=document.createElement("option");
	var textooption1=document.createTextNode("Rock");
	var textooption2=document.createTextNode("Pop");
	var textooption3=document.createTextNode("Indie");
    var textooption4=document.createTextNode("Punk");
    
    divtipomusica.setAttribute("id","capatipomusica");
	labeltipomusica.setAttribute("for","tipomusica");
	selecttipomusica.setAttribute("id","tipomusica");
	selecttipomusica.setAttribute("name","tipomusica");
	option1.setAttribute("value","rock");
	option2.setAttribute("value","pop");
	option3.setAttribute("value","indie");
	option4.setAttribute("value","punk");

    /*Creamos un input de aumento y disminución de números */
	var divlocalizacion=document.createElement("div");
	var labellocalizacion=document.createElement("label");
	var textolocalizacion=document.createTextNode("Localizaci�n del disco");
	var inputlocalizacion=document.createElement("input");
	var p_prestado=document.createElement("p");
    var textop_prestado=document.createTextNode("�Est� prestado?");
    
    p_prestado.setAttribute("align","left");
    divlocalizacion.setAttribute("id","capalocalizacion");
	labellocalizacion.setAttribute("for","localizacion");
	inputlocalizacion.setAttribute("id","localizacion");
	inputlocalizacion.setAttribute("name","localizacion");
	inputlocalizacion.setAttribute("type","number");
	inputlocalizacion.setAttribute("min","1");
	inputlocalizacion.setAttribute("max","10");
	inputlocalizacion.setAttribute("value","1");

    /*Creamos un radiobutton con un no */
	var divinputnoprestado=document.createElement("div");
	var inputnoprestado=document.createElement("input");
	var labelnoprestado=document.createElement("label");
    var textonoprestado=document.createTextNode("No");
    
    divinputnoprestado.setAttribute("id","capanoprestado");
	labelnoprestado.setAttribute("for","noprestado");
	inputnoprestado.setAttribute("id","noprestado");
	inputnoprestado.setAttribute("name","prestado");
	inputnoprestado.setAttribute("type","radio");
	inputnoprestado.setAttribute("value","no");

    /*Creamos un radiobutton con un sí */
	var divinputprestado=document.createElement("div");
	var inputprestado=document.createElement("input");
	var labelprestado=document.createElement("label");
    var textoprestado=document.createTextNode("S�");
    
    divinputprestado.setAttribute("id","capaprestado");
	labelprestado.setAttribute("for","prestado");
	inputprestado.setAttribute("id","prestado");
	inputprestado.setAttribute("name","prestado");
	inputprestado.setAttribute("type","radio");
	inputprestado.setAttribute("value","si");

    /*Creamos un párrafo y dos inputs */
	var p_botones=document.createElement("p");
	var inputenviar=document.createElement("input");
	var inputborrar=document.createElement("input");
	
	
	p_botones.setAttribute("align","center");
	inputenviar.setAttribute("type","submit");
	inputenviar.setAttribute("value","Enviar");
    inputborrar.setAttribute("type","reset");
	inputborrar.setAttribute("value","Borrar");
	
	
	
	
	
	
	
	
	
	//Empezamos anexando los nodos tipo texto a sus correspondientes nodos
    labelnombre.appendChild(textonombre);	
    
    labelcantante.appendChild(textocantante);
    
    labelpublicacion.appendChild(textopublicacion);
    
    labeltipomusica.appendChild(textotipomusica);
    
	option1.appendChild(textooption1);	
	option2.appendChild(textooption2);	
	option3.appendChild(textooption3);	
    option4.appendChild(textooption4);	
    
    labellocalizacion.appendChild(textolocalizacion);	
    
    p_prestado.appendChild(textop_prestado);
	labelnoprestado.appendChild(textonoprestado);
    labelprestado.appendChild(textoprestado);
    
	p_botones.appendChild(inputenviar);
    p_botones.appendChild(inputborrar);

    divinputnoprestado.appendChild(inputnoprestado);
    divinputnoprestado.appendChild(labelnoprestado);
    
	divinputprestado.appendChild(inputprestado);
    divinputprestado.appendChild(labelprestado);
    
	divlocalizacion.appendChild(labellocalizacion);
    divlocalizacion.appendChild(inputlocalizacion);
    
	selecttipomusica.appendChild(option1);
	selecttipomusica.appendChild(option2);
	selecttipomusica.appendChild(option3);
    selecttipomusica.appendChild(option4);
    
	divtipomusica.appendChild(labeltipomusica);
    divtipomusica.appendChild(selecttipomusica);
    
	divpublicacion.appendChild(labelpublicacion);
    divpublicacion.appendChild(inputpublicacion);
    
	divcantante.appendChild(labelcantante);
    divcantante.appendChild(inputcantante);
    
	divnombre.appendChild(labelnombre);
    divnombre.appendChild(inputnombre);
    
	formulario.appendChild(divnombre);
    formulario.appendChild(salto);
    
	formulario.appendChild(divcantante);
    formulario.appendChild(salto);
    
	formulario.appendChild(divpublicacion);
    formulario.appendChild(salto);
    
	formulario.appendChild(divtipomusica);
    formulario.appendChild(salto);
    
	formulario.appendChild(divlocalizacion);
    formulario.appendChild(salto);
    
	formulario.appendChild(p_prestado);
	formulario.appendChild(divinputnoprestado);
    formulario.appendChild(divinputprestado);
    
	formulario.appendChild(p_botones);
    document.body.appendChild(formulario);
//Marcamos el checked del elemento radio
	document.getElementById("noprestado").checked;		
}	