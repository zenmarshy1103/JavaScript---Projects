// Learn to code (Debugging)
//- 1) Identify Bug(s)
//- 2) Find the bug
//- 3) Fix the bug
//- 4) Prevent the bug from happening again
"use strict";

//Example - convert Celcius to Kelvin for temperature input 

//Create a function that creates a object  and converts the object temperature value property to kelvin
function convertToKelvin() {
    //construct a object for temperature reading
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degree Celsius'),
    }; 
    
    //Find the bug Check the property type
    //console.log(measurement); // Value is getting a string from the prompt command
    //A better way to view
    console.table(measurement);

    //converting temperaure value to kelvin
    //const kelvin = Number measurement.value + 273; // <- BUG is here
    const kelvin = Number(measurement.value) + 273;  // <- FIX: turning the sting type value from prompt to number
    return kelvin;
    
};




let measureKelvin = convertToKelvin();
console.log(measureKelvin);


//1- Identify Bug
// > Temperature(degree Celcius input): 23 C
// > Kelvin output: 6279 (From console.) - INCORRECT
// > Correct Kelvin output: 296 K

//2- Find the bug
// > Using console.log to check what each of the property is getting
// > value is a string type as it is obtained from the prompt command


//3- Fix the bug
// > turn the input from the prompt command to number type

