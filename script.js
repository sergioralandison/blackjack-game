let firstCard = 13
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    alert("Do you want to draw a new card ?")
} else if (sum === 21) {
    alert("Wohoo! You've got Blackjack!")
    hasBlackJack = true
} else {
    alert("You're out of the game!")
    isAlive = false
}

