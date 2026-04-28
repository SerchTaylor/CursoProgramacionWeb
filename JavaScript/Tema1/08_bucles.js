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





console.log(contador2);



// For1

for(let fruta of arrayFrutas){

    console.log(fruta);

}


// For2
let palabra1 ="Abugkhguyueqasgfhhdtrsaaaasacadabra"
let palabra2 = palabra1.toLocaleLowerCase();
let contador1 = 0
for (letras of palabra2){

    if (letras =="a"){
        contador1 = contador1 +1
    }
}
console.log("En total son: "+contador1+" \""+letras+"\".")



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
export function mostrarMenu() {
    console.log("===============");
    console.log("   MENÚ APP");
    console.log("===============");
    console.log("1. Ver frutas");
    console.log("2. Agregar fruta");
    console.log("3. Eliminar fruta");
    console.log("4. Salir");
    console.log("===============");
}

mostrarMenu();

let opcion = process.stdout.write("Elige una opción: ");

process.stdin.on("data", (data) => {
    const opcion = data.toString().trim();

    console.log("Elegiste:", opcion);
})

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