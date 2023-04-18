// Project - Modal Window (Handling an 'ESC' Keypress Event)
// Website functionality - Checking a tag brings out a window with texts
// Storing variables with the elements needed for the project - This will make program code look neater
// Putting the Input Argument for the callback function for the event handler will automatically get the event that was triggered as the argument
'use strict';

// Varaibles storing HTML elements that is needed for this project
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //.querySelectorAll  - selects all elements with the same name and put them in an array format
// console.log(btnsOpenModal);

//Functions 
// Closing Overlay and Modal Box
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Open Overlay and Modal Box
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Adding the functality when clicking each of the show modal buttons
// <NOTE> When dealing with an array with html elements when returned from .querySelectorAll()
//        A for loop is needed to access each of the buttons in the array
for (let i = 0; i < btnsOpenModal.length; i++) {     
    // console.log(btnsOpenModal[i].textContent);
    // > Function to un-hide the modal window and overlay when any of the buttons is clicked
    // btnsOpenModal[i].addEventListener('click', function() {
    //     console.log(`button ${btnsOpenModal[i].textContent} clicked`); // Check to see which button is clicked and return its text content in its HTML element
    //     //Removing class - to show the modal window 
    //     modal.classList.remove('hidden');
    //     //Removing class - to show the overlay
    //     overlay.classList.remove('hidden');
    // });    
    btnsOpenModal[i].addEventListener('click', openModal);    
    btnsOpenModal[i].addEventListener('click', function() {
        console.log(`button ${btnsOpenModal[i].textContent} clicked`);
    });       
}

// Call back function in EventListener:
//  - Only the name of the function is passed in without the (), if function() is passed in with the ()
//  - Javascript will immediately call the function as soon as the code runs.
//  - Having only the function passed in without the () will allow the function to be called when the even happens.

// Implementing the closing of the modal box and overlay when the close button is clicked
btnCloseModal.addEventListener('click', closeModal);

// Implementing the closing of the modal box when the user click anywhere outside the modal box
overlay.addEventListener('click', closeModal);

// > Key Press event using 'ESC' key 
//  - Keyboard events are global event as it does not happen on one specific element
//  - Global event are usually used to listen on the whole document
//  - the argument of the function in an eventLister function automatically gets the event of the type you specify ie keydown event in this case
document.addEventListener('keydown', function(event) {
    // console.log(typeof(event.key), event.key);
    
    // if(event.key === 'Escape') {
    //     // > Check to see if the modal class does not contain hidden (meaning the modal is showing on the page) 
    //     //   then execute the function to turn it off when the escape key is pressed
    //     if (!modal.classList.contains('hidden')){
    //         console.log(`${event.key} key was pressed - Modal Closed`)
    //         closeModal();        
    //     };        
    //}

    // > Refactoring the above conditional operator 
    // > Check to see if the modal class does not contain hidden (meaning the modal is showing on the page) 
        //   then execute the function to turn it off when the escape key is pressed
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {       
        console.log(`${event.key} key was pressed - Modal Closed`)
        closeModal();                  
    } 
});