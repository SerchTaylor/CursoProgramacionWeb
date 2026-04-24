/* String remeber that \ is for use on some options*/

let nombre = "Serch"
let texto ="\tI'm a teacheR"
let texto1 = "Soy un texto\n"
let texto2 = "Shakespeare escribo 'To be or not to be...'"


console.log(typeof nombre)

console.log(nombre)
console.log(texto)
console.log(texto1)
console.log(texto2)
concatenacion = nombre.concat(": ",texto1)
console.log(concatenacion)
console.log(nombre.length)
console.log(texto1[0])
console.log(texto[30])
console.log(texto1[-1])


console.log(texto.at(-1))

console.log(texto.toLocaleLowerCase())
let textoM = texto.toUpperCase()

console.log(textoM)

function saludar() {
    console.log("Hola!");
}

saludar()

let saludo1 = "Buenas"
let saludo2 = "Tardes!!"
let saludoTotal = saludo1.concat(" ",saludo2)
let saludoTotal2 = saludo1 + saludo2
let saludoTotal3 = saludo1 + " , " +saludo2
console.log(saludoTotal)
console.log(saludoTotal2)
console.log(saludoTotal3)

let prueba = "a" * 5
console.log(prueba) // cuidado que a veces hace conversiones


