// # Ejercicios de Bucles en JavaScript

// #### For Loop

// 1. Imprimir los números del 1 al 10 usando un bucle `for`.
// 2. Sumar los números del 1 al 100 y mostrar el resultado usando un bucle `for`.
// 3. Imprimir los números pares del 1 al 20 usando un bucle `for`.
// 4. Crear un bucle `for` que pida al usuario 5 números y calcule su suma.
// 5. Imprimir los elementos de un array usando un bucle `for`.

// #### While Loop

// 6. Imprimir los números del 1 al 10 usando un bucle `while`.
// 7. Sumar los números del 1 al 50 y mostrar el resultado usando un bucle `while`.
// 8. Imprimir los números impares del 1 al 20 usando un bucle `while`.
// 9. Crear un bucle `while` que pida al usuario números hasta que introduzca un número negativo.
// 10. Contar el número de veces que el usuario introduce "hola" usando un bucle `while`.

// #### Do...While Loop

// 11. Imprimir los números del 1 al 10 usando un bucle `do...while`.
// 12. Sumar los números del 1 al 30 y mostrar el resultado usando un bucle `do...while`.
// 13. Imprimir los múltiplos de 3 del 1 al 30 usando un bucle `do...while`.
// 14. Crear un bucle `do...while` que pida al usuario números hasta que introduzca el número 0.
// 15. Contar el número de intentos hasta que el usuario adivine un número secreto usando un bucle `do...while`.

// ### Sentencias Break y Continue

// #### Break

// 16. Usar un bucle `for` para encontrar el primer número mayor a 50 en un array y salir del bucle.
// 17. Usar un bucle `while` para encontrar el primer número impar mayor a 10 y salir del bucle.
// 18. Crear un bucle `do...while` que pida números al usuario y salga cuando el usuario introduzca un número negativo.
// 19. Imprimir los números del 1 al 100, pero detenerse si el número es divisible por 37.
// 20. Usar un bucle `for` para imprimir los números del 1 al 20, pero detenerse si se encuentra el número 13.

// #### Continue

// 21. Usar un bucle `for` para imprimir los números del 1 al 20, omitiendo los múltiplos de 5.
// 22. Usar un bucle `while` para imprimir los números del 1 al 15, omitiendo los múltiplos de 3.
// 23. Crear un bucle `do...while` que pida al usuario números y omita los números pares.
// 24. Usar un bucle `for` para imprimir los números del 1 al 10, omitiendo el número 7.
// 25. Crear un bucle `while` que imprima los números del 1 al 20, omitiendo los números impares.

// ### Estructura Switch

// 26. Pedir al usuario un número del 1 al 7 e imprimir el día de la semana correspondiente.
// 27. Pedir al usuario una calificación (A, B, C, D, F) e imprimir un mensaje adecuado.
// 28. Crear un menú simple usando `switch` que permita al usuario elegir una opción entre 1 y 3 e imprimir un mensaje adecuado.
// 29. Pedir al usuario un mes (1-12) e imprimir la estación correspondiente.
// 30. Pedir al usuario que introduzca un carácter y determinar si es una vocal o una consonante.

// ### Combinando Conceptos

// 31. Pedir al usuario 5 números y calcular su suma usando un bucle `for` y `prompt`.
// 32. Crear un bucle `while` que pida al usuario una palabra y termine cuando el usuario introduzca "salir".
// 33. Crear un bucle `for` que imprima los números del 1 al 50, pero salte los múltiplos de 4 usando `continue`.
// 34. Crear un bucle `while` que pida al usuario números y termine si el número introducido es mayor a 100.
// 35. Pedir al usuario un número del 1 al 12 y usar `switch` para imprimir el nombre del mes correspondiente.

// ### Ejercicios Adicionales

// 36. Crear un bucle `for` que imprima los números del 1 al 10 en orden inverso.
// 37. Usar un bucle `while` para imprimir los números del 10 al 1.
// 38. Crear un bucle `do...while` que imprima los números del 5 al 15.
// 39. Usar un bucle `for` para imprimir los elementos de un array en orden inverso.
// 40. Crear un bucle `while` que imprima los números del 1 al 100, pero termine si el número es divisible por 25.

