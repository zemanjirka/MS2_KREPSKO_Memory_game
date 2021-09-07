let date = document.getElementById('date');


let options = {day:'numeric', weekday:'long', month:'long',};
let currentDate = new Date();

date.innerHTML = currentDate.toLocaleDateString('en-US', options);