// Chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero

const userKm = document.querySelector('')

const userAge = querySelector('')

console.log(userKm);

console.log(userAge);

// Calcolo il prezzo per chilometro 

const kmPrice = (userKm * 0.21)

// Applico lo sconto in base all'età dell'utente

let agePrice = 0

if (userAge<18) {
    agePrice = kmPrice - (kmPrice * 20 / 100)
} else if (userAge >= 65) {
    agePrice = kmPrice - (kmPrice * 40 / 100)
} else {
    agePrice = kmPrice
}

// Applico al risultato il formato del prezzo con due decimali

agePrice = agePrice.toFixed(2)

// Stampo a schermo il prezzo del biglietto per l'utente

alert(`Il tuo biglietto costa ${agePrice} €`)