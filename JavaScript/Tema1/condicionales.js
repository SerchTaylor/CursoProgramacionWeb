const isHot = false
let nose = true

if (isHot == true){
    console.log("Si");
    }
else{
    if (nose ==true){
        console.log("Si "+"No");

    }


}
// DIAS 14:00, Tardes 21, Noches 20 a 00 y Madrugadas hasta las 5

let hora = "asdf"
let moorning = 14
let afternoon = 21
let  nigth = 0
let madrugada = 5

if(hora > madrugada && hora < moorning){
    console.log("Bon dia");
}
    else if ((hora >= moorning) && (hora < afternoon)){
            console.log("Bona tada");
            }
            else if((hora >= afternoon) && (hora < nigth)){
                 console.log("Bona tada");
            } 
            else if((hora >= nigth) && (hora < madrugada)){
            console.log("Bona nit");
            }
            else if ((hora >= madrugada) && (hora < moorning)){
                      console.log("Bona madrugada");
            }
            else{
                console.log("Error");
            }


