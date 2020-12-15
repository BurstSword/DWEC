class Voto {
    constructor(nombrePartido, nombreColegio, voto) {
        this.nombrePartido = nombrePartido;
        this.nombreColegio = nombreColegio;
        this.numVotos = voto;
    }

    pedirVoto() {
        var partido;
        var colegio;
        var numeroVotos;
        do {
            var partidoValido = false;
            partido = prompt("Introduce el partido (PSOE,PP,IU,Ciudadanos,Podemos y UPYD)");
            
            if (partido.toLowerCase() == "psoe" || partido.toLowerCase() == "pp" || partido.toLowerCase() == "iu" || partido.toLowerCase() == "ciudadanos" || partido.toLowerCase() == "podemos" || partido.toLowerCase() == "upyd") {

                partidoValido = true;

            }
        } while (partidoValido == false);

        do {
            var colegioValido = false;
            colegio = prompt("Introduce el colegio entre los posibles (Ataulfo Argenta, Santa Catalina, Riomar, José Saramago)");
            if (colegio.toLowerCase() == "ataulfo argenta" || colegio.toLowerCase() == "santa catalina" || colegio.toLowerCase() == "riomar" || colegio.toLowerCase() == "jose saramago") {

                colegioValido = true;

            }
        } while (colegioValido == false);

        do {
            var numeroValido = false;
            numeroVotos = prompt("Introduce el número de votos");
            
            numeroVotos=parseInt(numeroVotos);
                if (!isNaN(numeroVotos)) {
                    numeroValido = true;
                }


            
        } while (numeroValido == false);

        return new Voto(partido, colegio, numeroVotos);
    }

    cambiarVotos() {
        var partido;
        var colegio;
        var numeroVotos;
        do {
            var partidoValido = false;
            partido = prompt("Introduce el partido (PSOE,PP,IU,Ciudadanos,Podemos y UPYD)");
            if (partido.toLowerCase() == "psoe" || partido.toLowerCase() == "pp" || partido.toLowerCase() == "iu" || partido.toLowerCase() == "ciudadanos" || partido.toLowerCase() == "podemos" || partido.toLowerCase() == "upyd") {

                partidoValido = true;

            }
        } while (partidoValido == false);

        do {
            var colegioValido = false;
            colegio = prompt("Introduce el colegio entre los posibles (Ataulfo Argenta, Santa Catalina, Riomar, José Saramago)");
            if (colegio.toLowerCase() == "ataulfo argenta" || colegio.toLowerCase() == "santa catalina" || colegio.toLowerCase() == "riomar" || colegio.toLowerCase() == "jose saramago") {

                colegioValido = true;

            }
        } while (colegioValido == false);

        do {
            var numeroValido = false;
            numeroVotos = prompt("Introduce el número de votos nuevo");
            if (colegio.toLowerCase() == "ataulfo argenta" || colegio.toLowerCase() == "santa catalina" || colegio.toLowerCase() == "riomar" || colegio.toLowerCase() == "jose saramago") {
                if (isNaN(numeroVotos) && numeroVotos >= 0) {
                    numeroValido = true;
                }


            }
        } while (numeroValido = true);

        return numeroVotos
    }

    pedirVotosDeUnColegio() {
        var colegio;
        do {
            var colegioValido = false;
            colegio = prompt("Introduce el colegio entre los posibles (Ataulfo Argenta, Santa Catalina, Riomar, José Saramago)");
            if (colegio.toLowerCase() == "ataulfo argenta" || colegio.toLowerCase() == "santa catalina" || colegio.toLowerCase() == "riomar" || colegio.toLowerCase() == "jose saramago") {

                colegioValido = true;

            }
        } while (colegioValido == false);

        return colegio;
    }
    pedirVotosDeUnPartido() {
        var partido;

        do {
            var partidoValido = false;
            partido = prompt("Introduce el partido (PSOE,PP,IU,Ciudadanos,Podemos y UPYD)");
            if (partido.toLowerCase() == "psoe" || partido.toLowerCase() == "pp" || partido.toLowerCase() == "iu" || partido.toLowerCase() == "ciudadanos" || partido.toLowerCase() == "podemos" || partido.toLowerCase() == "upyd") {

                partidoValido = true;

            }
        } while (partidoValido == false);
        return partido;
    }

    muestra_tabla(vector){
        var muestraestado="";
        var cabecera="<table border='1'><tr><th>Nombre de la cerveza</th><th>Pa�s de origen</th>";
        cabecera+="<th>Antig�edad</th><th>Tipo de cerveza</th><th>Graduaci�n</th><th>Estado de fabricaci�n</th></tr>";
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

}