// Target HTML elements

let date = document.getElementById('date');
let card = document.querySelectorAll('.card');


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
let gameLock = true;
let pairs = 15;
let clicks = 0;

card.forEach(cards => cards.addEventListener('click', flipOver));
shuffle();

function flipOver(){
    if (gameLock) return;
    if (this === firstCard) return;
    
    this.classList.add('flip');

    if(!flippedCard){
       
        flippedCard = true;
        firstCard = this;
    
    }else{
        flippedCard = false;
        secondCard = this;
        
        if (firstCard.dataset.carddata === secondCard.dataset.carddata) {
            
           match()

        } else { 
            
          flipBack()
        }
    }
}


function reset(){
    flippedCard = false;
    firstCard, secondCard = [null, null];
    card.forEach(cards => cards.addEventListener('click', flipOver));
}
 card.forEach(cards => cards.addEventListener('click', flipOver));