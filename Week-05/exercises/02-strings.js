console.log("--EXERCISE 02: strings");

/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase) */
console.log("-Exercise 2.a:");

var strExcersice02a = "philosophy";
var philosophyUpper = strExcersice02a.toUpperCase();
console.log(philosophyUpper);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring) */

console.log("-Exercise 2.b:");

var resultExcercise2b = strExcersice02a.substring(0,5);
console.log(resultExcercise2b);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring) */

console.log("-Exercise 2.c:");

var resultExercise02c = strExcersice02a.substring(7);
console.log(resultExercise02c);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +). */

console.log("-Exercise 2.c:");

var letterCap = philosophyUpper.substring(0,1);
var lettersLower = strExcersice02a.substring(1,20);
var resultExercise2c = letterCap.concat(lettersLower);
console.log(resultExercise2c);

/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf) */

console.log("-Exercise 2.d:");

var strExtraLarge = "phylosophy suggestions";
var resultExercise2d = strExtraLarge.indexOf(" ");
console.log(resultExercise2d);

/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra
de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +) */

console.log("-Exercise 2.e:");

var strExtraLargeUpper = strExtraLarge.toUpperCase();

var firstWord = strExtraLargeUpper.substring(0,1) + strExtraLargeUpper.substring(1,10).toLowerCase();
var secondWord = strExtraLargeUpper.substring(11,12) + strExtraLargeUpper.substring(12,30).toLowerCase();
console.log(firstWord.concat(" ",secondWord));