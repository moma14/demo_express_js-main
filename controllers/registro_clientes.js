let registro_clientes=[];

function agregarClientes(nombre, email){
    registro_clientes.push({nombre, email});
}
function obtenerclientes(){
    return registro_clientes;
}

module.exports={
    agregarClientes,
    obtenerclientes
};