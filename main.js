const divisas = [
    {id: 1, nombre: "Dolares", precioCompra: 1400, precioVenta: 1420},
    {id: 2, nombre: "Euros", precioCompra: 1505, precioVenta: 1538},
    {id: 3, nombre: "Reales", precioCompra: 247.75, precioVenta: 268.75},
    {id: 4, nombre: "Uruguayos", precioCompra: 19.75, precioVenta: 22.50},
];

class Productos {
    constructor(productos) {
        this.items = productos || []; // Inicializar items con el array de productos si se proporciona
    }

    agregarProducto(nombreP, precioCompraP, precioVentaP) {
        const producto = {id: this.generarId(), nombre: nombreP, precioCompra: precioCompraP, precioVenta: precioVentaP};
        this.items.push(producto);
        console.log("Producto agregado:", producto);
    }

    buscarProducto(id) {
        return this.items.find(item => item.id === id);
    }

    obtenerProductos() {
        return this.items;
    }

    totalProductos() {
        return this.items.length; // Corregir el método para obtener la longitud del array
    }

    generarId() {
        return this.items.length + 1; // Corregir la obtención del ID
    }
}

const catalogo = new Productos(divisas);
console.log(catalogo.obtenerProductos());

// Ejemplo de uso de la clase Productos
catalogo.agregarProducto("Bitcoin", 56500, 57500);
console.log(catalogo.obtenerProductos());



// Pedir al usuario que ingrese el nombre de la divisa
const nombreDivisa = prompt("Ingrese el nombre de la divisa:");

// Buscar la divisa 
const divisaSeleccionada = divisas.find(divisa => divisa.nombre.toLowerCase() === nombreDivisa.toLowerCase());

// Mostrar la información en un alert
if (divisaSeleccionada) {
    alert(`Nombre: ${divisaSeleccionada.nombre}\nPrecio de compra: ${divisaSeleccionada.precioCompra}\nPrecio de venta: ${divisaSeleccionada.precioVenta}`);
} else {
    alert(`No se encontró la divisa "${nombreDivisa}"`);
}

if (divisaSeleccionada) {
    // Solicitar al usuario la cantidad de pesos ARG que desea convertir
    const cantidadPesosARG = parseFloat(prompt(`Ingrese la cantidad de pesos ARG que desea convertir a ${divisaSeleccionada.nombre}:`));

    // Calcular cuántas unidades de la divisa puede comprar
    const unidadesDivisa = cantidadPesosARG / divisaSeleccionada.precioVenta;

    // Mostrar mensaje con la cantidad de divisas compradas
    alert(`Usted compraria ${unidadesDivisa.toFixed(2)} ${divisaSeleccionada.nombre}`);
} else {
    alert(`No se encontró la divisa "${nombreDivisa}" en el listado.`);
}