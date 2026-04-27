for(i=0;i<=10;i++){
    console.log("Número "+i)
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
alert("Has entrado en la base Oculta")