// ### Combinando Bucles y Switch

// 41. Crear un bucle `for` que pida al usuario un número del 1 al 5 y use `switch` para imprimir un mensaje.
// 42. Crear un bucle `while` que pida al usuario un número del 1 al 7 y use `switch` para imprimir el día de la semana.
// 43. Usar un bucle `do...while` para pedir al usuario una letra y usar `switch` para determinar si es vocal o consonante.
// 44. Crear un bucle `for` que imprima los números del 1 al 20 y use `switch` para imprimir un mensaje si el número es divisible por 4.
// 45. Crear un bucle `while` que pida al usuario una calificación (A, B, C, D, F) y use `switch` para imprimir un mensaje adecuado.

// ### Ejercicios de Aplicación

// 46. Crear un bucle `for` que imprima los números del 1 al 100, pero use `continue` para saltar los números múltiplos de 10.
// 47. Crear un bucle `while` que pida al usuario números y termine si introduce un número primo.
// 48. Crear un bucle `do...while` que pida al usuario su edad y use `switch` para imprimir un mensaje según la década.
// 49. Usar un bucle `for` para imprimir los números del 1 al 20, pero termine si el número es un cuadrado perfecto usando `break`.
// 50. Crear un bucle `while` que pida al usuario un día de la semana (1-7) y use `switch` para imprimir un mensaje, terminando si el usuario introduce un número mayor a 7.















// clase 03 (ciclos, for, do,while, swich) 

// actualizacion 
// let i=0
// console.log (i)
// i=i+1;
// console.log (i)
// i=i+1;
// console.log (i)
// i++
// console.log ("actualizado con i++"+i)

// ciclo for 
// for (desde; hasta ;actualizacion ) {
//     lo que quiero que se ejecute
// }

// let i=0;
// for (i;i<=10;i++) {
//     console.log("se esta ejecutando un for hasta el "+i)
// }

// let ingreseUnNumero=parseInt(prompt("Ingrese un numero"));
// alert("tabla de multiplicar del " + ingreseUnNumero)
// for (i=1;i<=10;i++) {
// let r = ingreseUnNumero*i;
// alert(ingreseUnNumero +"x"+i+"="+r)
// }



// for (let i=1;i<5;i++) {
//     let nombre = prompt ("Ingrese su Nombre");
//     alert("su nombre es "+ nombre);
// }

// for (let i=1;i<=25;i++) {
//     if (i==19) {
//         break;
//     }
//     console.log ("esto esta dentro del if: "+ i); 
// }

// while 

// while (condicion) {
//     console.log ("al infinito y mas alla!!!")
// }
// ejemplo:

// let valor = prompt("ingrese un numero");

// while (valor != 0) {
//     let valor=prompt("ingrese otro valor");
//     console.log ("el usuario ingreso: "+valor);
// }


// do while 

// let valor = prompt("ingrese un numero");


// do  {
//     let valor=prompt("ingrese otro valor");
//     console.log ("el usuario ingreso: "+valor);
// } while( valor != 0)


// switch (multiples condiciones sobre misma variable) 

// let ingreseNombre = prompt ("Ingrse su nombre");

// switch (ingreseNombre) {
//     case "Alejandro":
//         alert ("su nombre es Alejandro");
//         break;
//     case "Javascrip":
//     alert("no es un nombre");
//     break;
//     default:
//         alert("nos vemos en disney");
//         break;
// }


// switch + while, ejemplos: 

// let ingreseNombre = prompt ("Ingrse su nombre");

// while (ingreseNombre != "Chau") {
// switch (ingreseNombre) {
//     case "Alejandro":
//         console.log ("su nombre es Alejandro");
//         break;
//     case "Javascrip":
//         console.log("no es un nombre");
//     break;
//     default:
//         console.log("nos vemos en disney");
//         break;
// }
//  ingreseNombre = prompt ("Ingrse otro nombre");
// }




// Ejercicio-4 

