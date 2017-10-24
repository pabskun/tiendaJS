mostrarListaArticulos();
let inputCodigo = document.querySelector('#txtCodigo');
let inputNombre = document.querySelector('#txtNombre');

document.querySelector('#btnRegistrar').addEventListener('click', obtenerDatosRegistro);

function obtenerDatosRegistro(){

    let aNuevoProveedor = [];
    let sCodigo = inputCodigo.value;
    let sNombre = inputNombre.value;

    aNuevoProveedor.push(sCodigo,sNombre);

    registrarProveedor(aNuevoProveedor);
    mostrarListaArticulos();

}
function mostrarListaArticulos(){
    let listaProveedores = obtenerListaProveedores();
    let cuerpoTabla = document.querySelector('#tblProveedores tbody');
    cuerpoTabla.innerHTML = '';

    for(let i = 0; i < listaProveedores.length;i++){
        let fila = cuerpoTabla.insertRow(i);

        let campoCodigo = fila.insertCell();
        let campoNombre = fila.insertCell();
        

        campoCodigo.innerHTML = listaProveedores[i][0];
        campoNombre.innerHTML = listaProveedores[i][1];
    
    }
}