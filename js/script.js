/**
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

//scegliere pari o dispari
const pariOdispari = 'pari'; //prompt
console.log('pari o dispari?',pariOdispari);


//inserire un numero
const numPlayer = '2' // parseInt(prompt(''));  
console.log('il numero scelto dal player è',numPlayer);

//verifica player
let giocoValido = false;
let errorMsg = '';
if(numPlayer % 2 == 0){
  giocoValido = true;
}else errorMsg = 'Inserisci un numero corretto';
console.log('giocoValido', giocoValido)
console.log('errorMsg', errorMsg)


//numero random generato con una funzione
function numComputer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}console.log('il numero scelto dal computer è',numComputer(1, 5));

//verifica computer
//verifica
let giocoValido = false;
let errorMsg = '';
if(numComputer % 3 == 0){
  giocoValido = true;
}else errorMsg = 'Inserisci un altro numero random';
console.log('giocoValido', giocoValido)
console.log('errorMsg', errorMsg)



//somma dei due numeri
// const sommaNum = numPlayer + numComputer;
// console.log('la somma dei due numeri è', sommaNum);

// if()