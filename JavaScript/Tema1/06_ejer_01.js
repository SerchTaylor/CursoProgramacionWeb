// console.log("Hola");

// Alerta te sale un pop-up y hay que aceptar
// alert("Buenas tardes")

// Confirmar una pregunta y se guarda en una variable
// let mayorEdad = confirm("Eres mayor de edad?")

// Pedir un dato y se guarda en una variable
// let diaDiaSemana = prompt("Dime que numero de dia es?")


// 27 = Hoy es lunes 27 Abril, el resto pues el resto, solo esta semana

let diaDiaSemana
let dia = new Date()
let diaCorrecto = false

while (diaCorrecto == false){
    diaDiaSemana = prompt("Dime que numero de dia es?")

        if (diaDiaSemana == 27 && diaCorrecto == false){

            
            alert("Hoy es "+new Date().toLocaleDateString('es-ES', 
            { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            diaCorrecto = true;
        }
        else if(diaDiaSemana ==28 && diaCorrecto == false){
            alert(`Mañana es Martes ${diaDiaSemana} Abril del 2027`);
            diaCorrecto = true;

        }
        else if(diaDiaSemana ==29 && diaCorrecto == false){
            alert(`Sera Miercoles ${diaDiaSemana && diaCorrecto == true} Abril del 2027`);
            diaCorrecto = true;
        }
        else if(diaDiaSemana ==30 && diaCorrecto == false){
            alert(`Sera Jueves ${diaDiaSemana && diaCorrecto == true} Abril del 2027`);
            diaCorrecto = true;
        }
        else if(diaDiaSemana ==1 && diaCorrecto == false){
            alert(`Sera Viernes ${diaDiaSemana && diaCorrecto == true} Mayo del 2027`);
            diaCorrecto = true;
        }
        else if(diaDiaSemana ==2 && diaCorrecto == false){
            alert(`Sera Sabado ${diaDiaSemana && diaCorrecto == true} Mayo del 2027`);
            diaCorrecto = true;
        }
        else if(diaDiaSemana ==3 && diaCorrecto == false){
            alert(`Sera Domingo ${diaDiaSemana} Mayo del 2027`);
            diaCorrecto = true;
        }
        else if(diaDiaSemana < 27 || diaDiaSemana >3 && diaCorrecto == false){
            alert("Debes poner un dia que sea 27 28 29 30 1 2 o 3");
            diaCorrecto = false
            diaDiaSemana
        }
        else{
            alert("Error, pon una fecha correcta");
            diaCorrecto = false
            diaDiaSemana
        }
}
/*

switch(diaDiaSemana){
    case "27":
        alert("Hoy es 27")
        break;
    case "28":
        alert("Hoy es 28")
        break;
    case "29":
        alert("Hoy es 29")
        break;
    case "30":
        alert("Hoy es 30")
        break;
    case "1":
        alert("Hoy es 1")
        break;
    case "2":
        alert("Hoy es 22")
        break;
    case "3":
        alert("Hoy es 3")
        break;
    default:
        alert("Pon otra cosa")
        break


}*/