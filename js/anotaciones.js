toLowerCase //se utiliza para contar "x" cantidad de veces ingresado algo....ej:



let veces=0;
let numero;
while (true) {
    numero=prompt("ingrese numero, si desea salir escriba 'esc'");
    if (numero.toLowerCase()=== 'esc') {
        break;
    }
    if (numero.toLowerCase()== 5) {
        veces++;
    }
}
alert("pusiste " + veces + "el numero 5");



length//se utiliza para contar caracteres


let nombreUsuario = "Alejandro";  // Asignar un nombre a la variable nombreUsuario

if (nombreUsuario.length > 6) {  // Verificar si el nombre tiene más de 6 caracteres
  console.log("El nombre tiene más de 6 caracteres.");  // Imprimir mensaje si la condición es verdadera
} else {
  console.log("El nombre tiene 6 o menos caracteres.");  // Imprimir mensaje si la condición es falsa
}



chatAt //busca un caracterer en especifico , si no se le asigna entre (), entonces toma todos. en este ejemplo, conbierte el primer caracter "0" en mayuscula
toLowerCase / toUpperCase //convierte en MAYUSCULA (toUpperCase) y en minuscula (toLowerCase)



let nombreIngresado = prompt("Ingrese su nombre"); // Del tipo String

if(nombreIngresado.charAt(0).toUpperCase() === 'A') {
    console.log("Tu nombre empieza con A")
} else {
    console.log("Tu nombre No empieza con A")
}
