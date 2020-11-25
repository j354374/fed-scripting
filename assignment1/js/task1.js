// Portfolio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2).
*/

// Function called when the form is submitted.
// Function performs the calculations and returns false.
function onSubmit(event) {
  event.preventDefault();
  calculate();
}

function findFactorial(fancynumber) {

  console.log("function findFactorial has started");
  var num = fancynumber;
  var fact = 1;

  //loop till the iterator i equals to number
  var i;
  for (i = 1; i <= num; i++) {

    //formula to calculate factorial is to
    //multiply the iterator i value with fact value.
    fact = fact * i;
    console.log(i);
    console.log(fact);

    //put the below lines of code out of this 'for loop' to show only the total value
    document.getElementById("factorial").value = fact;
  } //end for loop
} //end function

function calculate() { //start function calculate


  // For storing the factorial, squared and cubed results:


  console.log("calc started.");
  // Get references to the form value:
  const f = document.forms.main;
  var fancynumber = f.numInput.value;
  console.log(fancynumber);
  alert("You entered: " + fancynumber + "!");
  // Add validation here later!
  if (isNaN(fancynumber) || fancynumber < 1 || fancynumber > 50) {
    alert("Input is not valid!");
    return;
  } else {

    console.log("else");
    /* testing code */

    // Calculate the factorial results:
    //HINT: the factorial of 0 is 1.

    var num = fancynumber;

    findFactorial(num);


  } // end else



  findFactorial(fancynumber);


  // Calculate the squared results:

  function findSquare() { //start function
    //const f = document.forms.main;
    //var fancynumber = f.numInput.value;
    console.log(fancynumber);
    console.log("findSquare function started");
    var fancySquare = Math.pow(fancynumber, 2);
    console.log(fancySquare);
    document.getElementById("squared").value = fancySquare;
  } //end function

  findSquare(f, fancynumber);
  // Calculate the cubed results:


  function findCubed() { //start function
    //const f = document.forms.main;
    //var fancynumber = f.numInput.value;
    console.log(fancynumber);
    console.log("findCubed function started");
    var fancyCubed = Math.pow(fancynumber, 3);
    console.log(fancyCubed);
    document.getElementById("cubed").value = fancyCubed;
  } //end function

  findCubed(f, fancynumber);

  // Return false to prevent submission:
  //return false;
  //event.preventDefault();

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
  'use strict';
  // Add an event listener to the form:

  //document.getElementById("calcBtn").addEventListener("click", calculate);
  const f = document.forms.main; // <- html form
  f.calcBtn.addEventListener("click", onSubmit); // <- button listener



} // End of init() function.

// Assign an event listener to the window's load event:


window.onload = init;
