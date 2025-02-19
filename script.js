// Variabili

const formLayout = document.querySelector('#form-layout')

const nameText = document.querySelector('#nameText')

const kmNumber = document.querySelector('#kmNumber')

const ageSelect = document.querySelector('#ageSelect')

const submitBtn = document.querySelector('#submit-btn')

const cancelBtn = document.querySelector('#cancel-btn')

let ticketPrice = document.querySelector('#ticketPrice')

const nameResult = document.querySelector('#nameResult')

const offerResult = document.querySelector('#offerResult')

const carriageResult = document.querySelector('#carriageResult')

const codeResult = document.querySelector('#codeResult')

const ticketPriceResult = document.querySelector('#ticketPriceResult')

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

const userName = nameText.value
let agePrice = ageSelect.value
let finalPrice = 0
let ticketName = null

if (agePrice == 'minorenne') {
    finalPrice = kmPrice * 0.8
    ticketName = 'Biglietto Minorenni'
} else if (agePrice == 'over 65') {
    finalPrice = kmPrice * 0.6
    ticketName = 'Biglietto Over 65'
} else {
    finalPrice = kmPrice
    ticketName = 'Biglietto Standard'
}

// Applico al risultato il formato del prezzo con due decimali

finalPrice = finalPrice.toFixed(2)

// Stampo a schermo il prezzo del biglietto per l'utente

nameResult.innerText = nameText.value

offerResult.innerText = ticketName

carriageResult.innerText = Math.floor(Math.random() *10) + 1

codeResult.innerText = Math.floor(Math.random() *100000) - 1

ticketPriceResult.innerText = `${finalPrice} €`

})