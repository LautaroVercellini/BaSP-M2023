console.log("--EXERCISE 05: for");

/* Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
mostrar una alerta utilizando cada una de las palabras. */
console.log("-Excersice 5.a:")

var myArrayNew = ['house', 'family', 'kitchen', 'father', 'mother']

for (i = 0; i < myArrayNew.length; i++){
    console.log(myArrayNew[i]);
    alert(myArrayNew[i]);
}

/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada
palabra modificada. */

console.log("-Excersice 5.b:")
for (i = 0; i < myArrayNew.length; i++){
    var firstLetter = myArrayNew[i].substring(0,1).toUpperCase();
    var endLetters = myArrayNew[i].substring(1,20);
    var capitalizeWord = firstLetter.concat(endLetters);
    console.log(capitalizeWord);
    alert(capitalizeWord);
}

/* Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con
la cadena completa.*/

console.log("-Excersice 5.c:")
var sentence = "";
for (i = 0; i < myArrayNew.length; i++){
    sentence += myArrayNew[i] + " ";
}
console.log(sentence);
alert (sentence);


/*Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */

console.log("-Excersice 5.d:")
var myArrayEmpty = [];
var tope = 10
for (i = 0; i < tope; i++){
    myArrayEmpty.push(i);
}
console.log(myArrayEmpty);
alert(myArrayEmpty);