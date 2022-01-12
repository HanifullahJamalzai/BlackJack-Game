let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
	sumEl.textContent = "Sum: " + sum;
	cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
	if (sum < 21) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got BlackJack!";
		hasBlackJack = true;
	} else {
		message = "You are out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}

function newCard() {
	console.log("new card pressed");
}
