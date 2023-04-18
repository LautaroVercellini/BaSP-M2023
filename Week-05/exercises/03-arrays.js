console.log("--EXERCISE 03: arrays");

/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11
(utilizar console.log).*/

console.log("-Exercise 3.a:");
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4], months[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("-Exercise 3.b:");
var monthsSort = months.sort()
console.log(monthsSort);

// Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log("-Exercise 3.c:");
var months01 =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
            "Septiembre", "Octubre", "Noviembre", "Diciembre"]
months01.unshift("January");
months01.push("December");
console.log(months01);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log("-Exercise 3.d:");
months01.shift();
months01.pop();
console.log(months01);

// Invertir el orden del array (utilizar reverse).

console.log("-Exercise 3.e:");
months01.reverse();
console.log(months01);

/* Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
(utilizar join) */

console.log("-Exercise 3.f:");
months01.reverse();
var strMonths = months01.join("-");
console.log(strMonths);

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log("-Exercise 3.g:");
var latestMonths = months01.slice(4,11);
console.log(latestMonths);