// for (let i=0; i<5;i++) {
//     let Uno= parseInt(prompt ("ingrese numero"));
//     let Dos= parseInt(prompt ("ingrese numero"));
//     let Tres= parseInt(prompt ("ingrese numero"));
//     let Cuatro= parseInt(prompt ("ingrese numero"));
//     let Cinco= parseInt(prompt ("ingrese numero"));
//     suma  = Uno+Dos+Tres+Cuatro+Cinco;
//     console.log("el resultado es: "+ suma);
//     break;
// }
 

// otra forma: 

// let sum = 0;  // Inicializar la suma en 0

// for (let i = 0; i < 5; i++) {  // Bucle que se ejecuta 5 veces
//   let number = parseFloat(prompt("Introduce un número:"));  // Pedir al usuario que introduzca un número y convertirlo a un número de punto flotante
//   sum += number;  // Sumar el número introducido a la suma total
// }

// alert("La suma de los números es: " + sum);  // Mostrar la suma de los números introducidos




// ejercicio-6 

// let numero=1;
// while (numero<=10) {
//     console.log("este es mi bucle while hasta el "+numero);
//     numero++;
// }


// let valor=0;
// do  {
//     valor++;
// console.log(valor);
// } while (valor < 10) 


//ejercicio-7



// let numero = 1;
// let suma = 0;

// while (numero <= 50) {
//   suma += numero;
//   numero++;
// }

// console.log("La suma de los números del 1 al 50 es: " + suma);




//Ejercicic-8

// let numero = 1;

// while (numero <= 20) {
//   if (numero % 2 !== 0) {
//     console.log(numero);
//   }
//   numero++;
// }


// Ejercicio-9 

// let input=prompt("ingrse un numero");

// while (input<0) {
//     console.log ("el numero que ingreso el usuario es positivo");
//     let input=prompt("ingrse otro numero");
    
// }



// otro ejemplo:


//  let numero=prompt("Ingrese un numero");

// while (numero>=0) {
//     console.log("Tu numero es positivo");
//     let numero=prompt("ingrese otro numero");
//     if (numero<0) {
//         break;
//     }
// }





// Ejercicio-10

// let hola= prompt("por favor ingrese un saludo, para salir escriba 'esc'");
// let intentos=0;

// while (true) {
//         hola=prompt("ingrese un saludo");
//         if (hola.toLowerCase()=='hola') {
//             intentos++;
//         }
// if (hola.toLowerCase()== "esc") {
//     break;
// }
// }
// alert("pusiste 'Hola' "+ intentos+ " veces")


// otro ejemplo:

// let count = 0;  // Inicializar el contador en 0
// let input;     // Declarar una variable para almacenar la entrada del usuario

// while (true) {
//   input = prompt("Introduce una palabra (escribe 'salir' para terminar):");  // Pedir al usuario que introduzca una palabra
//   if (input.toLowerCase() === 'salir') {  // Si el usuario escribe 'salir', salir del bucle
//     break;
//   }
//   if (input.toLowerCase() === 'hola') {  // Si el usuario escribe 'hola', incrementar el contador
//     count++;
//   }
// }

// alert("Has escrito 'hola' " + count + " veces.");  // Mostrar el número de veces que el usuario escribió 'hola'




// Ejercicio-11 

// let numero=0;

// do {
//     numero++;
//     alert (numero);
// } while(numero<10)



// Ejercicio-12 


// let numero=1;
// let suma=0;
// do {
    //     numero++;
    //     suma+=numero;
    //     console.log(suma);
    // } while (numero<=30)  
    




    // Ejercicio-13 
    
    // let numero=0;
    // do {
    //     numero++;
    //     numero%3;
    //     if (numero%3==0){
    //         console.log(numero+" es divisible por 3");
    //     }
    //     else if (numero%3!=0) {
    //         continue;
    //     }
    // } while(numero<30)





    // Ejercicio-14 


    // let numero=prompt("ingrese un numero");
    // do {
    //     console.log("el numero ingresado es: "+ numero);
    //     numero=prompt("ingrese otro numero");
        
    // }while (numero!=0)




// Ejercicio-15 

// let numeroDeIntentos=0;
// let usuario;

