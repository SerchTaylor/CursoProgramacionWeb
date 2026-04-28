// Arrays

const var1 = [ 2,"martes",3.4 , false];
let var2 = [ 5, 6, var1];
let array = new Array(4,5.6)

console.log(var1);
console.log(var2);
console.log(array);


console.log(var1[0]);
console.log(var1[1].toLocaleUpperCase());
console.log(var2.length);

console.log(var2);

let arrayFrutas=["kiwi","fresa","pomelo","naranja","arandanos"]

console.log(typeof arrayFrutas);

//añadir

arrayFrutas.push("pera")

console.log(arrayFrutas);

//borrar

let ultimoElemento = arrayFrutas.pop();

console.log(arrayFrutas);


console.log(ultimoElemento);


// unshift

arrayFrutas.unshift("Pera");

console.log(arrayFrutas);

//borrar al principio

arrayFrutas.shift();

console.log(arrayFrutas)

//toString


let arrayToString = arrayFrutas.toString();

console.log(arrayToString);

// join

let arrayToString2 = arrayFrutas.join(" ; ");

console.log(arrayToString2);


// indexOff posicion de un elemento en concreto

console.log(arrayFrutas.indexOf("fresa"));
console.log(arrayFrutas.indexOf("naranja"));
console.log(arrayFrutas.indexOf("pera")); // si es -1 no esta

//revertir el array
console.log(arrayFrutas.reverse())

let arrayFrutasCambiado = arrayFrutas.toReversed(); // sin cambiarlo en la memoria
console.log(arrayFrutasCambiado );


// ordenar array

let arrayFrutasOrdenado= arrayFrutas.toSorted(); // sin cambiarlo en la memoria
console.log(arrayFrutasOrdenado);

let arrayNumeros =[23,56,3,22,9,4]


console.log(arrayNumeros.toSorted() )


//sort
console.log(arrayFrutasCambiado );
console.log(arrayFrutasCambiado.sort());
console.log(arrayFrutasCambiado);


//slice

arrayFrutas.push("melon")
arrayFrutas.push("cereza")
console.log(arrayFrutas);
console.log(arrayFrutas.slice(2,4));

