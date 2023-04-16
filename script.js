// Manipulating CSS Styles (Implement the highscores)
// - DOM Manipulation (Making Javascript to interact with the web page )
// - Change the styles for the HTML element using its CSS properties
// - All the changes will be inline and will not change the CSS file

'use strict';
// DOM (Document Object Model) 
//  - Representation of HTML documents. Allowing Javascript to access the elements and styles and manipulate them
//  - DOM is structured in a TREE Structure, each HTML element is an object
//  - DOM is not a part of Javascript but WEB API (DOM methods and properties) that we can access from Javascript code

// Define the secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
// > define the highscore to be 0 to start with
let highscore = 0;

// > Guess Logic for the game
// Listen for a click on the check button element with (.addEventListener(typeOfEvent) ) method
// and triggers a event handling function (.addEventLister(typeOfEvent, eventHandler))
document.querySelector('.check').addEventListener('click', function() {    //function is another value when returned so can be used as an input argument
    // console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));

    // Check if the guess field is entered or value entered is too high or low or correct and changes the score
   
     
    if (!guess) {
        document.querySelector('.message').textContent = '!No Number was Entered!';
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber; //Shows the secret number when the guess is correct
        document.querySelector('.message').textContent = 'Correct Number!';
        // CSS > change the body parent to green when the guess is correct (.style.backgroundColor = ' ')
        document.querySelector('body').style.backgroundColor= '#60b347';
        // CSS > change the width of the box to become wider when the guess is correct (.style.width = ' ')
        document.querySelector('.number').style.width= '30rem';

        // > Check the score against the current highscore if score is higher then highscore gets the value
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


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
        // Repeating code - will deal with this later 
        if(score > 1) {
            document.querySelector('.message').textContent = 'Guess is too low';
            score--;  //decrease the score   
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lost !!!';
            document.querySelector('.score').textContent = 0;
        }       
    }

    //Challenge
    // Implement the reset functionality, so a new game can be triggered
    // 1. Select the element with the again class and attach a click event handler
    document.querySelector('.again').addEventListener('click', function() {
        // 2. In the handler function, restore the initial values of the score and the secret number
        score = 20;        
        secretNumber = Math.trunc(Math.random() * 20 + 1);          
        
        // 3. Restore the initial conditions of the Message, number , score and the guess input field 
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';          
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = ''; //Setting the guess input field to show blank
        guess = Number(document.querySelector('.guess').value); //create a new random number        
        
        // 4. Restore the origianl backgorund color (#222) and with (15rem)
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width= '15rem';
    });
    
});  




