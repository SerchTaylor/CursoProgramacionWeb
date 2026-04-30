//nombre mal escrito
let nom = "serch de los taylor"

function NombreCorrecto(nom){
    let nom1 = nom
    let nom2 = []
    let espacio = 0
    let numChars = nom.length
    let apellido = ""
    let inicial = ""
    let inicial2 = ""
    let entero = ""
    let entero2 = ""
    let final = ""
    let final2 =""

    // paso todo a minusculas

    nom1= nom.toLocaleLowerCase()


    if (nom1.includes("de") || nom1.includes("de los") || nom1.includes("los") ){
        nom2= nom1
        console.log(nom2);
        
        //nombre
        inicial = nom1.slice(0,1)
        inicial = inicial.toLocaleUpperCase()
        console.log(inicial);
        for (let x=0;x<nom1.length;x++){ 
            if ((nom1[x] == " ")){
                espacio = x
            }
        }
        for (let i=nom1.length;i<0;i--){ 
            if ((nom1[i] == " ")){
                espacio = i
            }
        }
        if (nom2.includes("de")){
            //Nombre
            inicial = nom1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = nom1.slice(1,espacio-3)
            console.log(final);
            entero = inicial.concat(final," De ")
            console.log(entero);

        }else if (nom2.includes("del")){
            //Nombre
            inicial = nom1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = nom1.slice(1,espacio-4)
            console.log(final);
            entero = inicial.concat(final," Del ")
            console.log(entero);
        }
        else if (nom2.includes("de los")){
                        //Nombre
            inicial = nom1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = nom1.slice(1,espacio-4)
            console.log(final);
            entero = inicial.concat(final," De Los ")
            console.log(entero);
        }


        }

        
    
    
    

    // casos con if NOT include " "
    else if ( nom1.includes(" ")){
            for (let x=0;x<nom1.length;x++){ 
            if ((nom1[x] == " ")){
                espacio = x
            }
        }


        console.log(espacio);
        //Nombre

        console.log(nom1);

        //nombre

        inicial = nom1.slice(0,1)
        inicial = inicial.toLocaleUpperCase()
        final = nom1.slice(1,espacio)

        console.log(inicial)
        console.log(final);

        //apellido
        apellido = nom1.slice(espacio+1, numChars)


        inicial2 = nom1.slice(espacio+1,espacio+2)
        inicial2= inicial2.toLocaleUpperCase()


        final2 = apellido.slice(2,apellido.length)
        
        console.log(inicial2)
        console.log(final2)

        //Se concatenan nombre y apellido
        entero = inicial.concat(final)
        entero2= inicial2.concat(final2)

        //se suma un espacio y se muestra
        nom1 = entero +" "+ entero2
        console.log(nom1)
    }
    // Si incluye " "
    else if(nom1.includes("")) {
            
        console.log(nom1);

        final = nom1.slice(1,numChars)

        console.log(final)

        inicial = nom1.slice(0,1)
        inicial = inicial.toLocaleUpperCase()
        console.log(inicial)

        entero = inicial.concat(final)
        nom1 = entero
        console.log(nom1)
    }

    else console.log("No has puesto un nombre correcto");


}
NombreCorrecto(nom);
;