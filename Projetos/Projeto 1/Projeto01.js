const entrada = require('prompt-sync')();
var emoji = require('node-emoji')
console.clear();
console.log()

entrada("Aperte enter para iniciar")

//dialogo inicial
console.clear();
console.log(`- Olá meu caro viajante, me chamo VIDAR!!! e você está prestes a adentrar no reino de Svein`);

//pergunta do nome
console.clear ();
const nome = entrada("- Mas antes... Informe seu nome: ");
console.log();

//dialogo
console.clear ();
console.log("- HAHAHA que nome mais incomum para um aventureiro");
console.clear ();
console.log(`- Adeus ${nome} está é a minha deixa, pois sua aventura vai começar...`);
console.clear ();
entrada("  ... ");
entrada("  ... ");
entrada("  ... ");
entrada("  !?!?!? ");
console.log(`- O que? Por quê você ainda está aí? `);
entrada("  ... ");
entrada("  ... ");
entrada("  ... ");
console.log("- HUM ");
entrada("  ??? ");
console.clear ();
entrada("- Deixe me ver... Será que eu o grande VIDAR!!! esqueci-me de algo? ");
console.clear ();
entrada("- AHRG COMO PUDE????? NÃOOOOOO!!!!! ");
console.clear ();
entrada(`- Ó ${nome} desculpe a minha confusão... `);
console.clear ();
entrada("- Está é a primeira vez que eu faço isso este tipo de Aplicaç... Quer dizer... missão ");
console.clear ();
entrada("- Talvez eu, o grande, o magnânimo, VIDAR!!! tenha esquecido de te perguntar qual classe você gostaria de seguir, então... ")
console.clear ();
entrada(`- Nobre ${nome} existem 3 classes disponíveis para sua escolha sendo elas: `);

//tabela de classes
function Classes (classe){
    this.classe = classe;
}
var guerreiro = new Classes ("Guerreiro");
var ladrao = new Classes ("Ladrão");
var mago = new Classes ("Mago");
console.table([guerreiro, ladrao, mago]);

//escolha de classe

do {
    var classe = +entrada("- Para escolher a classe de guerreiro digite 0, para escolher a classe de ladrão digite 1 e por fim para escolher a classe de mago digite 2 ");
} while ( classe < 0 || classe > 2);

var plural;
var arma;

if ( classe == 0){
    classe = "Guerreiro"
    plural = "guerreiros"
    arma = "Espada"
    console.log();
    console.log(`- HAHAHA então é isso ${nome}? você acha que tens o que é preciso para ser um grande guerreiro como eu VIDAR!!!`);
 } else if (classe == 1){
    classe = "Ladrão"
    plural = "ladrões"
    arma = "Adaga"
    console.log();
    console.log(- `HUM interessante ${nome}... então você gosta de agir nas sombras...`);
 } else {
    classe = "Mago"
    plural = "magos"
    arma = "Cajado"
    console.log();
    console.log(`- Oh temos então um pesquisador das artes arcanas...`);
 }

entrada(`- Chegou a hora ó grande ${nome} o ${classe}`);
entrada(`- A sua historia vai começar!!!!!!!`);

console.clear ();

//História
entrada(`   Governado pelo rei Erick, Svein, possue
montanhas altaneiras, e vastos campos verdejantes,
com verões longos e invernos e implacáveis.  `);

console.clear ();
entrada(`   A paz e a harmonia é são o que regem
este reino, mas certo dia o Grão-Mestre
acorda desesperado após sonhar com a completa
destruição do reino causada por um ser das profundezas.  `);

console.clear ();
entrada(`   O Grão-Mestre contata o rei Erick que
na mesma hora chama você o mais forte dos ${plural}
do reino, prometendo-lhe tudo o que sempre quis.  `);

console.clear ();
entrada(`   Você motivado pela proposta do rei, vai
em busca dos grandes sábios eles, então, te dizem que
tudo necessário para derrotar o mal está na caverna
de Siefried.  `);

console.clear ();
entrada(`   Após dias de viagem você chega na caverna e
ao entrar se depara com uma placa com diversas runas nórdicas,
que dizem:  `);

console.clear ();
entrada(`   Após dias de viagem você chega na caverna e
ao entrar se depara com uma placa com diversas runas nórdicas,
que dizem o seguinte:  `);

console.clear ();
entrada(`   Após dias de viagem você chega na caverna e
ao se aproximar da entrada surge uma placa com 
diversas runas nórdicas, que dizem o seguinte:  `);

console.clear ();
entrada(`   ${classe} para acabar com o mal voce deve encontrar
todas as runas que estão escondidas`  );

console.clear ();
entrada(`   ${classe} para acabar com o mal voce deve encontrar
todas as runas que estão escondidas`  );

if ( arma == "Espada" ){

}













/*
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

}else {
    
}*/
