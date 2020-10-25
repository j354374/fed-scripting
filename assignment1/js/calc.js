/* calc.js */


function echo(fancynumber) {
    alert("You entered: " + fancynumber + "!");
 

 // If x is Not a Number or less than one or greater than 50
  if (isNaN(fancynumber) || fancynumber < 1 || fancynumber > 50) {
    alert("Input is not valid!");
  } else {
     
      
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
            
		
			document.getElementById("factorial").value = fact;
		} //end for loop
	} //end else
      
	  findFactorial(fancynumber);
	  
      /*testing code */
	  
    // now find the sqaure root and cubed

    /*  let fancysquared;
      let fancycubed; 

      fancysquared = math.sqrt(fancynumber);
      fancycubed = math.cbrt(fancynumber);

      document.getElementById("squared").value = fancysquared;
      document.getElementById("cubed").value = fancycubed; */	  
        
  }    // end function
    
    
  /*  if (typeof fancynumber !== 'number')
   alert("That's not a number!");*/

    
}

function init() {

document.getElementById('calc-btn').addEventListener("click", echo);
  
} // End of init() function.




window.onload = init;
