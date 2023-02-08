/////FUZIONI/////


//Palidroma
// //1. Chiedere all'utente una parola e convertirla in minuscolo
// let parolaUtente = prompt('inserisci una parola').toLowerCase();
// console.log(parolaUtente);

// //2. Creare una funzione per controllare se la parola inserita è palindroma
// function isPalidroma(parolaPalidroma) {
//     //2.1 Trasformare la parola in un array (.split()), invertirla (reverse()) e concatenare gli elementi (join())
//     const parolaInversa = parolaPalidroma.split('').reverse().join('');
//     return parolaInversa
// }

// //3. Comunicare all'utente l'esito del controllo
// let parolaInvertita = isPalidroma(parolaUtente);

// if (parolaUtente == parolaInvertita){
//     console.log('La parola è Palidroma');
// } else{
//     console.log('La parola non è Palidroma');
// }


//PARI E DISPARI
//1. Chiedere all'utente di scegliere 'pari o dispari' e di scegliere anche un numero (da 1 a 5)
//2. In una funzione generiamo un numero radom per il computer (da 1 a 5)
//3. In una funzione sommiamo i numeri e controlliamo se il risultato viene pari o dispari
//4. Comunichiamo se l'utente ha vinto o ha perso