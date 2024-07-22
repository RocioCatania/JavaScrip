
// # Ejercicios Básicos de JavaScript

// ## Variables y Constantes

// 1. Declara una variable llamada `nombre` y asígnale tu nombre.
// 2. Declara una constante llamada `PI` y asígnale el valor de π (pi).

// ## Booleanos

// 3. Declara una variable llamada `esMayorDeEdad` y asígnale `true` si tienes más de 18 años, o `false` si tienes 18 años o menos.

// ## Prompt, Alert y Console.log

// 4. Pide al usuario que ingrese su edad utilizando `prompt` y almacena el valor en una variable llamada `edadUsuario`.
// 5. Muestra un mensaje de alerta que diga "¡Hola!".
// 6. Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".

// ## Control de Flujo con if y if else

// 7. Utilizando un `if`, verifica si un número ingresado por el usuario es positivo, negativo o cero, e imprime un mensaje correspondiente.
// 8. Utilizando un `if else`, verifica si un número ingresado por el usuario es par o impar, e imprime un mensaje correspondiente.
// 9. Utilizando un `if else`, verifica si un número ingresado por el usuario es mayor que 100, menor que 100 o igual a 100, e imprime un mensaje correspondiente.

// ## Operadores Lógicos

// 10. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
// 11. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
// 12. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.

// ## Ejercicios Adicionales

// 13. Pide al usuario que ingrese un número utilizando `prompt`, luego verifica si es un número primo e imprime un mensaje correspondiente.
// 14. Crea una variable llamada `hora` y asígnale un valor numérico que represente una hora del día. Luego, utilizando un `if else`, imprime un mensaje que indique si es mañana, tarde o noche.
// 15. Pide al usuario que ingrese dos números utilizando `prompt`, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.
// 16. Crea una variable llamada `nombreUsuario` y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.
// 17. Utilizando un `if else`, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.
// 18. Pide al usuario que ingrese su nombre utilizando `prompt`, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.
// 19. Declara una variable llamada `temperatura` y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un `if`, imprime un mensaje que indique si hace frío, templado o caliente.
// 20. Pide al usuario que ingrese tres números utilizando `prompt`, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.






// CLASE 02 (CONDICIONAL IF ,VALORES BOOLEANOS)


// if (true) {
//     alert("esto es verdadero");
// }
// if (false) {
//     alert ("no se ve nada");
// }


// // los booleanos tambien pueden ser primitivos 
// const V= true;
// const F= fals;

// if (V) {
//     alert("condicion cumplida");
// }

// dentro de los ( )debemos poner una consicion,
// por ejemplo:

// const EDAD= 18;
// const edadIngresada = prompt("Ingrese su Edad: ");
// if (edadIngresada >= EDAD) {
//     alert("puede ingresar")
// } else {
//     alert("es menor a "+ EDAD+ " NO PODES PASAR")
// }


// COMPARACONES 

// const PI=3.14;
// const ingreseUnValor = prompt("Ingrese un Valor: "); 
// if (ingreseUnValor<=0) {
//     alert ("el numero ingresado no existe")
// } else if (ingreseUnValor<PI) {
//     alert("el numero ingresado es menor a PI")
// } else if (ingreseUnValor==PI) {
//     alert("el numero es igual a PI")
// }else if (ingreseUnValor >PI) {
//     alert("el numero es mayor a PI")
// }else {
//     alert("el dato ingresado no es un numero")
// }

// ejemplo con String 

// let color = "Azul";
// let ingreseUnColor= prompt ("Ingrese un Color: ");
// if (ingreseUnColor == color) {
//     alert("el color es azul")
// }else {
//     alert("el color ingresado no es Azul")
// }

// const N= 1;
// const VACIO="";

// const valorIngresado =prompt ("Ingrese un Valor");
//     if (valorIngresado == VACIO) {
//         alert("Ud no ingreso ningun valor")
//     }else if (valorIngresado<0 ||valorIngresado ==0 ) {
//         alert("No se puede ingresar un valor negativo o igual a cero")
//     }else if (valorIngresado > 0 && valorIngresado < 1) {
//         alert("Usted ingreso un numero entre cero y uno")
//     } else if (valorIngresado == 1) {
//         alert ("Usted ingreso el 1")
//     }else if (valorIngresado>1 && (valorIngresado < 50 || valorIngresado == 50)) {
//         alert ("el numero ingresado esta entre 1 y 50")
//     }

