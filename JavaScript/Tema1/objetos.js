let saludar = function(nombre){
    return `Hola ${nombre}`
}

let array1 =["Manuel","Ferran",28,"Badalona","nose@gmail.com"]
let array2 =["Manuel","",28,"Badalona","nose@gmail.com"]


// Objetos

let objeto1 ={
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
    padres : {padre: "Paco", madre:"Pepa"}

    }

console.log(objeto1['apellido']);
console.log(objeto1.apellido);
console.log(objeto1.saludar());
console.log(objeto1.despedir())
objeto1.caminar()
console.log(objeto1.caminar);

console.log(objeto1["nombre completo"]);


const listaAlumnos =[
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"}

]

// Sintaxis JSON

let objeto2 = {
    "nombre" : "Serch",
    "apellido" : "Taylor",
    "edad":46,
    "ciudad":"Barcelona",
    "email": "nose@gmail.com",

    // NO SE HACE ->"saludar" : `function (){return("Hola")}` <- NO SE HACE

}