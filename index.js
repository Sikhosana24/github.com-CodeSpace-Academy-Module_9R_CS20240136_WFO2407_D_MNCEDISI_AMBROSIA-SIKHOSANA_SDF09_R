// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 6
let secondCard = 9
// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard

let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
    name: "Per",
    chips: 200
};

let messageE1 = document.getElementById("message-el");
let sumE1 = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()* 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

document.getElementById("btn-start-game").addEventListener("click", startGame);
document.getElementById("btn-new-card").addEventListener("click", newCard);


console.log(sum)