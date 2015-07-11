//####################################################################################
// 1. Problem
//####################################################################################

var mixedArray = ['Dog', 0, undefined, "multiple words", NaN, 10, false, true, 1, null];

//Create a function called 'falsyFilter' that will remove all of the falsy values from 
//the above array and return a new array that contains only the truthy values 
//(in the same order). Expected: ['Dog', "multiple words", 10, true, 1];

//####################################################################################
// 2. Problem
//####################################################################################

//Write a function called makeCounter that creates a closure around a variable. 
//This variable should be returned from the function and increment by one every 
//time the count() function is called.

// Code Here

  var count = makeCounter();
  
var firstCall = count();  // firstCall = 1
var secondCall = count(); // secondCall = 2;
var thirdCall = count();  // thirdCall = 3

//####################################################################################
// 3. Problem
//####################################################################################

var numCalled = 0;
// Write a function called 'outer' that takes in another function as a parameter and 
//returns a new function that when invoked the first time returns "Success!!!" all 
//other times that it is called it should return "Can't be called". 

//Code Here

var callMeOnce = function() { //Don't change this function
  numCalled++; 
  return "Success!!!";
}
  
var inner = outer(callMeOnce);

var firstCall = inner(); //firstCall = "Success!!!"
var secondCall = inner(); //secondCall = "Can't be called"
var thirdCall = inner(); //thirdCall = "Can't be called"
var fourthCall = inner(); //fourthCall = "Can't be called"

//####################################################################################
// 4. Problem
//####################################################################################

// Write a function called 'fnCounter' that accepts two parameters. The first parameter 
// will be an anonymous function and the second parameter, 'N', will be a number. 
// In 'fnCounter', allow the anonymous function to be invoked 'N' number of times. 
//After it's been invoked 'N' times, return 'STOP'.
          
// Code Here

var counter = 0; //This is for testing purposes.
var paramFn = function() { // This is the function to be passed into 'fnCounter'
  counter++;			// Don't edit this function!
}

var stopMessage = fnCounter(paramFn, 5); // Don't edit this line! Should call the param1 function 5 times then return 'STOP'.