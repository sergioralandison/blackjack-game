// Cards of the player
let firstCard = 10
let secondCard = 11

// Blackjack seed variables : Booleans and Sum of cards
const sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

// Displaying messages and results
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// There, the function to render the game
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
}

