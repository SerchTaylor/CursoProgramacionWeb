const listaCarta =[
    {opcio:"a", plato:"Hamburguesa de ternera" , precio:10.50},
    {opcio:"b", plato:"Pizza 4 quesos" , precio:12.85},
    {opcio:"c", plato:"Ensalda Variada" , precio:8.95},
    {opcio:"d", plato:"Spaghetti a la carbonara" , precio:10.80},
    {opcio:"e", plato:"Pollo con patatas" , precio:14.50},
    {opcio:"f", plato:"Sopa de verdura" , precio:7.25},
    {opcio:"g", plato:"Tarta de Chocolate" , precio:6.50},
    {opcio:"h", plato:"Helado de Vainilla" , precio:5.00},
    {opcio:"i", plato:"Coca-Cola" , precio:2.50},
    {opcio:"j", plato:"Agua minerla" , precio:1.50},
    {opcio:"k", plato:"Café Solo" , precio:1.75},
    {opcio:"l", plato:"Té" , precio:1.85},

]

// Variables that use on this program
let menu = []
let boolean = true
let pagar=0
let precio= 0
let y =0
let error=false
let ticket =""


//main 1 do-while for do the ticket

do{
    menu = prompt("Me dices que menu quieres");
    menu = menu.toLocaleString()
    menu = menu.replace(/\s+/g, "").split("")
        if(menu[y]>= "a"&& menu[y]<="l"){
            error = true
         }
        else{
            menu = prompt("Me dices que menu quieres");
            error = false
        }
}while(error == false)

    // second do-while for know the price of the bill
do{
    for (let i=0; i<menu.length; i++){
        if(menu[i]>="a" && menu[i]<="l"){
            for (let x=0;x<listaCarta.length;x++){
                if (  listaCarta[x].opcio == menu[i]){
                    pagar = pagar +listaCarta[i].precio
                }
            }
        }   
    }
  
boolean = false
}while (boolean ==true)
 // the for por print the note of the bill
for (let i = 0; i < menu.length; i++) {
    for (let x = 0; x < listaCarta.length; x++) {
        if (listaCarta[x].opcio === menu[i]) {
            ticket = ticket + `${listaCarta[x].opcio}. ${listaCarta[x].plato} y son ${listaCarta[x].precio.toFixed(2)} €\n`;
        }
    }
}

// whith this we can see the order of the ticket and the cost of the order.
alert("Tu pedido es:\n"+ticket+"\nEl total son: "+pagar.toFixed(2)+"€"); 