// do {
//     usuario=prompt("ingrese la palabra secreta o escriba 'esc' para salir");
//     if (usuario.toLowerCase()=== 'esc') {
//         break;
//     }
//     if (usuario.toLowerCase()!== 'rojo') {
//         numeroDeIntentos++;
//         alert("lo intentaste "+ numeroDeIntentos+ " veces");
//     }
//     if (usuario== 'rojo') {
//     alert("Sos el Amor de mi Vida, poreso adivinaste");
//     break
//     }
// }while (true)

// usando el while:


// let numeroDeIntentos=0;
// let usuario;

// while(true) {
//     usuario=prompt("ingrese la palabra secreta o escriba 'esc para salir");
//     if(usuario.toLowerCase()==='rojo') {
//         alert("adivinaste, la palabra secreta es Rojo");
//         break;
//     }
//     if (usuario.toLowerCase()==='esc') {
//         break;
//     }
//     if (usuario.toLowerCase()!= 'rojo'){
//         numeroDeIntentos++;
//     }
// }

// alert("lo intentaste "+ numeroDeIntentos+ "veces");




// Ejercicio-16
 

// Ejercicio -17

// let number = 11; // Iniciamos con el primer número mayor a 10

// while (true) { // Bucle infinito
//     if (number % 2 !== 0) { // Comprobamos si el número es impar
//         console.log(`El primer número impar mayor a 10 es: ${number}`);
//         break; // Salimos del bucle
//     }
//     number++; // Incrementamos el número en 1
// }



// 18. Crear un bucle `do...while` que pida números al usuario y salga cuando el usuario introduzca un número negativo.

// let numero= parseFloat(prompt("ingrese numero"));

// do {
//     numero=parseFloat(prompt("vuelve a ingresar un numero"));
//     alert("ingresaste el "+numero+"  es un numero positivo");
    
// } while (numero<0)


// 19. Imprimir los números del 1 al 100, pero detenerse si el número es divisible por 37.

// for (i=0; i<=100; i++) {
//     if (i%37==0) {
//         break;
//     }
//     console.log(i);
// }

// 20. Usar un bucle `for` para imprimir los números del 1 al 20, pero detenerse si se encuentra el número 13.


// for (i=0; i<=20; i++) {
//     if (i==14) {
//         break;
//     }
//     console.log(i);
// }

// 21. Usar un bucle `for` para imprimir los números del 1 al 20, omitiendo los múltiplos de 5.

// for (i=0; i<=20; i++) {
//     if (i%5==0) {
//         continue;
//     }
//     console.log(i);
// }

// 22. Usar un bucle `while` para imprimir los números del 1 al 15, omitiendo los múltiplos de 3.

// let numero=0;
// while (numero < 15) {
//     numero++;
//     if (numero%3==0) {
//         continue;
//     }
//     console.log(numero);
//     }

// 23. Crear un bucle `do...while` que pida al usuario números y omita los números pares.


// let numero;

// do {
//     numero=parseFloat(prompt("ingrese nuevamente un numero"));
//     if (numero%2==0) {
//         continue;
//     }
//     console.log(numero);
// }while (true)

// 24. Usar un bucle `for` para imprimir los números del 1 al 10, omitiendo el número 7.

// for (i=0;i<=10;i++) {
//     if (i==7) {
//         continue;
//     }
//     console.log(" aca no esta el 7? "+i);
// }

// 25. Crear un bucle `while` que imprima los números del 1 al 20, omitiendo los números impares.


// let numero=0;

// while (numero<=20) {
// numero++;
// if (numero%2!=0) {
//     continue;
// }
// console.log("este numero es impar?: "+numero);
// }

// 26. Pedir al usuario un número del 1 al 7 e imprimir el día de la semana correspondiente.

// let numero= prompt("ingrese un numero del 1 al 7");

// switch( numero) {
//     case "1":
//         alert("es Lunes");
//         break;
//     case "2":
//         alert("es Martes");
//         break;
//     case "3":
//         alert("es Miercoles");
//         break;
//     case "4":
//         alert("es Jueves");
//         break;
//     case "5":
//         alert("es Viernes");
//         break;
//     case "6":
//         alert("es Sabado");
//         break;
//     case "7":
//         alert("es Domingo");
//         break;                                
// } 




