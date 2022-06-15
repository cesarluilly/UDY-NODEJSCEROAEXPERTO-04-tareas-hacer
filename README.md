# UDY-NODEJSCEROAEXPERTO-04-tareas-hacer

## Video 45 Inicio de proyecto - Tareas por hacer

Ejecutamos para empezar nuevo proyecto de nodejs.
> `npm init -y`

Ejecutamos comando para los colores de la consola
> `npm install colors`

Como todas las aplicaciones de java, c#, tambien en nodejs
necesitamos poner un metodo main de nuestra aplicacion

```js
//  //Creamos una funcion principal de nuestra aplicacion.
const main = async()=> {
    console.log("Hola mundo");
};

main();
```

## Video 46 - stdin - stdout - Readline

La manera de usar stdin - stdout - readline

```js
//  //Importamos el readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//  //Realizamos una pregunta.
readline.question('Seleccione una opcion: ', (opt) => {
    // console.log({opt});
    readline.close();
})
```

## Video 47 Repetir el menu de forma infinita

Haciendo uso de Promesas y await para esperar la respuesta del
usuario para despues poner continuar.

```js
//  //mostraMenu() se convirtio en una promesa
//  //  para esperar al usuario a que teclee una 
//  //  y eso lo hacemos con 'await'
opt = await mostrarMenu();
console.log(opt);

------------------------------------------------------------
const mostrarMenu = () => {
    return new Promise( resolve => {
        console.clear();

        console.log('============================'.green);
        console.log('  Seleccione una opción'.green);
        console.log('============================\n'.green);
    
        console.log(`${'1'.green}. Crear una tarea`);
        console.log(`${'2'.green}. Listar tareas`);
        console.log(`${'3'.green}. Listar tareas completadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tarea(s)`);
        console.log(`${'6'.green}. Borrar la tarea`);
        console.log(`${'0'.green}. Salir \n`);
        
        //  //Importamos el readline
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        //  //Realizamos una pregunta.
        readline.question('Seleccione una opcion: ', (opt) => {
            // console.log({opt});
            readline.close();
            resolve(opt);
        })    
    })
};
```

> En el proximo video se utilizara un paquete que ya realiza este
tipo de validaciones justamente porque alguien ya se encontro con la
misma problematica y ya iso el paquete.

## Video 48 Nota para la siguiente clase

Inquirer
En la siguiente clase trabajaremos con el paquete inquirer, 
les dejo el enlace para que lo abran y lo lean antes de que 
lo empecemos a usar:

https://www.npmjs.com/package/inquirer

Recuerden revisar la documentación de estos paquetes, porque 
usualmente ahí nos dicen todo lo que pueden hacer.

## Video 49 Construir el menu interactivo - Inquirer

Inquier es basicamente una forma intertiva de crear aplicaciones 
de ventana de comandos

Ejecutamos el siguiente comando
> `npm install inquirer`

Como utilizar el paquete.

```js
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: ['1. Crear lista', 'opt2', 'opt3']
    }
];

const inquirerMenu = async() => {
// console.clear();

console.log('============================'.green);
console.log('  Seleccione una opción'.green);
console.log('============================\n'.green);

const opt = await inquirer.prompt(preguntas);

return opt;
}
```

## Video 50 Opciones del menu interactivo

Nueva forma de mandar preguntas a traves de una lista de atributo-valor.

```js
//  //Ejemplo
const preguntas = [
{
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer?',
    choices: [
        {
            value:'1',
            name:'1. Crear tarea'
        }
    ]
}

//  //Ejemplo de invocacion del prompt.
const { opcion } = await inquirer.prompt(preguntas);

 ```




## Video 51

## Video 52

## Video 53

## Video 54

## Video 55

## Video 56

## Video 57

## Video 58

## Video 59

## Video 60

## Video 61

## Video 62





























































