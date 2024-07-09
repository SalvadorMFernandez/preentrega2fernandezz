const divisas = [
    {id:1, nombre:"Dolares", precioCompra: 1400, precioVenta: 1420},
    {id:2, nombre:"Euros", precioCompra: 1505, precioVenta: 1538},
    {id:3, nombre:"Reales", precioCompra: 247.75, precioVenta: 268.75},
    {id:4, nombre:"Uruguayos", precioCompra: 19.75, precioVenta: 22.50},
    ]//productos INICIALES

class Productos {
    constructor(poductos) {
        this.items = divisas;
    }
    agregarProducto(nombreP, precioCompraP, precioVentaP) { //Bitcoin, 56500, 57500 
    const producto = {id:this.generarId(), nombre:nombreP, preciocompra:precioCompraP, precioventa:precioVentaP}; //Crear un nuevo objeto Producto
    this.items.push(producto); //Agregando al array items de la Clase Producto, el nuevo objeto Producto creado
    console.log("Producto agregado")    
    }
    buscarProducto(id){
    return this.items.find(item=> item.id == id)
    }
    obtenerProductos(){
        return this.items;
    }
    totalProductos(){
        return this.items.lenght;
    }
    generarId(){
        return this.items.lenght + 1; //cantidad de productos de mi array + 1
    }
}
const catalogo = new Productos(divisas)
console.log(catalogo.obtenerProductos());



// Pedir al usuario que ingrese el nombre de la divisa
const nombreDivisa = prompt("Ingrese el nombre de la divisa:");

// Buscar la divisa en el arreglo
const divisaSeleccionada = divisas.find(divisa => divisa.nombre.toLowerCase() === nombreDivisa.toLowerCase());

// Mostrar la información en un alert
if (divisaSeleccionada) {
    alert(`Nombre: ${divisaSeleccionada.nombre}\nPrecio de compra: ${divisaSeleccionada.precioCompra}\nPrecio de venta: ${divisaSeleccionada.precioVenta}`);
} else {
    alert(`No se encontró la divisa "${nombreDivisa}"`);
}