/* It's basic calculator with square and cubic */


//Funtions that need for use de Calculator
export function menu(){
    console.log("Menu calculadora");
    console.log("Opcion 1: Sumar");
    console.log("Opcion 2: Restar");
    console.log("Opcion 3: Multiplicar");
    console.log("Opcion 4: Division");
    console.log("Opcion 5: Elevar al cuadrado");
    console.log("Opcion 6: Elevar al cubo");
}
function add(num1, num2){
    let sumar = num1 + num2
    return sumar 

}
function less(num1,num2){
    let restar = num1 - num2
    return restar 
    
}
function multiply(num1, num2){
    let multi = num1 * num2
    return multi 
    
}
function division(num1,num2){
        let divi = num1 /  num2
        return divi 
}
function square(num1){    
    let cua = num1 ** 2
    return cua  
}
function cubic(num1){
    let cubo = num1 ** 3
    return cubo 
}


//variables
let num1 = 3
let num2 = 0-9
let boolean = true
let resu = 0

//Main
    menu();
    let option ="/"
    switch(option){
        case "+":
            resu = add (num1, num2)
            console.log("La suma de "+num1+" mas "+num2+" es "+resu);
            break;
        case "-":
            resu = less (num1, num2)
            console.log("La resta de "+num1+" menos "+num2+" es "+resu);
            break;
        case "*":
            resu = multiply(num1, num2)
            console.log("La multiplicacion de "+num1+" por "+num2+" es "+resu);
            break;
        case "/":
            if (num2==0){
                console.log("No se puede dividir por 0");
            }
            else{
                resu = division(num1, num2)
                console.log("La divsion de "+num1+" dividido por "+num2+" es "+resu);}
            break;
        case "2":
            resu = square(num1)
            console.log("El quadrat de "+num1+" es: "+resu);
            resu = square(num2)
            console.log("El quadrat de "+num2+" es: "+resu);
            break;
        case "3":
            resu = cubic(num1)
            console.log("El cub de "+num1+" es: "+resu);
            resu = cubic(num2)
            console.log("El cub de "+num2+" es: "+resu);
            break;
        default:
            console.log("Si es denames el option podriem caure en el default");
            break;
    }


