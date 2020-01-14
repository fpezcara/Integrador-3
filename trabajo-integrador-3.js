let productosDisponibles = [
    [1, "Notebook Lenobo S400", 100, true],
    [2, "Celular Notorola G5", 135, false],
    [3, "Smart TV Filips 43'", 190, true],
    [4, "Sorny PS 7", 215, true]
];

let carritoDeCompras = [

];


let subtotalCarritoDeCompras = 0;
let detalleCarritoCompras = 0;

const contarTotalDeProductos = () => {
    let cantidadDeProductos = 0;
    for (let i = 0; i < carritoDeCompras.length; i++) {
        cantidadDeProductos = carritoDeCompras.length;
    }
    return cantidadDeProductos;
};

// console.log(contarTotalDeProductos(carritoDeCompras))

const subtotalDeCompra = () => {
    for (let i = 0; i < carritoDeCompras.length; i++) {
        subtotalCarritoDeCompras =
            subtotalCarritoDeCompras + carritoDeCompras[i][2]; // recibe el array del carrito de compras y tiene que retornar el monto total del carrito
    }
    return subtotalCarritoDeCompras;
};

// console.log(subtotalDeCompra(carritoDeCompras))

// const totalDeDescuento = () => {
//     //  recibe el array del carrito de compras y tiene que retornar el monto total del descuento que aplica.
//     // Como no todos los productos aplican para descuento, solo se debe calcular sobre el subtotal de los productos que si aplican
// }



let nombreProducto = "";


const mostrarProducto = () => {
    let mostrarCarritoDeCompras = ``;
    
        for (let i = 0; i < carritoDeCompras.length; i++) {
            nombreProducto = CarritoCompras[i][1]
            mostrarCarritoDeCompras = `nombre producto: ${nombreProducto}`

        }
        return mostrarCarritoDeCompras
    

    //  recibe el array del carrito de compras y muestra el listado de productos con los siguientes datos:
    // nombre del producto, precio, cantidad y subtotal (precio x cantidad)
}

console.log(mostrarProducto(carritoDeCompras))
// const agregarProducto = () => {

// }

// // const mostrarDetalle
// const eliminarProducto
// const vaciarCarrito
// const confirmarCompra
// const cancelarCompra

// let operacion = "";

// while(operacion !== "SALIR"){

// }
