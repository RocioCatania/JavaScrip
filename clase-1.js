// # Ejercicios de JavaScript nivel Inicial

// #### 1. Consola (Console.log, console.error, etc):

// 1. Imprime "Hola, mundo" en la consola.
// 2. Imprime tu nombre en la consola.
// 3. Muestra un mensaje de error en la consola.
// 4. Imprime el resultado de 5 + 3 en la consola.
// 5. Imprime el resultado de 10 - 7 en la consola.
// 6. Declara una variable `nombre` con tu nombre y muéstralo en la consola.
// 7. Declara una variable `edad` con tu edad y muéstralo en la consola.
// 8. Imprime el resultado de 8 * 5 en la consola.
// 9. Imprime el resultado de 20 / 4 en la consola.
// 10. Declara dos variables `a` y `b` con valores numéricos y muestra su suma en la consola.
// 11. Imprime el resultado de la concatenación de dos cadenas de texto.

// #### 2. Prompt:

// 12. Pide al usuario que ingrese su nombre y muestra su nombre en la consola.
// 13. Solicita al usuario que ingrese su edad y luego muestra un mensaje en la consola con esa edad.
// 14. Pide al usuario que ingrese dos números y muestra la suma de estos números en la consola.
// 15. Solicita al usuario que ingrese su color favorito y muestra un mensaje con ese color en la consola.
// 16. Pide al usuario que ingrese una frase y muestra esa frase en la consola.
// 17. Pregunta al usuario su ciudad de nacimiento y muestra un mensaje con esa ciudad en la consola.
// 18. Solicita al usuario que ingrese su película favorita y muestra un mensaje con esa película en la consola.
// 19. Pide al usuario que ingrese el nombre de su mascota y muestra un mensaje con ese nombre en la consola.
// 20. Solicita al usuario que ingrese su deporte favorito y muestra un mensaje con ese deporte en la consola.
// 21. Pide al usuario que ingrese su canción favorita y muestra un mensaje con esa canción en la consola.

// #### 3. Alert:

// 22. Muestra un mensaje de bienvenida usando `alert`.
// 23. Pregunta al usuario su comida favorita y luego muestra un mensaje de alerta con esa comida.
// 24. Muestra un mensaje de alerta que diga "¡Buenos días!".
// 25. Muestra un mensaje de alerta que diga "¡Buenas tardes!".
// 26. Muestra un mensaje de alerta que diga "¡Buenas noches!".
// 27. Pregunta al usuario su animal favorito y muestra un mensaje de alerta con ese animal.
// 28. Muestra un mensaje de alerta que diga "¡Feliz cumpleaños!".
// 29. Pregunta al usuario su bebida favorita y muestra un mensaje de alerta con esa bebida.
// 30. Muestra un mensaje de alerta que diga "¡Feliz año nuevo!".
// 31. Pregunta al usuario su estación del año favorita y muestra un mensaje de alerta con esa estación.

// #### 4. Combinación de Consola, Prompt y Alert

// 32. Pide al usuario que ingrese su nombre y su edad utilizando un `prompt`.
// 33. Saluda al usuario utilizando un mensaje de alerta que contenga su nombre y su edad.
// 34. Calcula el año de nacimiento del usuario utilizando su edad ingresada y muestra este año en la consola.
// 35. Muestra un mensaje de alerta que indique si el usuario es menor de edad o mayor de edad, dependiendo de su edad ingresada.
// 36. Pide al usuario que ingrese dos números utilizando `prompt` y muestra la suma de estos números en una alerta.
// 37. Pide al usuario que ingrese su nombre utilizando `prompt` y luego muestra un mensaje en la consola que diga "Hola, [nombre]".
// 38. Pide al usuario que ingrese su año de nacimiento y muestra su edad en la consola.
// 39. Pide al usuario que ingrese su mes de nacimiento y muestra su signo zodiacal en la consola.
// 40. Solicita al usuario que ingrese un número y muestra un mensaje de alerta indicando si el número es par o impar.
// 41. Pide al usuario que ingrese su color favorito y muestra un mensaje en la consola que diga "Tu color favorito es [color]".
// 42. Pide al usuario que ingrese su país de residencia y muestra un mensaje de alerta que diga "Vives en [país]".
// 43. Pide al usuario que ingrese su código postal y muestra un mensaje en la consola con ese código postal.
// 44. Solicita al usuario que ingrese el nombre de su libro favorito y muestra un mensaje de alerta con ese nombre.
// 45. Pide al usuario que ingrese su programa de televisión favorito y muestra un mensaje en la consola con ese programa.
// 46. Solicita al usuario que ingrese su superhéroe favorito y muestra un mensaje de alerta con ese superhéroe.
// 47. Pide al usuario que ingrese el nombre de su mejor amigo y muestra un mensaje en la consola con ese nombre.
// 48. Solicita al usuario que ingrese su número de la suerte y muestra un mensaje de alerta con ese número.
// 49. Pide al usuario que ingrese su día de la semana favorito y muestra un mensaje en la consola con ese día.
// 50. Solicita al usuario que ingrese su estación del año favorita y muestra un mensaje de alerta con esa estación.