// 27. Pedir al usuario una calificación (A, B, C, D, F) e imprimir un mensaje adecuado.

// let numero= prompt("ingrese una calificacion (A,B,C,D,F)").toUpperCase();

// switch( numero) {
//     case "A" :
//         alert("tu calificacion fue A");
//         break;
//     case "B":
//         alert("tu calificacion fue B");
//         break;
//     case "C":
//         alert("tu calificacion fue C");
//         break;
//     case "D":
//         alert("tu calificacion fue D");
//         break;
//     case "F":
//         alert("tu calificacion fue F");
//         break;
// }


// 28. Crear un menú simple usando `switch` que permita al usuario elegir una opción entre 1 y 3 e imprimir un mensaje adecuado.

// let menu= prompt("ingrese una opcion del menu:  1. Quiero comer fideos //  2.Quiero comer Milanesa //  3. Quiero comer Tarta de jyq");

// switch (menu) {
//     case "1":
//         alert("Elegiste estupendamente bien, gracias por hacerte los fideos vos mismo");
//         break;
//     case "2":
//         alert("Cagaste, no compre Milanesa");
//         break;
//     case "3":
//         alert("en 20 minutos la tarta estara lista!");
//         break;
// }


// 29. Pedir al usuario un mes (1-12) e imprimir la estación correspondiente.


// let estacion= prompt("ingrese un mes utilizando su numero: ejemplo=> Enero=1//Febrero=>2, etc:");

// switch (estacion) {
//     case "1":
//     alert("En el mes de Enero nos encontramos en la estacion del Verano");
//     break;
//     case "2":
//     alert("En el mes de Febrero nos encontramos en la estacion del Verano");
//     break;
//     case "3":
//     alert("En el mes de Marzo nos encontramos en la estacion del Verano hasta el dia 21 que cambia a Otoño");
//     break;
//     case"4":
//     alert("En el mes de Abril nos encontramos en la estacion del Otoño");
//     break;
//     case "5":
//     alert("En el mes de Mayo nos encontramos en la estacion del Otoño");
//     break;
//     case "6":
//     alert("En el mes de Junio nos encontramos en la estacion del Otoño hasta el 21 que cambia a la estacion de Invierno");
//     break;
//     case "7":
//     alert("En el mes de Julio nos encontramos en la estacion del Invierno");
//     break;
//     case "8":
//     alert("En el mes de Agosto nos encontramos en la estacion del Invierno");
//     break;
//     case "9":
//     alert("En el mes de Septiembre nos encontramos en la estacion del Invierno hasta el 21 que cambia a la estacion de la Primavera");
//     break;
//     case "10":
//     alert("En el mes de Octubre nos encontramos en la estacion del Primavera");
//     break;
//     case "11":
//     alert("En el mes de Noviembre nos encontramos en la estacion del Primavera");
//     case "12":
//     break;
//     alert("En el mes de Diciembre nos encontramos en la estacion del Primavera hasta el 21 que cambiamos ala estacion del Verano");
//     break;
// }

// 30. Pedir al usuario que introduzca un carácter y determinar si es una vocal o una consonante.

// let letra= prompt("ingrese una letra del abecedario").toUpperCase();

// while (letra) {
//     if (letra=="A"|| letra== "E" || letra=="I" || letra== "O" || letra=="U") {

//         alert("La letra que ingresaste es una vocal");
//         break;
//     }
//     if (letra!="A" || letra!= "E" || letra!="I" || letra!= "O" || letra!="U"){
//         alert("la letra que ingresaste es una consonante");
//         break;
//     }
// }


// 31. Pedir al usuario 5 números y calcular su suma usando un bucle `for` y `prompt`.

// let suma=0;

// for (i=0; i<5;i++) {
//     let numero=parseFloat(prompt("ingrese un numero:"));
//     if (!isNaN(numero)) {
//         suma+=numero;
//     }
//     else {
//         alert("ingrese un numero valido");
//         i--;
//     }
// }
// alert("la suma de los 5 numeros ingresados es: "+ suma);


// 32. Crear un bucle `while` que pida al usuario una palabra y termine cuando el usuario introduzca "salir".

