// Project - Pig Game (Resetting the Game)
// - Reset the game to initial values
// - setting a initialisation function for resetting the game and running it at the start of the program when the web loads
// - Familiarise with global variable to avoid scoping (where if the variable is used only in the function)

'use strict';
const POINTSTOWIN = 100;

//Selected elements stored in varaiables
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //another way of getting the ID from the HTML document
const dicePic = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Player Element
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

// console.log(randomDice);

//Global variables (Is useable everywhere in the code ie functions etc)
let currentScore, activePlayer, scores, playing;

// Make starting condition into initialisation function and call it whenever a initialisation is needed during the game
const init = function () {
  currentScore = 0;
  //Current player tracker 0 = Player 1  1 = player 2
  activePlayer = 0;
  //Score Tracker  index 0 is player 1 and index 1 is player 2
  scores = [0, 0];
  //Game state checker
  playing = true; //true = playing , false = stopped

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  dicePic.classList.add('hidden'); //Add a hidden class in the CSS first then use the hidden class to make the dice disappear at the start of the game
};

//Run the initialisation function when the site loads
init();

//> Reset the game
newGameBtn.addEventListener('click', init);

const switchPlayer = function () {
  currentScore = 0; // re zero the current score counter to zero or the score will continue off from where the previous player was on
  activePlayer = activePlayer === 0 ? 1 : 0; //Tenary operator for checking if the current player is 0 if it is then current player will be 1 and if not player 0 then be player 0
  // Shows which player's turn it is currently
  // .classList.toggle() method removes the class when it is there and add the class when it is not there
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// Rolling the dice functionality
// > ADDED - a game checker if it is playing then runs the code if not stops the rolling of the die
rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    //Only runs the code if the status is true
    // 1. Generate a randome dice roll
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    dicePic.classList.remove('hidden');
    dicePic.src = `dice-${randomDice}.png`; //.src accesses the src attribute of the selected element on the HTML

    // 3. Check for a 1: if true, switch to next player
    if (randomDice !== 1) {
      // Add Dice value to score
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0; // Set the current player score to zero
      switchPlayer();
    }
  }
});

holdScoreBtn.addEventListener('click', function () {
  if (playing) {
    //Only runs the code if the status is true
    // 1. Add current score to the current active player's score
    // Store it in the score array
    scores[activePlayer] += currentScore;
    //Show it on the player score on the page dymatically
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if the score is >= 100
    if (scores[activePlayer] >= POINTSTOWIN) {
      //Yes: Finish the game
      playing = false;
      dicePic.classList.add('hidden'); // Hide the dice picture
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      //NO: Switch to the next player
      switchPlayer();
    }
  }
});
