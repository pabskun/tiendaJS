function registrarProveedor(pNuevoProveedor){
    let listaProveedores =  obtenerListaProveedores();
    listaProveedores.push(pNuevoProveedor);

    localStorage.setItem('listaProveedoresLS', JSON.stringify(listaProveedores));
}

function obtenerListaProveedores(){
    let listaProveedores = JSON.parse(localStorage.getItem('listaProveedoresLS'));

    if(listaProveedores === null){
        listaProveedores =
        [
            ['prov01', 'Santillana'],
            ['prov02', 'Norma'],
            ['prov03', 'Faber-Castell'],
            ['prov04', 'Editorial UCR']
        ]
    }


    return listaProveedores;
}