// contar segundos de una cifra.  987654321 pasarlo a setmanes, dias, horas, min , seg
//11431 dias 21 horas 25 min y 21 seg




let cifra = 109876543210

let seg = 1;
let min = 60;
let hora = 60 * min;
let dia = 24 * hora;
let set = 7 * dia;
let mes = 4 * set
let a = 365 * dia // no se cuenta bisiesto
let lu = 5 * a
let de = 2 * lu
let ce = 100 * a
let me = 1000 * a


let milenio= Math.round( cifra / me)
let resto = cifra % ce

let siglo= Math.round( resto / ce)
resto = cifra % ce


let decada = Math.round( resto / de)
resto = cifra % de


// lustro

let lustro = Math.round( resto / lu)
resto = resto % lu

// any

let any = Math.round( resto / a)
resto = resto % a

// mes
let mesos= Math.round(resto / mes)
resto = resto % mes

// setmanes
let setmanes = Math.round(resto / set);
resto = resto % set;

// dies
let dies = Math.round(resto / dia);
resto = resto % dia;

// hores
let hores = Math.floor(resto / hora);
resto = resto % hora;

// minuts
let minuts = Math.floor(resto / min);
resto= resto % min;

// segons
let segons = resto;


console.log(milenio, "milenio");
console.log(siglo, "siglos");
console.log(decada, "decadas");
console.log(lustro, "lustro");
console.log(any, "any");
console.log(mesos, "mesos");
console.log(setmanes, "setmanes");
console.log(dies, "dies");
console.log(hores, "hores");
console.log(minuts, "minuts");
console.log(segons, "segons");

