// Project - Pig Game
// - Selecting elements and storing in variables
// - Setting starting conditions
// -


'use strict';

// > Score element stored in varaiables
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1') // another way of getting the ID from the HTML document
const dicePic = document.querySelector('.dice');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
dicePic.classList.add("hidden"); // > Add a hidden class in the CSS first then use the hidden class to make the dice disappear at the start of the game
