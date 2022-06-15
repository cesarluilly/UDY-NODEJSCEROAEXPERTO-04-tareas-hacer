//  //Se recomienda primero importar paquetes de terceros
require('colors');

//  //Despues importamos nuestros paquetes.
const { mostrarMenu, pausa } = require('./helpers/mensajes');




//  //Limpiamos la consola.
console.clear();

//  //Creamos una funcion principal de nuestra aplicacion.
const main = async()=> {
    console.log("Hola mundo");

    let opt = ''
    do {
        //  //mostraMenu() se convirtio en una promesa
        //  //  para esperar al usuario a que teclee una 
        //  //  y eso lo hacemos con 'await'
        opt = await mostrarMenu();
        console.log(opt);
        
        //  //hacemos una pausa y esperamos a que el usuario
        //  //presione otra tecla.
        if ( opt !== '0' ) await pausa();        
        
    } while (opt !== '0');

    pausa();

};

main();






