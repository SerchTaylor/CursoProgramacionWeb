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
    padres : {padre: "Paco", madre:"Pepa"}

    }

const listaAlumnos =[
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"},
    {nombre:"Ferran", apellido:"Spiderman",ciudad:"Barcelona"}

]
console.log(persona['nombre']);

persona['nombre'] = "Clark"

console.log(persona['nombre']);


//ELIMINAR
delete persona["nombre completo"]

console.log(persona);