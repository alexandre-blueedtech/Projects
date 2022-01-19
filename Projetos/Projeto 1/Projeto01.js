const entrada = require('prompt-sync')();
console.clear
console.log(`História`)

let Q1 = entrada(`Pergunta 1 `)
let Q2 = entrada(`Pergunta 2 `)
let Q3 = entrada(`Pergunta 3 `)
let Q4 = entrada(`Pergunta 4 `)
let Q5 = entrada(`Pergunta 5 `)

var contador = 0

if ( Q1.toUpperCase() == 'SIM'){
    contador++
}
if ( Q2.toUpperCase() == 'SIM'){
    contador++
}
if ( Q3.toUpperCase() == 'SIM'){
    contador++
}
if ( Q4.toUpperCase() == 'SIM'){
    contador++
}
if ( Q5.toUpperCase() == 'SIM'){
    contador++
}

if (contador == 0 ){

} else if (contador == 1 || contador == 2){

} else if (contador == 3 || contador == 4){

}
