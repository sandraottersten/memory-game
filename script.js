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

  // Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);
// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

// For each item in the cardsArray array...
gameGrid.forEach(item => {
  // Create a div
  const card = document.createElement('div');

  // Apply a card class to that div
  card.classList.add('card');

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
});


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
