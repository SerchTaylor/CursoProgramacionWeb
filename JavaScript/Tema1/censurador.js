//Corrector
palabra1="asdf asf joder asdfasf asdfasf "
let siguiente
let siguente2

texto= "asdfasdf jodre asdfasd as"
 if (palabra1.includes(" joder ")){

    for (let x=0;x<palabra1.length;x++){ 
            if ((palabra1[x] == "j")){
                espacio = x
            }
                palabra1.ch
 }

            //Nombre
            console.log(espacio);
            inicial = palabra1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = palabra1.slice(1,espacio)
            entero = inicial.concat(final," **** ")


            //Apellido

            siguiente = palabra1.slice(espacio+3,espacio+4)
            siguiente2 = palabra1.slice(espacio+4,palabra1.length)
            inicial2= siguiente.toLocaleUpperCase()
            final2 = siguente2
            entero2=inicial2 + final2

        //Se concatenan nombre y apellido
        entero2= inicial2.concat(final2)


        //se suma un espacio y se muestra
        nom1 = entero2
        console.log(entero2)
}



