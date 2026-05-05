let num1 = 0
let num2 = 200

function randomNum1toNum2(num1, num2){
    return Math.floor(Math.random() * (num1 - num2 + 1))+1
}

function randomNum2toNum1(num2, num1){
    return Math.floor(Math.random(num1,num2)  * (num2 - num1 + 1))+1
}



console.log(randomNum1toNum2(num1,num2));   // entre el num1 y el num2

console.log(randomNum2toNum1(num2,num1));  