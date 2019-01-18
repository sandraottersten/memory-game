const cardsArray = [{
    'id': 1,
    'img': 'img/donut1.jpg',
  },
  {
    'id': 2,
    'img': 'img/donut2.jpg',
  },
  {
    'id': 3,
    'img': 'img/donut3.jpg',
  },
  {
    'id': 4,
    'img': 'img/donut4.jpg',
  },
  {
    'id': 5,
    'img': 'img/donut5.jpg',
  },
  {
    'id': 6,
    'img': 'img/donut6.jpg',
  },
  {
    'id': 7,
    'img': 'img/donut7.jpg',
  },
  {
    'id': 8,
    'img': 'img/donut8.jpg',
  }];

let count = 0;
let firstSelect = 0;
let secondSelect = 0;
let delay = 1100;
var timeleft = 10;

const game = document.getElementById('game'); // Grab the div with an id of root
const grid = document.createElement('section'); // Create a section with a class of grid
grid.setAttribute('class', 'grid');

game.appendChild(grid); // Append the grid section to the game div
let gameGrid = cardsArray.concat(cardsArray); // Duplicate array to create a match for each card

gameGrid.forEach(item => {
  const card = document.createElement('div'); // Create a div for every itam in array
  card.classList.add('card'); // Apply a card class to that div
  card.dataset.id = item.id; // Set the data-name attribute of the div to the cardsArray name

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`; // Apply the background image of the div to the cardsArray image

  grid.appendChild(card); // Append the div to the grid section
  card.appendChild(front); // Append the div to the grid section
  card.appendChild(back); // Append the div to the grid section
});

timer()
grid.addEventListener('click', function (event) {  // Add event listener to grid
  let clicked = event.target;    // The event target is our clicked item
  if (clicked.nodeName === 'SECTION') { return; }    // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (count<2) {
    count++;
     if(count === 1) {

       firstSelect = clicked.parentNode.dataset.id;   // Assign firstSelect
       console.log('firstSelect')
       clicked.parentNode.classList.add('selected'); // Add selected class

     } else {
       secondSelect = clicked.parentNode.dataset.id; // Add selected class
      console.log('secondSelect')
       clicked.parentNode.classList.add('selected');  // Assign secondSelect
     }
     if (firstSelect && secondSelect) {
        if (firstSelect === secondSelect) {
        setTimeout(match, delay)
        setTimeout(resetGuesses, delay)
     } else {
        setTimeout(resetGuesses, delay)
     }
    }
  }
 });

 function match() {
   var selected = document.querySelectorAll('.selected');
   selected.forEach(card => {
   card.classList.add('match');
 });
   console.log("it'a match")
 };

 function resetGuesses() {
  count = 0;
   firstSelect = 0;
   secondSelect = 0;
   var selected = document.querySelectorAll('.selected');
   selected.forEach(card => {
     card.classList.remove('selected');
 });
   console.log("guess again")
 }

 function timer() {
   var downloadTimer = setInterval(function(){
     timeleft--;
     document.getElementById("countdowntimer").textContent = timeleft;
     if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);
 };





/*
var arr = ['apple','cat','Adam','123','Zorro','petunia'];
var n = arr.length;
var tempArr = [];
for ( var i = 0; i < n-1; i++ ) {
  // The following line removes one random element from arr
  // and pushes it onto tempArr
  tempArr.push(arr.splice(Math.floor(Math.random()*arr.length),1)[0]);
}
// Push the remaining item onto tempArr
tempArr.push(arr[0]);
arr=tempArr;
*/
