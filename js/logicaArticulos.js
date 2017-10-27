// Función para guardar los datos en el localStorage
function registrarArticulo(pInfoArticuloNuevo){
    let listaArticulos = obtenerListaArticulos();
    listaArticulos.push(pInfoArticuloNuevo);

    localStorage.setItem('listaArticulosLS', JSON.stringify(listaArticulos));
}

// Función para sacar los datos del localStorage
function obtenerListaArticulos(){
    let listaArticulos = JSON.parse(localStorage.getItem('listaArticulosLS'));

    if(listaArticulos === null){
        listaArticulos = 
        [
            ['cod11', 'Cuaderno', 1200, 'prov02'],
            ['cod12', 'Juego de geometría', 780, 'prov02'],
            ['cod13', 'Goma', 550, 'prov03'],
            ['cod14', 'Lapicero rojo', 400, 'prov03']
        ];
    }

    return listaArticulos;
}

function buscarArticuloPorCodigo(psCodigo){
    let listaArticulos = obtenerListaArticulos();
    let articuloEncontrado = [];

    for(let i = 0; i < listaArticulos.length; i++){
        if(listaArticulos[i][0] === psCodigo){
            articuloEncontrado = listaArticulos[i];
        }
    }
    return articuloEncontrado;
}

function actualizarArticulo(psArticulo){
    let listaArticulos = obtenerListaArticulos();

    for(let i =0; i < listaArticulos.length; i++){
        if(listaArticulos[i][0] === psArticulo[0]){
            listaArticulos[i] = psArticulo;
            localStorage.setItem('listaArticulosLS', JSON.stringify(listaArticulos));
        }
    }
}