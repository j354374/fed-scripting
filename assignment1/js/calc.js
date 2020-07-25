/* calc.js */

console.log("Hello");

function echo(fancynumber) {
    alert("You entered: " + fancynumber + "!");
 
/* if (Number.isInteger(fancynumber)) {
    alert("That's an integer!");
} else {
    alert("That's not a integer!");
}   */

 // If x is Not a Number or less than one or greater than 10
  if (isNaN(fancynumber) || fancynumber < 1 || fancynumber > 50) {
    alert("Input is not valid!");
  } else {
     /*alert("Input is OK!"); */
      document.getElementById("factorial").disabled = false;
    /*  document.getElementById("factorial").value = "1"; */
        
  }    
    
    
  /*  if (typeof fancynumber !== 'number')
   alert("That's not a number!");*/

    
}
