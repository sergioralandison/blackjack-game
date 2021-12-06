// The cards of the player
let firstCard = 10
let secondCard = 11

// The result of the Blackjack, is still alive and have blacjack or not ?
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let gameMessage = ""

if (sum <= 20) {
    gameMessage = "Do you want to draw a new card ?"
} else if (sum === 21) {
    gameMessage = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    gameMessage = "You're out of the game!"
    isAlive = false
}
