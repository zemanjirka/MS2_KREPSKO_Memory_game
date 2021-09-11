// Target HTML elements

let date = document.getElementById('date');
let card = document.querySelectorAll('.card');
const done = document.getElementById('done-msg');
const clickNr = document.getElementById('clicks');
const winMsg = document.getElementById('win-msg');


// Target date of today
let options = {day:'numeric', weekday:'long', month:'long', year: 'numeric', };
let currentDate = new Date();

date.innerHTML = currentDate.toLocaleDateString('en-US', options);


// Get the players name
function playerName() {
    var name = document.getElementById('name-input').value;

    if (name != null) {
        document.getElementById('player').innerHTML = `Welcome ${name}, let's do some KREPSKO stuff!`;
    }
}

// Mechanism of the game
let flippedCard = false;
let firstCard, secondCard;
let gameLock = false;
let pairs = 15;
let clicks = 0;

card.forEach(cards => cards.addEventListener('click', flipOver));
shuffle();

function flipOver(){
    if (gameLock) return;
    if (this === firstCard) return
    this.classList.add('flip')
    if (!flippedCard) {
        // The click #1
        flippedCard = true;
        firstCard = this;
    } else {
        // The click #2
        flippedCard = false;
        secondCard = this;
        if (firstCard.dataset.carddata === secondCard.dataset.carddata) {
            // Match
           match()
        } else { 
            // Not a match
          flipBack()
        }
    }
    // End game screen
    if (pairs <= 0){
        done.style.display = 'block';
        clickNr.innerHTML = clicks + " clicks";
        winMessage()
    }
}

// Match cards 
function match(){
    firstCard.removeEventListener('click', flipOver);
    secondCard.removeEventListener('click', flipOver);
    pairs --;
    clicks += 2;
}

// Not match cards
function flipBack() {
    gameLock = true
    clicks += 2;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        gameLock = false;
    }, 1600);
}

function windowClose() {
    done.style.display = 'none';
} 

// clicks count display
clickNr.innerHTML = clicks + " clicks";

function winMessage() {
    if (clicks >= 30 && clicks <= 50) {
            winMsg.innerHTML = 'You are either cheating <br> or genius <br> or a KREPSKO member!';
        } else if (clicks >= 51 && clicks <= 75) {
            winMsg.innerHTML = 'You are kind of good at this! <br> But you could be better <br> ';
        } else if (clicks >= 76 && clicks <= 100) {
            winMsg.innerHTML = 'Not bad! <br> But not good either. <br> You should see some KREPSKO show!';
        } else if (clicks >= 101 && clicks <= 120) {
            winMsg.innerHTML = 'Really?! <br> You should definetly see some KREPSKO show <br> and then come back to play again! ';
        } else if (clicks > 120) {
            winMsg.innerHTML = 'Are you a tee-too-tuum or what? <br> Try again and better!';
        }
}

// Reset - new game
function reset() {
    flippedCard = false;
    [firstCard, secondCard] = [null, null];
    pairs = 15;
    clicks = 0;
    card.forEach(cardReset => cardReset.classList.remove('flip'));
    card.forEach(cards => cards.addEventListener('click', flipOver));
    shuffle();
}