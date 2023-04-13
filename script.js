// Handling Click Events
// - DOM Manipulation (Making Javascipt to interact with the web page )
// - Handling click events
// -

'use strict';
// > DOM (Document Object Model) 
//  - Representation of HTML documents. Allowing Javascript to access the elements and styles and manipulate them
//  - DOM is structured in a TREE Structure, each HTML element is an object
//  - DOM is not a part of Javascript but WEB API (DOM methods and properties) that we can access from Javascript code

// Selecting an element and its text content (.textContent) from HTML using Javascript
// console.log(document.querySelector('.message').textContent);

// Set the content for the element
// document.querySelector('.message').textContent = 'Correct Number Guessed!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// Set the content for an input element that needs a value inputted from the user
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// > Listen for a click on the check button element with (.addEventListener(typeOfEvent) ) method
// > and triggers a event handling function (.addEventLister(typeOfEvent, eventHandler))
document.querySelector('.check').addEventListener('click', function() {    //function is another value when returned so can be used as an input argument
    // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));

    // Check if the guess field is entered
    if (!guess) {
        document.querySelector('.message').textContent = '!No Number was Entered!';

    }

    // document.querySelector('.message').textContent = 'Correct Number Guessed!'
});  


