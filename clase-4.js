
// # Ejercicios Básicos de JavaScript con Funciones

// ## Variables Locales y Globales

// 1. Declara una variable global llamada `mensaje` y asígnale un mensaje.
// 2. Crea una función llamada `saludar` que imprima en la consola el valor de la variable `mensaje`.
// 3. Llama a la función `saludar` para que imprima el mensaje.

// ## Funciones

// 4. Crea una función llamada `sumar` que tome dos números como parámetros y devuelva la suma de ellos.
// 5. Llama a la función `sumar` con dos números como argumentos e imprime el resultado en la consola.

// ## Funciones con Parámetros

// 6. Crea una función llamada `multiplicar` que tome tres números como parámetros y devuelva el resultado de multiplicarlos.
// 7. Llama a la función `multiplicar` con tres números como argumentos e imprime el resultado en la consola.

// ## Funciones Anónimas

// 8. Declara una variable llamada `cuadrado` y asígnale una función anónima que tome un número como parámetro y devuelva el cuadrado de ese número.
// 9. Utiliza la función anónima almacenada en la variable `cuadrado` para calcular el cuadrado de un número e imprime el resultado en la consola.

// ## Funciones Flecha

// 10. Declara una variable llamada `esPar` y asígnale una función flecha que tome un número como parámetro y devuelva `true` si es par y `false` si es impar.
// 11. Utiliza la función flecha almacenada en la variable `esPar` para determinar si un número ingresado por el usuario es par o impar e imprime el resultado en la consola.

// ## Variables Locales y Globales

// 12. Dentro de una función, declara una variable local llamada `contador` y asígnale un valor.
// 13. Intenta acceder a la variable `contador` desde fuera de la función y observa el resultado.

// ## Funciones

// 14. Crea una función llamada `saludarNombre` que tome un nombre como parámetro y devuelva un mensaje de saludo con ese nombre.
// 15. Llama a la función `saludarNombre` con tu nombre como argumento e imprime el mensaje en la consola.

// ## Funciones con Parámetros

// 16. Crea una función llamada `calcularAreaRectangulo` que tome dos parámetros (base y altura) y devuelva el área del rectángulo.
// 17. Llama a la función `calcularAreaRectangulo` con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.

// ## Funciones Anónimas

// 18. Crea una función anónima que tome dos números como parámetros y devuelva el mayor de los dos.
// 19. Utiliza la función anónima creada para determinar el número más grande de dos números ingresados por el usuario e imprime el resultado en la consola.

// ## Funciones Flecha

// 20. Declara una variable llamada `doble` y asígnale una función flecha que tome un número como parámetro y devuelva el doble de ese número.
// 21. Llama a la función flecha almacenada en la variable `doble` para calcular el doble de un número e imprime el resultado en la consola.

// # Ejercicios Básicos de JavaScript para Cálculos Geométricos

// ## Cálculo del Área de un Triángulo

// 22. Crea una función llamada `areaTriangulo` que tome la base y la altura de un triángulo como parámetros y devuelva el área del triángulo.
// 23. Llama a la función `areaTriangulo` con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.

// ## Cálculo del Perímetro de un Cuadrado

// 24. Crea una función llamada `perimetroCuadrado` que tome el lado de un cuadrado como parámetro y devuelva el perímetro del cuadrado.
// 25. Llama a la función `perimetroCuadrado` con el valor del lado proporcionado por el usuario e imprime el resultado en la consola.

// ## Cálculo del Área de un Círculo

// 26. Crea una función llamada `areaCirculo` que tome el radio de un círculo como parámetro y devuelva el área del círculo.
// 27. Llama a la función `areaCirculo` con el valor del radio proporcionado por el usuario e imprime el resultado en la consola.

// ## Cálculo del Perímetro de un Rectángulo

// 28. Crea una función llamada `perimetroRectangulo` que tome la longitud y la anchura de un rectángulo como parámetros y devuelva el perímetro del rectángulo.
// 29. Llama a la función `perimetroRectangulo` con valores de longitud y anchura proporcionados por el usuario e imprime el resultado en la consola.

// ## Cálculo del Área de un Trapecio

