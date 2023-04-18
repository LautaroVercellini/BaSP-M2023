console.log("--EXERCISE 06: functions");
/*Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable
en la consola del navegador. */
console.log("-Exercise 06.a:");

function suma (value1, value2) {
    return value1 + value2;
}
resultSuma = suma (10, 20);
console.log(resultSuma);


/* Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y
retornar el valor NaN como resultado. */

console.log("-Exercise 06.b:");

function validarNumbers (value1, value2) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return console.log((suma(value1, value2)));
    } else
        alert("Numbers must be a integers");
        result = NaN;
        return console.log(result);
}
validarNumbers(10, "hola");
validarNumbers(10, 10);

/* Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un
número entero. */

console.log("-Exercise 06.c:");

function validateInteger (numero) {
    if (numero % 1 == 0) {
        console.log("True");
        return true
    } else
        console.log("False");
        return false;
}

validateInteger(10);
validateInteger(1.5);
validateInteger("hola");

/* Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar
el número convertido a entero (redondeado). */

console.log("-Exercise 06.d:");

function sumaCompuesta (value1, value2) {
    if (validateInteger(value1 && value2) == true){
        return console.log(suma(value1, value2));
    } else
        alert("The number must be a integer")
        return console.log(parseInt(value1), parseInt(value2));
}

sumaCompuesta(10, 10.5);
sumaCompuesta(10,10);

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior.*/

console.log("-Exercise 06.e:");
function validarFuncion (sumaCompuesta) {
}

validarFuncion(sumaCompuesta(1, 1.5));
validarFuncion(sumaCompuesta(1,1));
validarFuncion(sumaCompuesta(1,'hola'));