//  //Se recomienda primero importar paquetes de terceros
require('colors');

//  //Despues importamos nuestros paquetes.
const { mostrarMenu, pausa } = require('./helpers/mensajes');




//  //Limpiamos la consola.
console.clear();

//  //Creamos una funcion principal de nuestra aplicacion.
const main = async()=> {
    console.log("Hola mundo");

    mostrarMenu();

    pausa();

};

main();






