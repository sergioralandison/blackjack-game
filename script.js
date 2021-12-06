// Cards of the player
let firstCard = 1
let secondCard = 11

// Cards array
let cards = [
    firstCard,
    secondCard
]

// Blackjack seed variables : Booleans and Sum of cards
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

// Displaying messages and results
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// There, the function that start the game
function startGame() {
    renderGame()
}

// There, the function that test conditions
function renderGame() {
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
    sumEl.textContent = `Sum: ${sum}`
    // If/else statement to test the conditions : "sum = 21 ?", or else...
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
}

// There, the function that draw a new card
function newCard() {
    let card = 5
    sum += card
    // Push the card to the cards array
    cards.push(card)
    renderGame()
}

