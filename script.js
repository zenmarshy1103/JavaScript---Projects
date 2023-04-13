// Selecting and Manipulating Elements
// - DOM Manipulation (Making Javascipt to interact with the web page )
// - Setting the text content of an element (Any Element)
// -

'use strict';
// > DOM (Document Object Model) 
//  - Representation of HTML documents. Allowing Javascript to access the elements and styles and manipulate them
//  - DOM is structured in a TREE Structure, each HTML element is an object
//  - DOM is not a part of Javascript but WEB API (DOM methods and properties) that we can access from Javascript code

// > Selecting an element and its text content (.textContent) from HTML using Javascript
console.log(document.querySelector('.message').textContent);

// > Set the content for the element
document.querySelector('.message').textContent = 'Correct Number Guessed!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// > Set the content for an input element that needs a value inputted from the user
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