// ejercicios en clase 

// if (prompt ("ingrese un texto")== "Hola") {
//     alert("Ud puso Hola")
// }else {
//     alert ("No puso la palabra magica")
// }

// const valor =prompt ("Ingrese un numero");

// if ((valor>10 || valor == 10) && (valor < 50 || valor == 50)) {
//     alert("aprobo")
// }
// ejercicios clase-02 
// let nombre = "Rocio Catania";
// let PI=3.14;
// let esMayorDeEdad= prompt ("ingrese su edad");
// let edad= 18;

// if (esMayorDeEdad >= edad) {
//     alert("true")
// }else if (esMayorDeEdad < edad) {
//     alert ("false")
// }
// let numero=prompt("ingrese un numero");

// if (numero<0) {
//     alert("el numero ingresado es negativo")
// }else if (numero==0) {
//     alert("el numero ingresado es Cero")
// } else if (numero>0) {
//     alert("el numero ingresado es positivo")
// }

// let numero=prompt("ingrese un numero");

// if (numero<100) {
//     alert("el numero ingresado es menor a cien")
// }else if (numero==100) {
//     alert("el numero ingresado es Cien")
// } else if (numero>100) {
//     alert("el numero ingresado es mayor a cien")
// }

// let numero=prompt ("ingrese un numero");

// if (numero != "" && numero % 2 == 0 && numero % 3 == 0) {
//     alert("el numero ingresado es divisible tanto por dos como tres")
// }else if (numero % 2 == 0) {
//     alert("el numero ingresado es divisible por dos")
// }else if (numero % 3 == 0) {
//     alert("el numero ingresado es divisible por tres")
// }  else  {
//     alert("el dato ingresado no es un numero")
// }
// // }else  (numero == " ") {
// //     alert("ud no ingreso ningun numero")
// // // }
//  let numero = prompt("ingrese un numero");

//  if (numero>10 || numero< -10) {
//     alert("ud ingreso un numero mayor que diez o menor que menos diez")
//  }

// let hora = 10;
// if (hora>0 && hora<12) {
//     alert("estas en las horas de la mañana")
// }else if (hora >=12 && hora <20) {
//     alert("estas en las horas de la tarde")
// }else if (hora >= 20 && hora <24) {
//     alert("estas en la noche")
// }else {
//     alert ("los datos ingresados no corresponden a ninguna hora del dia")
// }

// let numeroUno = prompt("ingrese un numero");
// let numeroDos = prompt ("ingrese otro numero");

// if (numeroUno % numeroDos == 0) {
//     alert("el prmer numero es divisible por el segundo numero ingresado")
// }

// let nombreUsuario = "pepito";
// if (nombreUsuario.length >= 6) {
//     alert("el nombre de usuario ingresado tiene mas de 6 caracteres")
// }else {
//     alert("el nombre de usuario ingresado tiene menos de seis caracteres")
// }

// let año =prompt ("ingrese un año en 4 digitos, ejemplo: 2020");

// if (año % 4 == 0) {
//     alert ("es año bisisesto")
// }else {
//     alert("no es año bisiesto")
// }

// let temperatura = prompt("ingrese una temperatura");

// if (temperatura < 20 && temperatura >7) {
//     alert("esta templado")
// }else if (temperatura >= 20) {
//     alert("esta caluroso")
// }else if (temperatura <=7) {
//     alert("hace frio!")
// }

// let primerNumero= prompt ("ingrese primer numero");
// let segundoNumero= prompt ("ingrese segundo numero");
// let tercerNumero= prompt ("ingrese tercer numero");
// let resultado = parseInt(primerNumero ) + parseInt(segundoNumero);
// if (resultado == tercerNumero) {
//     alert ("la suma del primero y el segundo es igual al tercer numero ingresado")
// }else {
//     alert("la suma de los dos primeros numeros no es igual al tercer numeo ingresado")
// }

// let nombre= prompt("ingrese su nombre completo");

// for (let i=1;i<=20;i++) {
//     let otroNombre= prompt("ingrese su nombre");
//     alert( "turno nro" +i+ "nombre: " + otroNombre );
// }