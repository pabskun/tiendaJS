
let btnRegistrar = document.querySelector('#btnRegistrar');
btnRegistrar.addEventListener('click',obtenerDatosRegistro);

let btnActualizar =  document.querySelector('#btnActualizar');
btnActualizar.classList.add('ocultar');

btnActualizar.addEventListener('click', obtenerDatosActualizar);

let inputFiltro = document.querySelector('#txtFiltro');
inputFiltro.addEventListener('keyup', filtrarTabla);
let inputCodigo = document.querySelector('#txtCodigo');
let inputNombre = document.querySelector('#txtNombre');
let inputPrecio = document.querySelector('#txtPrecio');
let selectProveedor = document.querySelector('#sltProveedor');
// Mostrar los datos de los articulos al cargar la pagina
mostrarListaArticulos();
mostrarProveedores();
function obtenerDatosRegistro(){
    let infoArticulo = [];
    
    //Si la validacioón es correcta se accede a los valores
    let sCodigo = inputCodigo.value;
    let sNombre = inputNombre.value;
    let nPrecio = Number(inputPrecio.value);
    let sProveedor = selectProveedor.value;

    infoArticulo.push(sCodigo,sNombre,nPrecio, sProveedor); 
    registrarArticulo(infoArticulo);
    mostrarListaArticulos(); // actualiza la tabla
    limpiarFormulario();
}
function obtenerDatosActualizar(){
    let infoArticulo = [];
    
    //Si la validacioón es correcta se accede a los valores
    let sCodigo = inputCodigo.value;
    let sNombre = inputNombre.value;
    let nPrecio = Number(inputPrecio.value);
    let sProveedor = selectProveedor.value;

    infoArticulo.push(sCodigo,sNombre,nPrecio, sProveedor); 
    actualizarArticulo(infoArticulo);
    mostrarListaArticulos(); // actualiza la tabla
    limpiarFormulario();
    btnActualizar.classList.add('ocultar');
    btnRegistrar.classList.remove('ocultar');
    inputCodigo.disabled = false;
}
function mostrarListaArticulos(){
    let listaArticulos = obtenerListaArticulos();
    let cuerpoTabla = document.querySelector('#tblArticulos tbody');
    cuerpoTabla.innerHTML = '';

    for(let i = 0; i < listaArticulos.length;i++){
        let fila = cuerpoTabla.insertRow(i);

        let campoConfiguracion =  fila.insertCell();
        let campoCodigo = fila.insertCell();
        let campoNombre = fila.insertCell();
        let campoPrecio = fila.insertCell();
        let campoProveedor = fila.insertCell();


        //Crear botones de modificar y eliminar
        let btnModificar = document.createElement('a');
        btnModificar.classList.add('fa');
        btnModificar.classList.add('fa-pencil');
        btnModificar.classList.add('botonModificar');
        btnModificar.dataset.codigo = listaArticulos[i][0];

        let btnDeshabilitar = document.createElement('a');
        btnDeshabilitar.classList.add('fa');
        btnDeshabilitar.classList.add('fa-trash');
        btnDeshabilitar.classList.add('botonDeshabilitar');
        btnDeshabilitar.dataset.codigo = listaArticulos[i][0];

        campoConfiguracion.appendChild(btnModificar);
        campoConfiguracion.appendChild(btnDeshabilitar);

        campoCodigo.innerHTML = listaArticulos[i][0];
        campoNombre.innerHTML = listaArticulos[i][1];
        campoPrecio.innerHTML = listaArticulos[i][2];
        campoProveedor.innerHTML = listaArticulos[i][3];

        btnModificar.addEventListener('click', editarArticulo);
    }
}
function filtrarTabla(){
    let listaArticulos = obtenerListaArticulos();
    let cuerpoTabla = document.querySelector('#tblArticulos tbody');
    let sFiltro = inputFiltro.value.toLowerCase();
    cuerpoTabla.innerHTML = '';

    for(let i = 0; i < listaArticulos.length;i++){
        let j = 0;
        if(listaArticulos[i][1].toLowerCase().includes(sFiltro)){

            let fila = cuerpoTabla.insertRow(j);
            
            let campoConfiguracion =  fila.insertCell();
            let campoCodigo = fila.insertCell();
            let campoNombre = fila.insertCell();
            let campoPrecio = fila.insertCell();
            let campoProveedor = fila.insertCell();

             //Crear botones de modificar y eliminar
            let btnModificar = document.createElement('a');
            btnModificar.classList.add('fa');
            btnModificar.classList.add('fa-pencil');
            btnModificar.classList.add('botonModificar');
            btnModificar.dataset.codigo = listaArticulos[i][0];

            let btnDeshabilitar = document.createElement('a');
            btnDeshabilitar.classList.add('fa');
            btnDeshabilitar.classList.add('fa-trash');
            btnDeshabilitar.classList.add('botonDeshabilitar');
            btnDeshabilitar.dataset.codigo = listaArticulos[i][0];

            campoConfiguracion.appendChild(btnModificar);
            campoConfiguracion.appendChild(btnDeshabilitar);
    
            campoCodigo.innerHTML = listaArticulos[i][0];
            campoNombre.innerHTML = listaArticulos[i][1];
            campoPrecio.innerHTML = listaArticulos[i][2];
            campoProveedor.innerHTML = listaArticulos[i][3];

            btnModificar.addEventListener('click', editarArticulo);
            j++;
        }
        
    }
}

function limpiarFormulario(){
    inputCodigo.value = '';
    inputNombre.value = '';
    inputPrecio.value = 0;
    selectProveedor.selectedIndex = 0;
}
function mostrarProveedores(){
    let listaProveedores = obtenerListaProveedores();
    let opcion = document.createElement('option');
    opcion.value = '';
    opcion.text = '--Seleccione un proveedor--';
    selectProveedor.appendChild(opcion);

    for(let i = 0; i< listaProveedores.length; i++){
        let opcion = document.createElement('option');
        opcion.value = listaProveedores[i][0];
        opcion.text = listaProveedores[i][1];

        selectProveedor.appendChild(opcion);
    }
}
function editarArticulo(){
    let sCodigoSeleccionado = this.dataset.codigo;
    let articuloSeleccionado = buscarArticuloPorCodigo(sCodigoSeleccionado);

    //oculta el boton de registrar
    btnRegistrar.classList.add('ocultar');
    //muestra el boton de actualizar
    btnActualizar.classList.remove('ocultar');

    inputCodigo.disabled = true;
    inputCodigo.value = articuloSeleccionado[0];
    inputNombre.value = articuloSeleccionado[1];
    inputPrecio.value = articuloSeleccionado[2];
    selectProveedor.value = articuloSeleccionado[3];
}