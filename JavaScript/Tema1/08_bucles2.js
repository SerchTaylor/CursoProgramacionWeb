let texto ="Asdf asdfa sdf adsasdf adfasdf afas dfaf asdasd faf asdf"
tecto = texto.trim();



let contador = 0 

console.log(texto);

for( lletra of texto){
        if (lletra == " "){
            contador = contador + 1
            console.log(contador);
        };
}

if (texto.length>0){
    contador = contador +1
} 

console.log(contador);

let palabras = texto.split(/\s+/).length;

console.log("Palabras:", palabras);

let num = 0
let num1 = 0
let tabla = 6
for (num;num<=10;num++){
    resul= tabla * num
    console.log(tabla+" por "+num+" es "+resul)
}
while(num1!=11){
    resul= tabla * num1
    console.log(tabla+" por "+num1+" es "+resul)
    num1= num1 + 1
}

