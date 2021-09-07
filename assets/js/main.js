let date = document.getElementById('date');
let card = document.querySelectorAll('.card');

let options = {day:'numeric', weekday:'long', month:'long', year: 'numeric', };
let currentDate = new Date();

date.innerHTML = currentDate.toLocaleDateString('en-US', options);

function playerName() {
    var name = document.getElementById('name-input').value;

    if (name != null) {
        document.getElementById('player').innerHTML = `Welcome ${name}, let's do some KREPSKO stuff!`;
    }
}

let flippedCard = false;
let firstCard, secondCard;
let gameLock = false;

function flipOver(){
    if (gameLock) return;
    
    this.classList.add('flip');

    if(!flippedCard){
       
        flippedCard = true;
        firstCard = this;
        console.log('im the first card', flippedCard, firstCard);
    }else{
        flippedCard = false;
        secondCard = this;
        console.log('im the second card', flippedCard, secondCard);
        console.log(firstCard.dataset.carddata);
        console.log(secondCard.dataset.carddata);
        if(firstCard.dataset.carddata === secondCard.dataset.carddata){
            firstCard.removeEventListener('click', flipOver);
            secondCard.removeEventListener('click', flipOver);
            
        }else{ 
            gameLock = true;
        }
    }
}


function reset(){
    flippedCard = false;
    firstCard, secondCard = [null, null];
    card.forEach(cards => cards.addEventListener('click', flipOver));
}
 card.forEach(cards => cards.addEventListener('click', flipOver));