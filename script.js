// Variabili

const formLayout = document.querySelector('#form-layout')

const nameText = document.querySelector('#nameText')

const kmNumber = document.querySelector('#kmNumber')

const ageSelect = document.querySelector('#ageSelect')

const submitBtn = document.querySelector('#submit-btn')

const cancelBtn = document.querySelector('#cancel-btn')

let ticketPrice = document.querySelector('#ticketPrice')

let userKm = null
let kmPrice = null

// Prendo le informazioni dal form compilato dall'utente

formLayout.addEventListener('submit', function (event) {

event.preventDefault()

})

submitBtn.addEventListener('click', function () {

    userKm = kmNumber.value

// Calcolo il prezzo per chilometro 

    kmPrice = (userKm * 0.21)

// Applico lo sconto in base all'età dell'utente

let agePrice = ageSelect.value

if (ageSelect == 'Minorenne') {
    agePrice = kmPrice - (kmPrice * 20 / 100)
} else if (ageSelect == 'Over65') {
    agePrice = kmPrice - (kmPrice * 40 / 100)
} else {
    agePrice = kmPrice
}

// Applico al risultato il formato del prezzo con due decimali

agePrice = agePrice.toFixed(2)

// Stampo a schermo il prezzo del biglietto per l'utente

ticketPrice.innerText = `Il prezzo del biglietto è ${agePrice} €`

})