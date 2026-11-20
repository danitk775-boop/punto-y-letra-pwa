const inventarioBase = [
    { codigo: 'PL-001', nombre: 'Cuaderno A4 cuadriculado', categoria: 'Útiles', stock: 48, minimo: 20, precio: 8.50, estado: 'Disponible' },
    { codigo: 'PL-002', nombre: 'Cuaderno A4 rayado', categoria: 'Útiles', stock: 34, minimo: 15, precio: 6.50, estado: 'Disponible' },
    { codigo: 'PL-003', nombre: 'Colores Faber-Castell x24', categoria: 'Arte', stock: 12, minimo: 10, precio: 15.50, estado: 'Disponible' },
    { codigo: 'PL-004', nombre: 'Lapicero 035 (azul)', categoria: 'Útiles', stock: 100, minimo: 40, precio: 1.20, estado: 'Disponible' },
    { codigo: 'PL-006', nombre: 'Papel bond A4 75 g', categoria: 'Oficina', stock: 9, minimo: 8, precio: 27.00, estado: 'Disponible' },
    { codigo: 'PL-009', nombre: 'Plastilina x12', categoria: 'Arte', stock: 5, minimo: 10, precio: 5.00, estado: 'Reponer' },
    { codigo: 'PL-013', nombre: 'Mochila escolar', categoria: 'Accesorios', stock: 7, minimo: 5, precio: 45.00, estado: 'Bajo ROP' }
];

const pronosticoBase = [
    { nombre: 'Mochila escolar', demanda: 17, stock: 7, rop: 9.0, compra: 10, estado: 'Reponer' },
    { nombre: 'Colores Faber-Castell x24', demanda: 14, stock: 12, rop: 11.5, compra: 2, estado: 'Bajo ROP' }
];

let inventario = [];
let pronosticos = [];

function inicializarDatos() {
    inventario = JSON.parse(JSON.stringify(inventarioBase));
    pronosticos = JSON.parse(JSON.stringify(pronosticoBase));
}