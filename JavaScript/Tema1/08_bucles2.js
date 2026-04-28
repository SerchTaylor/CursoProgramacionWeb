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

/*
if (texto2[texto2.length] != " "){
    contador2 = contador2 +1
}*/ 

console.log(contador);

let palabras = texto2.split(/\s+/).length;

console.log("Palabras:", palabras);