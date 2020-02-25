// Flor, excelente trabajo. Las funciones en general estan perfectas, hacen su trabajo y el codigo es claro y prolijo. 
// Obviamente lo que falta es el codigo que nos haga funcionar el menu de operaciones. No deberia ser muy complejo. 
// Algo asi al final de todo, por ejemplo:

do {
//   menuDeOperaciones();

//   switch (accion) {
//     case 'AGREGAR':
//       agregarProducto();
//       break;

//     case 'MOSTRAR':
//       alert(mostrarDetalle(carritoDeCompras));
//       break;

//     case 'ELIMINAR':
//       eliminarProducto(carritoDeCompras);
//       break;

//     case 'VACIAR':
//       vaciarCarrito(carritoDeCompras);
//       break;

//     case 'CANCELAR':
//       cancelarCompra();

//       break;

//     case 'CONFIRMAR':
//       confirmarCompra(carritoDeCompras);
//       break;

//     default:
//       break;
//   }
// } while (accion !== 'SALIR');
    
// Poniendo todo en marcha vas a ver que hay algunas cosas que todavia no funcionan a la perfeccion. Agregar un producto 
    // trae algunas dificultades, se repiten algunos alert que no deberian. Si el carrito esta vacio, no podemos 
    // agregar un nuevo producto. 
    // Pero me parecen detalles: yo considero este trabajo aprobado ya que demuestra la comprension de los temas que 
    // buscabamos practicar. 
    // Si tenes ganas de que continuemos juntas este codigo para que quede funcionando, hagamos call!
    


let productosDisponibles = [
    [1, "Notebook Lenobo S400", 100, true],
    [2, "Celular Notorola G5", 135, false],
    [3, "Smart TV Filips 43'", 190, true],
    [4, "Sorny PS 7", 215, true]
];

let carritoDeCompras = [
    [4, "Sorny PS 7", 215, true, 1],
    [3, "Smart TV Filips 43'", 190, true, 2]
];

let cantidad = 0;
let realizarNuevamente = "";
let confirmacion = "";
let accion = "";

const menuDeOperaciones = () => {
    accion = prompt(`Bienvenido a Baratolandia
    Elija una de las siguiente opciones:
    -AGREGAR productos a su carrito
    -MOSTRAR la compra
    -ELIMINAR un producto de su carrito
    -VACIAR carrito
    -CANCELAR compra
    -CONFIRMAR compra
     `)

    return accion
}

const contarTotalDeProductos = carrito => {
    let cantidadDeProductos = 0;
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        cantidadDeProductos = producto.length;
    }
    return cantidadDeProductos;
};

const subtotalDeCompra = carrito => {
    let subtotal = 0;
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        subtotal += (producto[2] * producto[4]); // recibe el array del carrito de compras y tiene que retornar el monto total del carrito
    }
    return subtotal;
};

// const totalDeDescuento = () => {
//     //  recibe el array del carrito de compras y tiene que retornar el monto total del descuento que aplica.
//     // Como no todos los productos aplican para descuento, solo se debe calcular sobre el subtotal de los productos que si aplican
// }

const mostrarDetalle = carrito => {
    let acumuladora = "";
    let subtotal = 0;
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        subtotal = producto[4] * producto[2];
        acumuladora += `
    Nombre: ${producto[1]}
    Precio: $${producto[2]}
    Cantidad: ${producto[4]}
    Subtotal: ${producto[4]} Unid. x $${producto[2]} = $${subtotal}
        `;
    }
    return acumuladora;
};

// let operacion = "";

// while(operacion !== "SALIR"){

// }

const mostrarProductosDisponibles = productosDisponibles => {
    let acumuladora = "";
    for (let i = 0; i < productosDisponibles.length; i++) {
        const producto = productosDisponibles[i];
        acumuladora += `
        Id: ${producto[0]}
        Nombre: ${producto[1]}
        Precio: ${producto[2]}
        ......................................................
        `;
    }
    return acumuladora;
};

let idProducto = 0;

let productoAAgregar = [];