// let palabra;
// while (true) {
//     palabra=prompt("ingrese la palabra secreta").toLowerCase();

//     if (palabra == "salir") {
//         alert("descubriste la palabra secreta");
//         break;
//     }else {
//         alert("sigue intentando");
//     }
    
// }

// 33. Crear un bucle `for` que imprima los números del 1 al 50, pero salte los múltiplos de 4 usando `continue`.

// for (i=0;i<=50;i++) {
//     if (i%4==0) {
//         continue;
//     }
//     console.log("este numero no es multiplo de 4: "+i);
// }


// 34. Crear un bucle `while` que pida al usuario números y termine si el número introducido es mayor a 100.

// let numero;
// while (true) {
//     numero=parseFloat(prompt("ingrese un numero"));
//     if (numero>100) {
//         alert("el numero ingresado es mayor a 100");
//         break;
//     }
    
// }


// 35. Pedir al usuario un número del 1 al 12 y usar `switch` para imprimir el nombre del mes correspondiente.


// let estacion= prompt("ingrese un mes utilizando su numero: ejemplo=> Enero=1//Febrero=>2, etc:");

// switch (estacion) {
//     case "1":
//     alert("Es el mes de Enero ");
//     break;
//     case "2":
//     alert("Es el mes de Febrero ");
//     break;
//     case "3":
//     alert("Es el mes de Marzo ");
//     break;
//     case"4":
//     alert("Es el mes de Abril ");
//     break;
//     case "5":
//     alert("Es el mes de Mayo ");
//     break;
//     case "6":
//     alert("Es el mes de Junio  ");
//     break;
//     case "7":
//     alert("Es el mes de Julio ");
//     break;
//     case "8":
//     alert("Es el mes de Agosto ");
//     break;
//     case "9":
//     alert("Es el mes de Septiembre ");
//     break;
//     case "10":
//     alert("Es el mes de Octubre ");
//     break;
//     case "11":
//     alert("Es el mes de Noviembrere");
//     case "12":
//     break;
//     alert("En el mes de Diciembre ");
//     break;
// }

// 36. Crear un bucle `for` que imprima los números del 1 al 10 en orden inverso.

// for (i=10;i>0;i--) {
//     alert(i);
// }


// 38. Crear un bucle `do...while` que imprima los números del 5 al 15.

// let numero=0;
// do {
//     numero++;
//     alert(numero);
// }while(numero<15)

// 40. Crear un bucle `while` que imprima los números del 1 al 100, pero termine si el número es divisible por 25.

// let numero=0;

// while (true) {
//     numero++;
//     if (numero%25==0) {
//         break;
//     }
//     console.log(numero);
// }

// 41. Crear un bucle `for` que pida al usuario un número del 1 al 5 y use `switch` para imprimir un mensaje.


// let numero;

// for (i=0;i<=5;i++) {
//     numero=parseFloat(prompt("ingrese un numero del 1 al 5"))
//     switch (numero){
//     case 1:
//         alert("Hola como estas?");
//         break;
//     case 2:
//         alert("sabes ingles?");
//         break;
//     case 3:
//         alert("Hoy estas enojado?");
//         break;
//     case 4:
//         alert("sos de Argentina?");
//         break;
//     case 5:
//         alert("sabes hablar frances;?");
//         break;
//     }
// }


// 42. Crear un bucle `while` que pida al usuario un número del 1 al 7 y use `switch` para imprimir el día de la semana.

// let numero;

// while (true) {
//     numero=parseFloat(prompt("ingrese un numero del 1 al 7"))
//     switch (numero){
//     case 1:
//         alert("Holy es Lunes");
//         break;
//     case 2:
//         alert("Hoy es Martes");
//         break;
//     case 3:
//         alert("Hoy es Miercoles");
//         break;
//     case 4:
//         alert("Hoy es Jueves");
//         break;
//     case 5:
//         alert("Hoy es Viernes");
//         break; frances;
//     case 6:
//         alert("Hoy es Sabado");
//         break;
//     case 7:
//         alert("Hoy es Domingo");
//         break;
//     }
// }

