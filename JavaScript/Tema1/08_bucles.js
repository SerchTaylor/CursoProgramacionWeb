let arrayFrutas = ["kiwi","fresa","pomelo","naranja","arandanos"]
console.log(arrayFrutas);

// For
for(let i=0;i<arrayFrutas.length;i++){ // restar 1 --
    const mensaje = `El indice ${i} coresponde al: ${arrayFrutas[i]}.`

    console.log("Número "+i+": "+arrayFrutas[i])
    console.log(mensaje);

}

let palabra ="Abrsacadabra"
let palabra3 = palabra.toLocaleLowerCase();
let letras = "a"
console.log(palabra3);
let contador = 0
for (let i=0;i<palabra3.length;i++){
    if (letras == (palabra3[i])){
        contador = contador +1
    }
}
console.log("En total son: "+contador+" \""+letras+"\".");

// For1

for(fruta of arrayFrutas){

    console.log(fruta);

}


// For2
let palabra1 ="Abugkhguyueqasgfhhdtrsaaaasacadabra"
let palabra2 = palabra1.toLocaleLowerCase();
let contador1 = 0
for (letra of palabra2){

    if (letra =="a"){
        contador1 = contador1 +1
    }
}
console.log("En total son: "+contador1+" \""+letra+"\".");



for (letra of palabra){
    console.log(letra);
}


let indicador = 10
while(indicador >=0){
    if (indicador >0){
    console.log("Despegas en "+indicador);
    indicador = indicador - 1;
    } else{
        console.log(indicador+"!!! Se encienden los motores!!! Despegamos!!!");
        indicador = indicador - 1;
    }
}
/*
while (true){
console.log(indicador);
indicador = indicador -1
if(indicador == -1){
    break;
}
}

const claveSereta = "1234" 
let respuestaUsuario = ""
do{
    respuestaUsuario = prompt(" Dime tu clave secreta")


}while( respuestaUsuario != claveSereta);

alert("Has entrado en la base Oculta") */