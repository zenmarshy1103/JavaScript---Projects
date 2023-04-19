// Project - Pig Game (Rolling the dice)
// - Pressing rolle Dice will trigger a random dice picture to be generated and show on the screen
// - Current score for player 1 increments on each dice roll ()
// -


'use strict';

//Selected elements stored in varaiables
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1') //another way of getting the ID from the HTML document
const dicePic = document.querySelector('.dice');
const newGameBtn = document.querySelector ('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1')

// console.log(randomDice);



//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
dicePic.classList.add("hidden"); //Add a hidden class in the CSS first then use the hidden class to make the dice disappear at the start of the game
let currentScore = 0;

// > Rolling the dice functionality
rollDiceBtn.addEventListener('click', function() {
    // 1. Generate a randome dice roll
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    dicePic.classList.remove('hidden');
    dicePic.src = `dice-${randomDice}.png`; //.src accesses the src attribute of the selected element on the HTML
    

    // 3. Check for a 1: if true, sweith to next player
    if (randomDice !== 1) {
        // Add Dice value to store 
        currentScore += randomDice;
        //  - Change Later to allow the game to run, currently just checking if the current score gets updated
        current0El.textContent = currentScore;


    } else {
        // Switch to next player

    };
    
    


});