//nombre mal escrito
let nom = "serch de los Taylor"

    let nom1 = nom
    let espacio = 0
    let apellido = ""
    let apellido2 = ""
    let inicial = ""
    let inicial2 = ""
    let entero = ""
    let entero2 = ""
    let final = ""
    let final2 =""

    // paso todo a minusculas todo el nombre

    nom1= nom.toLocaleLowerCase()


    if (nom1.includes(" de los ")){
            for (let x=0;x<nom1.length;x++){ 
            if ((nom1[x] == "d")){
                espacio = x
            }
        }  

            //Nombre

            inicial = nom1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = nom1.slice(1,espacio)
            entero = inicial.concat(final," De Los ")

            //Apellido

            apellido = nom1.slice(espacio+7,espacio+8)

            apellido2 = nom1.slice(espacio+8,nom1.length)
            inicial2= apellido.toLocaleUpperCase()
            final2 = apellido2
           

        //Se concatenan nombre y apellido
         entero2=inicial2 + final2

        //se suma un espacio y se muestra
        nom1 = entero + entero2
        console.log(nom1)


        }else if (nom1.includes(" del ")){
                        for (let x=0;x<nom1.length;x++){ 
            if ((nom1[x] == "d")){
                espacio = x
            }
        } 

            //Nombre
            console.log(espacio);
            inicial = nom1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = nom1.slice(1,espacio)
            entero = inicial.concat(final," Del ")


            //Apellido

            apellido = nom1.slice(espacio+3,espacio+4)
            apellido2 = nom1.slice(espacio+4,nom1.length)
            inicial2= apellido.toLocaleUpperCase()
            final2 = apellido2
            entero2=inicial2 + final2

        //Se concatenan nombre y apellido
        entero2= inicial2.concat(final2)

        //se suma un espacio y se muestra
        nom1 = entero2
        console.log(nom1)


        }

        else if (nom1.includes(" de ")){
            for (let x=0;x<nom1.length;x++){ 
            if ((nom1[x] == "d")){
                espacio = x
            }
        }  
            //Nombre
            inicial = nom1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = nom1.slice(1,espacio)
            entero = inicial.concat(final," De ")

                        
            //Apellido

            apellido = nom1.slice(espacio+3,espacio+4)
            apellido2 = nom1.slice(espacio+4,nom1.length)
            inicial2= apellido.toLocaleUpperCase()
            final2 = apellido2

        //Se concatenan nombre y apellido
        entero2= inicial2.concat(final2)

        //se suma un espacio y se muestra
        nom1 = entero.concat(final2)
        console.log(nom1)

        }

        //nombre compuesto de aqui hacia el final funciona
        else if(nom1.includes(" ")){
            for (let x=0;x<nom1.length;x++){ 
            if ((nom1[x] == " ")){
                espacio = x
            }
        }
            //Nombre
            inicial = nom1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = nom1.slice(1,espacio)
            entero = inicial.concat(final," ")
            console.log(entero );
                        
            //Apellido

            apellido = nom1.slice(espacio+1,espacio+2)
            apellido2 = nom1.slice(espacio+2,nom1.length)
            inicial2= apellido.toLocaleUpperCase()
            final2 = inicial2.concat(apellido2)


        //Se concatenan nombre y apellido
        nom1 = entero.concat(final2)
        console.log(nom1)

    }
    // Nombre sin ser compuesto
    else{
            inicial = nom1.slice(0,1)
            inicial = inicial.toLocaleUpperCase()
            final = nom1.slice(1,nom1.length)
            entero=inicial.concat(final)
            console.log(entero);
    }