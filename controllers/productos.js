// controllers/productos.js
const productos = [
    { id: 1, nombre: 'Audifonos', descripcion: 'Descripción del Producto 1', cantidad: 10, precio: 500, imagen: 'producto1.jpg' },
    { id: 2, nombre: 'Laptop', descripcion: 'Descripción del Producto 2', cantidad: 15, precio: 5150, imagen: 'producto2.jpg' },
    { id: 3, nombre: 'Gabinete', descripcion: 'Descripción del Producto 3', cantidad: 5, precio: 6050, imagen: 'producto3.jpg' },
    { id: 4, nombre: 'Setup basico', descripcion: 'Descripción del Producto 4', cantidad: 10, precio: 4100, imagen: 'producto4.jpg' },
    { id: 5, nombre: 'Control', descripcion: 'Descripción del Producto 5', cantidad: 15, precio: 550, imagen: 'producto5.jpg' },
    { id: 6, nombre: 'Silla Gamer', descripcion: 'Descripción del Producto 6', cantidad: 5, precio: 650, imagen: 'producto6.jpg' },
    { id: 7, nombre: 'Setup Pro', descripcion: 'Descripción del Producto 7', cantidad: 5, precio: 13050, imagen: 'producto7.jpg' },
    { id: 7, nombre: 'Kit visor RV', descripcion: 'Descripción del Producto 7', cantidad: 5, precio: 5050, imagen: 'producto8.jpg' },
    { id: 7, nombre: 'Kit perifericos gaming', descripcion: 'Descripción del Producto 7', cantidad: 5, precio: 3050, imagen: 'producto9.jpg' }
  ];
  
  function getProductos() {
    return productos;
  }
  
  function getProductoPorId(id) {
    return productos.find(producto => producto.id === parseInt(id));
  }
  
  module.exports = {
    getProductos,
    getProductoPorId
  };
  