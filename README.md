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





























































