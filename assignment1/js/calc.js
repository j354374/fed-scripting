/* calc.js */

console.log("Hello");


function echo(fancynumber) {
    alert("You entered: " + fancynumber + "!");
 
/* if (Number.isInteger(fancynumber)) {
    alert("That's an integer!");
} else {
    alert("That's not a integer!");
}   */

 // If x is Not a Number or less than one or greater than 50
  if (isNaN(fancynumber) || fancynumber < 1 || fancynumber > 50) {
    alert("Input is not valid!");
  } else {
     /*alert("Input is OK!"); */
     /* document.getElementById("factorial").disabled = false; */
    /*  document.getElementById("factorial").value = "1"; */
      
      /* testing code */
      function findFactorial(fancynumber){
		
	        console.log("function findFactorial has started");
		var num = fancynumber;
		var fact = 1;
		
		//loop till the iterator i equals to number
		for (i = 1; i <= num; i++){
                         
			//formula to calculate factorial is to 
			//multiply the iterator i value with fact value.			
			fact = fact * i;
                         console.log(i);
			 console.log(fact);
		
			//put the below lines of code out of this 'for loop' to show only the total value
            
			document.getElementById("factorial").value(fact);
		}
	}
      
      /*testing code */
        
  }    
    
    
  /*  if (typeof fancynumber !== 'number')
   alert("That's not a number!");*/

    
}