const agregarProducto = () => {
    alert(`Estos son los productos disponibles:
     ${mostrarProductosDisponibles(productosDisponibles)}`);

    idProducto = prompt("Por favor ingrese el ID del producto que desea llevar");
    idProducto = Number(idProducto);
    let productoEncontrado = false; //variable bandera
    for (let i = 0; i < carritoDeCompras.length; i++) {
        const producto = carritoDeCompras[i];
        if (idProducto === producto[0]) {
            let cantidadAgregada = producto[4];
            cantidad = prompt("¿Cuántas unidades va a llevar?");
            console.log(cantidadAgregada);
            cantidad = Number(cantidad);
            cantidad += cantidadAgregada;
            producto[4] = cantidad;
        } else {
            //variable bandera

            for (let x = 0; x < productosDisponibles.length; x++) {
                const productoDisponible = productosDisponibles[x];

                if (idProducto === productoDisponible[0]) {
                    cantidad = prompt("¿Cuántas unidades va a llevar?");
                    cantidad = Number(cantidad);
                    productoAAgregar = [
                        productoDisponible[0],
                        productoDisponible[1],
                        productoDisponible[2],
                        productoDisponible[3],
                        cantidad
                    ];
                    productoEncontrado = true;
                }
            }
            if (!productoEncontrado) {
                alert("El ID ingresado es inválido");
            }
        }
    }
    if (productoEncontrado) {
        carritoDeCompras.push(productoAAgregar);
    }

    return carritoDeCompras;
};

const eliminarProducto = () => {
    idProducto = prompt(
        "Por favor ingrese el ID del producto que desea eliminar"
    );
    idProducto = Number(idProducto);
    let productoEncontrado = false;


    for (let i = 0; i < carritoDeCompras.length; i++) {
        const producto = carritoDeCompras[i];
        if (idProducto === producto[0]) {
            confirmacion = prompt(`
        Producto: ${producto[1]}
        Cantidad: ${producto[4]}
        ¿Desea confirmar la operación?`);
            productoEncontrado = true;
            if (confirmacion.toLowerCase() === "si") {
                carritoDeCompras.splice(i, 1)
            }

            if (confirmacion.toLowerCase() === "no") {
                alert("La operación ha sido cancelada")
            }
        }
        else {
            alert("El producto que ha seleccionado no se encuentra en el carrito de compras")
        }
    }
    return carritoDeCompras;
};



const vaciarCarrito = carrito => {
    confirmacion = prompt("¿Desea confirmar la operación?")
    if (confirmacion.toLowerCase() === "si") {
        carrito.splice(0, carrito.length)
        alert("La operación se ha completado con éxito")
    }
    if (confirmacion.toLowerCase() === "no") {
        alert("La operación se ha cancelado")
    }
    else {
        alert("No ha seleccionado ninguna opción válida")
    }
    return carrito
}

const cancelarCompra = carrito => {
    confirmacion = prompt("¿Desea confirmar la operación?")
    if (confirmacion.toLowerCase() === "si") {
        carrito.splice(0, carrito.length)
        alert("¡Gracias por visitarnos! Vuelva pronto.")
    }
    if (confirmacion.toLowerCase() === "no") {
        menuDeOperaciones()
    }
    return carrito
}

const confirmarCompra = carrito => {
    alert(`
    ${mostrarDetalle(carrito)}
    Total a pagar: $${subtotalDeCompra(carrito)}`)
    confirmacion = prompt("¿Desea finalizar la compra?")
    if (confirmacion.toLowerCase() === "si") {
        alert(`
        ¡La compra se ha completado con éxito!
        Gracias por visitarnos
        `)
    }
    if (confirmacion.toLowerCase === "no") {
        menuDeOperaciones()
    }
    return carritoDeCompras
        
}

console.log(confirmarCompra(carritoDeCompras))
// while (condition) {

// do {

// } while (condition);
// }

// mostrarDetalle
// eliminarProducto
// vaciarCarrito
// confirmarCompra
// cancelarCompra