// CLASE-01 

// // variable: declaracion de variable, reservo un espacio en la memori

// // var nombre= "Alejandro";

// // var nombre= "Javascrip";

// // console.log (nombre);
// // console.log (nombre);
// // console.log [nombre, nombre, nombre];


// // empezamos a usar let para declarar variables, lo que hace es analizar si ya existe una variable con ese nombre, y te va a tirar un error. 


// let nombre= "enano";
// console.log (nombre);



// // vamos a declarar un string: de seclara con comillas , puedo usar guiones y numeros

// let miPrimerString = "pongo lo que yo quiera";
// console.log(miPrimerString);

// // hago una declaracion de variables

// let nombreDeLaVariable;

// // hago la asignacion y se pueden reasignar

// nombreDeLaVariable ="lo que yo quiero";

// // declaamos nuestro primer numero (variable primitiva del tipo constante )
// // CONSTANTE ES QUE NUNCA SE LE CAMBIA EL VALOR , NO SEPUEDEN REASIGNAR, van en  MAYUSCULA

// const NUMERO= 2;
// const LETRA= 'A';
// const ESPACIO = " ";
// const PI = 3.14;
// console.log (PI);


// // constantes no primitivas

// const stringConstante = "este string no se puede reasignar";

// console.log (stringConstante);


// // operaciones con variables
// // CONCATENACION

// let variablesConcatenadas = miPrimerString + nombreDeLaVariable + ESPACIO +PI;

// console.log (variablesConcatenadas);

// // cuando concateno dentro de una funcion 

// console.log (miPrimerString,nombreDeLaVariable,ESPACIO,PI);

// // OPERACIONES MATEMATICAS

// const CUATRO = 4;
// const CINCO = 5;
// const DIEZ = 10;

// // SUMA 

// let resultado= CUATRO+CINCO;
// console.log (resultado);

// // RESTA 

// resultado= DIEZ - CUATRO;
// console.log (resultado);

// // MULTIPLICACION 

// resultado =DIEZ * CUATRO;
// console.log (resultado);

// // DIVISION 

// resultado =DIEZ / CINCO ;
// console.log (resultado);

// // prompt y alert

// // const textoPrevioAlPrompt ="Ingerese su nombre";

// const textoPrevio = "el nombre ingresado es:";
// let nombreCompleto = prompt ("ingrese su nombre");
// console.log (textoPrevio+nombreCompleto);

// // el alert no admite COMA para concatenar

// // alert (textoPrevio + ESPACIO + nombreCompleto);

// // ejercicio 


// CONVERTIR UNA VARIABLE A NUMERO {
    // Solicitar al usuario que ingrese dos números
//     let num1 = prompt("Ingrese el primer número:");
//     let num2 = prompt("Ingrese el segundo número:");
    
//     // Convertir las entradas a números
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
    
//     // Calcular la suma
//     let suma = num1 + num2;
    
//     // Mostrar la suma en la consola
//     console.log("La suma de los números es: " + suma);
// // } 


// let numero = prompt ("decime un numero");

// if ((numero!= " ")&&(numero % 2 == 0 )) {
//     alert ("es par");
// }
// else  {
//     alert ("es impar")
// }