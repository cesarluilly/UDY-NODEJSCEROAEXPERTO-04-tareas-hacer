//  //Se recomienda primero importar paquetes de terceros
require('colors');

const { inquirerMenu } = require('./helpers/inquirer')




//  //Limpiamos la consola.
console.clear();

//  //Creamos una funcion principal de nuestra aplicacion.
const main = async()=> {
    console.log("Hola mundo");

    let opt = ''
    do {
        opt = await inquirerMenu();
        console.log(opt);
        
           
        
    } while (opt !== '0');


};

main();






