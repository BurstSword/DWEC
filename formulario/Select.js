var comunidades = {}


comunidades['Al'] = ['Sevilla', 'Cádiz', 'Huelva', 'Málaga', 'Córdoba', 'Granada', 'Almería', 'Jaén'],
comunidades['Gal'] = ['La Coruña', 'Lugo', 'Comarca de Pontevedra', 'Orense'],
comunidades['Extr'] = ['Cáceres', 'Badajoz']

function cambiaProvincias() {

    var listaComunidades = document.getElementById("comunidad");
    var listaProvincias = document.getElementById("provincias");

    var comunidadSeleccionada = listaComunidades.options[listaComunidades.selectedIndex].value;
    while (listaProvincias.options.length) {
        listaProvincias.remove(0);
    }
    var provincias = comunidades[comunidadSeleccionada];
    if (provincias) {
        listaProvincias.hidden = false;

        for (var i = 0; i < provincias.length; i++) {
            var provincia = new Option(provincias[i], i);
            listaProvincias.options.add(provincia);
        }
    } else {
        listaProvincias.hidden = true;
    }
} 