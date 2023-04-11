// Learn to code 
//- 1) Understand the problems:
//- 2) Break Up into sub-problems
//-
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
const newTempArray = []

//Copy the array to not include the 'error' 
if (temperatures.includes('error') == true) {
    console.log(`Error is present is in the array`)
    for (let i = 0; i < temperatures.length; i++){
        if (temperatures[i] !== `error`){
            newTempArray.push(temperatures[i]);
        }else {
            continue;
        }
    }
}

console.log(newTempArray);

//Find the max value of the array

//Find the min value of the array


//Find the amplitude










