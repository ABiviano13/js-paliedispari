
// //PALIDROMA Funzioni
function isPalidroma(parolaPalidroma) {
    //2.1 Trasformare la parola in un array (.split()), invertirla (reverse()) e concatenare gli elementi (join())
    const parolaInversa = parolaPalidroma.split('').reverse().join('');
	return parolaInversa;
}

//PARI E DISPARI Funzioni
function isNumberRandom(numeroPcRandom){
    numeroPcRandom = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    return numeroPcRandom;
}

function isSom(n1,n2){

    const som = n1 + n2;
    return som;

}

function isDivisible(numero, divisore){
	// !!!! Aggiungere un controllo nelle funzioni perchè non è detto che usiamo la funzione solo nella parte che abbiamo già controllato !!!!
	if(isNaN(numero || divisore)){
		console.warn('Il numero è un NaN!! Attenzione!!');
	}

	const resto = numero % divisore;

	if (resto === 0) {
		return true;
	} else {
		return false;
	};
}

// // PALIDROMA

//1. Chiedere all'utente una parola e convertirla in minuscolo
const parolaUtente = prompt('inserisci una parola').toLowerCase();
console.log('La parola scelta dall Ultente è', parolaUtente);

// //2. Creare una funzione per controllare se la parola inserita è palindroma


//3. Comunicare all'utente l'esito del controllo
const parolaInvertita = isPalidroma(parolaUtente);

if (parolaUtente == parolaInvertita){
    // console.log('La parola è Palidroma');
    alert('La parola è Palidroma');
} else{
    // console.log('La parola non è Palidroma');
    alert('La parola non è Palidroma');
};


//PARI E DISPARI

//1. Chiedere all'utente di scegliere 'pari o dispari' e di scegliere anche un numero (da 1 a 5)
let mossaUtente = '';
do{
	mossaUtente = prompt('Scegli fra pari e dispari');
    console.log('Utente X ha scelto ', mossaUtente); 

} while (mossaUtente !== 'pari' && mossaUtente !== 'dispari');

let numeroUtente = '';
do{
	numeroUtente =  parseInt(prompt('Scegli un numero da 1 a 5'));
    console.log('Utente x ha scelto ', numeroUtente);

} while(isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1);

// //2. In una funzione generiamo un numero radom per il computer (da 1 a 5)

const numeroRandom = '';
const numeroPc = isNumberRandom(numeroRandom);
console.log('Il computer ha il numero ', numeroPc);

//3. In una funzione sommiamo i numeri e controlliamo se il risultato viene pari o dispari

const somma = isSom(numeroUtente, numeroPc);
console.log(somma);

if (isDivisible(somma, 2)){
    console.log('è pari');
} else {
    console.log ('è dispari');
};

//4. Comunichiamo se l'utente ha vinto o ha perso

// PRIMO METODO
// if (mossaUtente === 'pari') {

// 	if (isDivisible(somma, 2) === true) {
//         alert('Hai vinto!! :)');
// 	} else {
// 		alert('Hai perso!! :c');
// 	};

// } else if (mossaUtente === 'dispari'){

// 	if (isDivisible(somma, 2) === true) {
// 		alert('Hai perso!! :c');
// 	} else {
// 		alert('Hai vinto!! :)');
// 	};

// };

// SECONDO METODO REFACTORING 
if(isDivisible(somma, 2) === true && mossaUtente === 'pari'){
	alert('Hai vinto!! :)');
} else if(isDivisible(somma, 2) !== true && mossaUtente === 'dispari'){
	alert('Hai vinto!! :)');
} else {
	alert('Hai perso!! :c');
}