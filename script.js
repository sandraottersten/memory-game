
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

var count = 0;
var firstSelect = 0;
var secondSelect = 0;
var delay = 1000;
var myScore = 0;
var timeleft = 60;
var message = ["Congrats! They are all yours!", "Time is out <br> The cookie monster ate them all!"];

// Create a section with a classname and append it to game div
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// Duplicate array to create a match for each card and shuffle it
let gameGrid = cardsArray.concat(cardsArray);
shuffleArray(gameGrid);
var gameArray = gameGrid.length;

 // For every item in array: create a card div, a class and a data-id
gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = item.id;

// Create a front and a back side with classes, apply the image of the backside
  const front = document.createElement('div');
  front.classList.add('front');
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

// Append card divs to the section and front and back to the card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

timer();

// When clicking on a card div: assign the clicked item
grid.addEventListener('click', function (event) {
  let clicked = event.target;

// Do not allow the grid section itself to be selected, or cards which are already selected
  if (clicked.nodeName === 'SECTION' || clicked.parentNode.classList.contains('match')
      || clicked.parentNode.classList.contains('selected')) { return; }

// Limits number of clicks to 2, assigns first and second clicks and selected class
  if (count<2) {
    count++;
     if(count === 1) {
       firstSelect = clicked.parentNode.dataset.id;
       clicked.parentNode.classList.add('selected');
     } else {
       secondSelect = clicked.parentNode.dataset.id;
       clicked.parentNode.classList.add('selected');
     }

// Checks if both clicks are made, checks if they are a match
     if (firstSelect && secondSelect) {
        if (firstSelect === secondSelect) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
        gameArray--;
        gameArray--;
        score()
     } else {
        setTimeout(resetGuesses, delay)
     }
    }
  }
// If all the cards are flipped the winner elements are activated
  if (gameArray === 0) {
    var downloadTimer = setInterval(function(){
      document.getElementById('message').innerHTML = message[0];
      game.style.display = 'none';
      document.getElementById('animation').style.display = 'block';
      document.getElementById('playagain').style.display = 'block';
      document.getElementById('monsterAnimation').style.display = 'none';
    }, 1000)
  }
 });

 // Reload game when click playagain button
 document.getElementById('playagain').addEventListener("click", gameReload);

 function match() {
   var selected = document.querySelectorAll('.selected');
   selected.forEach(card => {
   card.classList.add('match');
 });
};

 function resetGuesses() {
   count = 0;
   firstSelect = 0;
   secondSelect = 0;
   var selected = document.querySelectorAll('.selected');
   selected.forEach(card => {
     card.classList.remove('selected');
 });
};

function score() {
  let currentScore = timeleft;
  myScore = myScore + currentScore;
  document.getElementById('score').textContent = myScore;
};

 function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
};

function gameReload() {
  location.reload(true)
};

// When timer is 10, animation is activated
// When timer is 0, the looser elements are activated
function timer() {
  var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById('countdowntimer').textContent = timeleft;
    if(timeleft === 10) {
      document.getElementById('monsterAnimation').style.animationName = 'monster';
    }
    if(timeleft <= 0) {
      document.getElementById('timer').style.display = 'none';
      clearInterval(downloadTimer);
      game.style.display = 'none';
      document.getElementById('loss').style.display = 'flex';
      document.getElementById('message').innerHTML = message[1];
      document.getElementById('playagain').style.display = 'block';
      document.getElementById('monsterAnimation').style.display = 'none';
     }
     if(gameArray === 0) {
       clearInterval(downloadTimer);
     }
   },1000);
};