// 30. Crea una función llamada `areaTrapecio` que tome las bases y la altura de un trapecio como parámetros y devuelva el área del trapecio.
// 31. Llama a la función `areaTrapecio` con valores de las bases y la altura proporcionados por el usuario e imprime el resultado en la consola.









// como se declara una funcion y cual es su estructura 

// function nombreDeLaFuncion () {
//     ¿q va a hacer? lo q yo le diga q haga!!!
// }

// console.log ("Mostrame un mensaje");
// console.log ("Mostrame un mensaje");
// console.log ("Mostrame un mensaje");
// console.log ("Mostrame un mensaje");
// console.log ("Mostrame un mensaje");  

// para simploficar lo AuthenticatorAssertionResponse, creamos una funcion:



// la creo:


// function enviarMensaje () {
//     console.log("Mostrarme mensaje");
// }

// la llamo:(todas las veces que quiero)

// enviarMensaje();
// enviarMensaje();
// enviarMensaje();
// enviarMensaje();
// enviarMensaje();
// enviarMensaje();


// creo la funcion:

// function ingresarNombre() {
    
//     let ingreseSuNombre=prompt("Ingrese su nombre");
//     console.log("El nombre ingresado es: "+ingreseSuNombre);
// }


// for(let i=0;i<5;i++) {
//     ingresarNombre()
// }



// Parametro: es un argumento o elemento que debo asignarle 

// ejemplo de funcion con parametro: 

// function enviarMensajeConParametros (mensaje) {
//     console.log(mensaje);
// }


// enviarMensajeConParametros("Hola Como Estas?");
// enviarMensajeConParametros("mensaje distinto");
// enviarMensajeConParametros("esto es de prueba");

// otro ejemplo con mas de un parametro: 

// function enviarMensajeConParametros (mensaje1,mensaje2) {
//     console.log("este es el mensaje1: "+mensaje1);
//     console.log("este es el mensaje2: "+mensaje2);
// }

// enviarMensajeConParametros ("hola", "chau");
// enviarMensajeConParametros ("chau","hola");



// let resultado=0;
// function sumar( numero1,numero2) {
//     resultado= numero1+numero2;
// }

// function mostrarResultado (mensaje){
//     console.log(mensaje);
// }

// sumar(30,40);
// mostrarResultado("el resultado es: "+resultado);


// return: medevuelve algo cuando llamo a la funcion y defino los parametros


// function sumarConReturn (numero1,numero2) {
//     return numero1+numero2;
// }
// console.log("el resultado de la suma es: "+sumarConReturn(4,5));


// function calculadora (numero1,operacion,numero2) {
//     switch (operacion) {
//         case "+":
//             return numero1+numero2;
//             break;
//         case "-":
//             return numero1-numero2;
//             break;
//         case "*":
//             return numero1*numero2;
//             break;
//         case "/":
//             if (numero2!=0) {
//                 return numero1/numero2;
//             }else {
//                 return console.log ("no se puede dividir por Cero");
//             }
//             break;
//         default:
//             return 0;
//             break;
//     }
// }

// function usarCalculadora () {
//     let numero1=parseFloat(prompt("ingrese un numero"));
//     let operacion=prompt("ingrese una operacion");
//     let numero2=parseFloat(prompt("ingrese otro numero"));
//     return console.log (calculadora(numero1,operacion,numero2));
// }

// usarCalculadora();

// scope o alcance de una variable (global o local=> dentro del bloque) 



// function llamarVariabe () {
//     let variable= 10; //variable local
// console.log ("variable");
// }

// llamarVariable();
// //si la llamo por fuera del bloquee , me dice que no esesta definida

// console.log (variable);


// funciones  anonimas
// la anonima se define sin nombre 

// ejemplo: 

// const suma= function (a,b) {return a+b}

// console.log(suma(4,5));


// funciones Flecha , puedo definirla mas sencillo y quitandole el return, tambien omito los {} 

// const suma= (a,b)=> a+b;
// console.log(suma(10,20));


// ejercicio: calcular precio + iva

// const iva=x=>x*0.21;
// let precio=100;
// console.log(iva(precio));
// function calcularPrecioConIva (precio){
//     let precio=parseFloat(prompt("ingrese precio"));
//     return precio*0.21;
// }