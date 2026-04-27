let diaDiaSemana
let dia = new Date()
let diaCorrecto = false


while (diaCorrecto == false){

diaDiaSemana = prompt("Dime que numero de dia es?")
diaDiaSemana = diaDiaSemana.toLocaleLowerCase()
diaDiaSemana.Date()

switch(diaDiaSemana){
    
    case"lunes":
        alert("Es Lunes")
        diaCorrecto = true
        break;
    case "martes":
        alert("Hoy es 28")
        diaCorrecto = true 
        break;
    case "miércoles":
    case "miercoles":
        alert("Hoy es 29")
        diaCorrecto = true
        break;
    case "jueves":
        alert("Hoy es 30")
        diaCorrecto = true
        break;
    case "viernes":
        alert("Hoy es 1")
        diaCorrecto = true
        break;
    case "sábado":
    case "sabado":
        alert("Hoy es 22")
        diaCorrecto = true
        break;
    case "domingo":
        alert("Hoy es 3")
        diaCorrecto = true
        break;
    default:
        alert("Pon otra cosa")
        diaCorrecto = false
        break;
}
}