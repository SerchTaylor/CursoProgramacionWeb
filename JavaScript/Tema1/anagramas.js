// ANAGRAMAS

let palabra1 = "amor"
let palabra2 = "ramo"
let palabra3 = "patata"
let palabra4 = "omar"
let boolean = false

// String to Array con split, se ordena y se une

console.log(palabra1.split().sort().join(''));
console.log(palabra2.split('').sort().join(''));
console.log(palabra3.split('').sort().join(''));
console.log(palabra4.split('').sort().join(''));


for(let x=0; x<=palabra1.length;x++){
        if ((palabra1[x] == palabra2[x]) && (palabra1[x] == palabra3[x]) && (palabra1[x] == palabra4[x])){
                boolean = true
        }else boolean = false
}


console.log(boolean);

