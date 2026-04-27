let diaDiaSemana
let diaCorrecto = false

    while (diaCorrecto == false){
        diaDiaSemana = prompt("Dime que dia es hoy?")
        diaDiaSemana = diaDiaSemana.toLocaleLowerCase()
        switch(diaDiaSemana){ 
            case"lunes":
                alert("El "+diaDiaSemana+" es laborable")
                diaCorrecto = true
                break;
            case "martes":
                alert("El "+diaDiaSemana+" es laborable")
                diaCorrecto = true 
                break;
            case "miércoles":
            case "miercoles":
                alert("El "+diaDiaSemana+" es laborable")
                diaCorrecto = true
                break;
            case "jueves":
                alert("El "+diaDiaSemana+" es laborable")
                diaCorrecto = true
                break;
            case "viernes":
                alert("El "+diaDiaSemana+" es laborable")
                diaCorrecto = true
                break;
            case "sábado":
            case "sabado":
            case "domingo":
                alert("El "+diaDiaSemana+" es festivo")
                diaCorrecto = true
                break;
            default:
                alert("Pon un dia correcto de la semana")
                diaCorrecto = false
                break;
    }
}