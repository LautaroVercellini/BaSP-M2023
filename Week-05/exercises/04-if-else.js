console.log("--EXERCISE 04: if-else");

/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o
igual que 0,5 mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el
mensaje “Lower than 0,5”. */

console.log("-Exercise 4.a:");

var numRandom = Math.random();

function graterLess (parameter) {
    if (parameter >= 0.5) {
        console.log("-Exercise 4.a:\nGreater than or equal to 0,5")
        return alert("-Exercise 4.a:\nGreater than or equal to 0,5")
    } else
    console.log("-Exercise 4.a:\nLower than 0,5")
        return alert("-Exercise 4.a:\nLower than 0,5")
}

graterLess(numRandom);

/* Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de
alerta:
-“Bebe” si la edad es menor a 2 años;
-“Niño” si la edad es entre 2 y 12 años;
-“Adolescente” entre 13 y 19 años;
-“Joven” entre 20 y 30 años;
-“Adulto” entre 31 y 60 años;
-“Adulto mayor” entre 61 y 75 años;
-“Anciano” si es mayor a 75 años. */


console.log("-Exercise 4.b:");

var age = Math.random() * 101;
function rangeAge (age) {
    if (age < 2) {
        console.log("Bebe")
        return alert ("-Exercise 4.b:\nBebe");
    } else if (age >= 2 && age <= 12) {
        console.log("Niño")
        return alert ("-Exercise 4.b:\nNiño");
    } else if (age <= 19){
        console.log("Adolescente")
        return alert ("-Exercise 4.b:\nAdolescente")
    } else if (age <=30){
        console.log("Joven")
        return alert ("-Exercise 4.b:\nJoven")
    } else if (age <= 60) {
        console.log("Adulto")
        return alert ("-Exercise 4.b:\nAdulto")
    } else if (age <= 75) {
        console.log("Adulto Mayor")
        return alert ("-Exercise 4.b:\nAdulto Mayor")
    } else
        console.log("Anciano")
        return alert ("-Exercise 4.b:\nAnciano");
}

rangeAge (age);