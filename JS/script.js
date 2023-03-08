// ISTRUZIONI:
// Salutare l'utente e chiedere il numero di chilometri che vuole percorrere
// Chiedere l'età dell'utente
// Controllare che l'utente abbia risposto correttamente alle domande
// Calcolare il prezzo totale del viaggio applicando queste regole
    // Prezzo al km 0.21£
    // Sconto 20% per i minorenni
    // Sconto 40% per gli over 65
// OUTPUT: Stampare il prezzo finale (con massimo due decimali)


// ESERCIZIO:

// Salutare l'utente e chiedere il numero di chilometri che vuole percorrere
const travelKm = prompt("Benvenuto utente! Per quanti chilometri vuole viaggiare sul nostro Bool-treno?");
console.log(travelKm);

// Chiedere l'età dell'utente
const userAge = prompt("Perfetto, ancora pochi passaggi! Lei quanti anni ha?");
console.log(userAge);

// Calcolare il prezzo totale del viaggio applicando queste regole
    // Prezzo al km 0.21£
const priceKm = (0.21);
    // Sconto 20% per i minorenni
const underageDiscount = (0.80);
    // Sconto 40% per gli over 65
const over65Discount = (0.60);

// Controllare le risposte dell'utente
if (isNaN(travelKm)) {
    document.getElementById("error").innerHTML = "Errore. Ricaricare la pagina e compilare il form con dei numeri"
}
if (isNaN(userAge)) {
    document.getElementById("error").innerHTML = "Errore. Ricaricare la pagina e compilare il form con dei numeri"
}

// Prezzo finale per un minorenne
let finalPrice = "";
if (userAge < 18) {
    finalPrice = (travelKm * priceKm * underageDiscount).toFixed(2);
} else if (userAge > 65) {
    finalPrice = (travelKm * priceKm * over65Discount).toFixed(2);
} else {
    finalPrice = (travelKm * priceKm).toFixed(2);
}
console.log(finalPrice)

// Stampare prezzo finale
document.getElementById("pricedisplay").innerHTML = `Grazie utente. Il prezzo del suo biglietto è ${finalPrice}£`;