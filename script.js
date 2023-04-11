// Learn to code (Exercise Completed)
//- 1) Understand the problems:
//- 2) Break Up into sub-problems
//- 3) Exercise completed using functions
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. 
//Our most recent task is this: "Given an array of temperatures of one day, 
//calculate the temperature amplitude. Keep in mind that sometimes there might be 
//a sensor error."

// 1) Understand the problems:
// > What is temp amplitude?
// > How to compute max and min temperature
// > What to do when there is a sensor error

// 2) Break Up into sub-problems
// > How to ignore errors?
// > Find max value in an array
// > Find min value in an array
// > Subtract min from max to get the amplitude and return the value 

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

console.log(`---------- Arrange the array to have no 'error' in it ----------`);
//Copy the array to not include the 'error' 
// if (temperatures.includes('error') == true) {
//     console.log(`Error is present is in the array`)
//     for (let i = 0; i < temperatures.length; i++){
//         if (temperatures[i] !== `error`){
//             newTempArray.push(temperatures[i]);
//         }else {
//             continue;
//         }
//     }
// }
//
// console.log(newTempArray);

//Turning the above array copy neglecting 'error' into function expression and assign it to a new array
// let newTempArray = [];

// let tempArray = function(temps) { 
//     tempArray = []; 
//     // console.log(typeof(tempArray)) 
//     if (temps.includes('error') == true) {
//         console.log(`Error is present is in the array`)
//         for (let i = 0; i < temps.length; i++){
//             if (temps[i] !== `error`){
//                 tempArray.push(temps[i]);
//             }else {
//                     continue;
//             }
//         }       
//     }
//     return tempArray;
// }

// console.log(newTempArray = tempArray(temperatures));

// Turning the above function expression to function declaration 
function newTempArray(temps) { 
    let tempArray = [];       
    if (temps.includes('error') == true) {
        // console.log(`Error is present is in the array`)
        for (let i = 0; i < temps.length; i++){
            if (temps[i] !== `error`){
                tempArray.push(temps[i]);
            }else {
                    continue;
            }
        }       
    }
    return tempArray;    
}

const newArrangedArray = newTempArray(temperatures);
console.log(newArrangedArray);

//Find the max value of the array


function maxValueFinder(tempArray) {
    let arrayMaxValue = tempArray[0];
    for (let i = 1; i < tempArray.length; i++) {
        if (arrayMaxValue < tempArray[i]) {
            arrayMaxValue = tempArray[i]
        }
    }
    return arrayMaxValue;
}

const maxValue = maxValueFinder(newArrangedArray);
// console.log(maxValue);


//Find the min value of the array
function minValueFinder(tempArray) {
    let arrayMinValue = tempArray[0];
    for (let i = 1; i < tempArray.length; i++) {
        if (arrayMinValue > tempArray[i]) {
            arrayMinValue = tempArray[i]
        }
    }
    return arrayMinValue;
}

const minValue = minValueFinder(newArrangedArray);
// console.log(minValue);


//Find the amplitude (maxValue - minValue)
function amplitudeCalc(maxValue, minValue) {
    const amplitude = maxValue - minValue;
    return amplitude;
}

const arrayAmplitude = amplitudeCalc(maxValue, minValue);
console.log(`The amplitude of the temperature reading is ${arrayAmplitude}.`);










