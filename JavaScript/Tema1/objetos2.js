let persona={
    nombre : "Serch",
    apellido : "Taylor",
    "nombre completo":"Serch Taylor",
    edad:"46",
    ciudad:"Barcelona",
    email: "nose@gmail.com",
    saludar : function (){return("Hola")},
    despedir : () => "Adios",
    caminar : () => console.log("Estoy andando"),
    amigos : ["Anna","Pepe","Miguel"],
    padres : {padre: "Paco", madre:"Pepa"},
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido // referencias a una key para tu objetos
    }

    }

const coche ={

}
console.log(coche);
coche.marca="Seat"

coche['Modelo']="Arona"

console.log(coche);



const listaAlumnos =[
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"}

]
console.log(persona['nombre']);

persona['nombre'] = "Clark"

console.log(persona['nombre']);

console.log(persona.nombreCompleto());


//ELIMINAR
delete persona["nombre completo"]

console.log(persona);
console.log(persona["console.log(persona);"]);

for(propiedad in persona){
    console.log(propiedad,persona[propiedad]);
}
console.log(propiedad);
for(key in persona){
    console.log(key);
}
console.log(propiedad);

console.log("nombre" in persona);

console.log("name "in persona);


console.log(Object.keys(persona))
console.log(Object.entries(persona))


function addFruits(nombre,precio, unidad){
    
    return{
        nombre, // funciona tambien solo con nombre: nombre,
        precio: precio,
        unidad: unidad,
        mayorista: "Es mayorista",
        textoCompleto: `${nombre}: ${precio.toFixed(2)} ${unidad}`

    }

}
const fruta1 = addFruits("fresas", 5, "€/Kg")

let fruta2 = addFruits("malacotones", 3.5, "€/Kg")

console.log(fruta1);
console.log(fruta1.textoCompleto);
console.log(fruta2);

//