/* 
   Una tienda se ha encargado que gestiones  el cambio que debes devolver a los clinetes
   despues de pagar una compra. La tienda tiene el criterio de devolver la menor conatidad 
   de billetes y/o monedas posibles. Y NO se trabaja cono billetes de 500 ni de 200
   Ej: se devuelve 404€ son 4 billetes de 100€ y 2 de 2€

*/

let precio = 1110.79
let cliente = 1308
let cambio = cliente-precio
let cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
let devolver = []
let cantidad = 0
let resto = 0
let billete = 0
let num = 0 
let num2 = 1
let resultado = 0
let canvi = true

console.log(cambio);
if (cliente < precio) {
        console.log(`Falta por pagar: ${cambio.toFixed(2)*-1}€`);
}

else if (cliente == precio) {
        console.log("Necesitas comprar alguna cosa mas?");
}
/*
else if(cliente == precio){
        console.log(cambio);
        for (num; num<cash.length;num++){
                cambio = Math.round(cambio);
                if(cambio>=cash[num]){
                        cantidad= parseInt(cambio / cash[num])
                        console.log(cantidad);
                        devolver.push(`${cantidad} de ${cash[num]}`)
                        console.log(devolver);
                        cambio = cambio - cantidad * cash[num]
                        console.log(cambio);
                }
        }
        console.log(`Tu cambio es: ${devolver.join(', ')}`);
}*/

else {
        while (canvi !=false ) {
                for (let num = 0; num <= cash.length; num++) {
                        cantidad= parseInt(cambio / cash[num])
                        devolver.push(cantidad)
                        let cantidad2  = cantidad2 -cantidad * cash[num]
                        console.log(cantidad);      
                }

        }
        console.log("Te devuelvo: billetes de monedas y estos centimos");
}


















