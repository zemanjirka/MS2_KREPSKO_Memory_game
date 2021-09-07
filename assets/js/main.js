let date = document.getElementById('date');


let options = {day:'numeric', weekday:'long', month:'long', year: 'numeric', };
let currentDate = new Date();

date.innerHTML = currentDate.toLocaleDateString('en-US', options);

function playerName() {
    var name = document.getElementById('name-input').value;

    if (name != null) {
        document.getElementById('player').innerHTML = `Welcome ${name}, let's do some KREPSKO stuff!`;
    }
}