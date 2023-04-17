// Project - Modal Window (Defining Variables for HTML elements)
// Website functionality - Checking a tag brings out a window with texts
//Storing variables with the elements needed for the project - This will make program code look neater
'use strict';

// Varaibles storing HTML elements that is needed for this project
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //.querySelectorAll  - selects all elements with the same name and put them in an array format
// console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textContent);
}
