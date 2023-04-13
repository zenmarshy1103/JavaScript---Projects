// Implementing the game Logic for the Guess My Number Project
// - DOM Manipulation (Making Javascript to interact with the web page )
// - 
// -

'use strict';
// DOM (Document Object Model) 
//  - Representation of HTML documents. Allowing Javascript to access the elements and styles and manipulate them
//  - DOM is structured in a TREE Structure, each HTML element is an object
//  - DOM is not a part of Javascript but WEB API (DOM methods and properties) that we can access from Javascript code

// > Define the secret number
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;

let score = 20;

// > Guess Logic for the game
// Listen for a click on the check button element with (.addEventListener(typeOfEvent) ) method
// and triggers a event handling function (.addEventLister(typeOfEvent, eventHandler))
document.querySelector('.check').addEventListener('click', function() {    //function is another value when returned so can be used as an input argument
    // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));

    // > Check if the guess field is entered or value entered is too high or low or correct and changes the score
    if (!guess) {
        document.querySelector('.message').textContent = '!No Number was Entered!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';       
    } else if (guess > secretNumber) {

        if(score > 1) {
            document.querySelector('.message').textContent = 'Guess is too high';
            score--;  //decrease the score   
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lost !!!';
            document.querySelector('.score').textContent = 0;
        }
    
    } else if (guess < secretNumber) {
        // > Repeating code - will deal with this later 
        if(score > 1) {
            document.querySelector('.message').textContent = 'Guess is too low';
            score--;  //decrease the score   
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lost !!!';
            document.querySelector('.score').textContent = 0;
        }
        
       
    }

});  


