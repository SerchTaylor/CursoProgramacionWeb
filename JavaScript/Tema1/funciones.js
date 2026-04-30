// FUNCIONES, siempre al final


function HelloWorld(){
    console.log("Hola Mundo");

}

function Sumar(num1, num2){
    let sumar = num1 + num2
    console.log(sumar);
    return sumar 

}

 

// Funciones 

HelloWorld();

let num1 = 2
let num2 = 5
// Funciones de asignacion, NO se puede llamar antes de crearla
let saludar2 = function(nombre){
    return `Hola ${nombre}`
}


//Funcion por declaracion
let saludar3 = (nombre) =>{
    return `Hola ${nombre}`

}

//Funcion por declaracion2
let saludar4 = (nombre) => `Hola ${nombre}`


console.log(saludar2("Serch"));
let num3 = Sumar(num1, num2)
console.log(num3);


let sumar4 = (num1,num2) => num1+num2

console.log(sumar4(2,6));



