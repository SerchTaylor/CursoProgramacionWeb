/* Palindromos */

//Variables

let texto = " A ti no, bonita "

let texto1=""
let texto2=""
let boolean = true

//Texto a minustuclas

texto = texto.toLocaleLowerCase()

console.log(texto);

// quitar espacios con for
for( lletra of texto){
        if (lletra >= "a" && lletra <="z"){
            texto1=texto1+lletra
        };
}            

console.log(texto1);

//invertir al texto2 y comparar el texto

        for (let i = texto1.length -1 ; i>=0; i--){
             texto2=texto2+texto1[i]
             console.log(texto2);
            if(texto1[i] == texto2[i]){
                        boolean = true
            }    
                else{
                    boolean = false}
        }

if(boolean == true){
    console.log("Son palindromos");
}
else console.log("NO on palindromos");

