:beginner:\
Portfolio Activity - Task 1 – Simple Variables\
Name: Christopher Paul Caston\
Student id: j354374


- [Stage 1: Laying the foundations](#stage-1-)
- [Stage 2: Adding javascript functions](#stage-2--adding-javascript-functions)
- [Stage 3: Checking input](#stage-3--checking-input)
- [Stage 4: Doing the math](#stage-4--doing-the-math)
- [References](#references)


## Stage 1: Laying the foundations
&#x1F535;

### Directory structure

The project is layed out with the following directory structure:

![Directory structure](readme_files/dir.PNG)



First the javascript application is built by creating the html document backbone and we introduce functionality in different stages.
In stage 1 this is just html with the use of the table function [[1]](#1) with the &lt;tr&gt; (table row) and &lt;td&gt; (table data) tags.
We have one text input box [[2]](#2) but no button as yet.

![stage1](readme_files/screenshot1.PNG)

In the next part code is entered to create the HTML button. This is using the &lt;button&gt; tag. [[3]](#3) 


![stage1-part2](readme_files/screenshot2.PNG)

Currently we can enter text and press the button but no input detection or calculation takes place.
 

We have now added the disabled inputs [[4]](#4) that will (eventually) show the number in factorial, squared and cubed.

Please see the following screenshot:

![stage1-part3](readme_files/screenshot3.PNG)

Here is the code (from index.html) so far:

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Simple Calculator</title>
</head>
<body>
<header>
</header>
<nav></nav>
<main>

 <table style="width:100%">
  
 <tr>  <th>Fancy Calculator</hd></tr>
 <td>
 <form>
 <label for="number">Please enter a number between 0 and 50.</label><br>
 <input type="text" id="number" name="number"><br>
 <button type="button">Caclulate!</button> <br>
 <input type="text" id="factorial" name="factorial" disabled>!<br>
 <input type="text" id="squared" name="squared" disabled>&sup2;<br>
 <input type="text" id="cubed" name="cubed" disabled>&#xB3;<br>    
 </form> 
 </td>
 </tr>
  
</table> 
  
  
</main>
<footer>
<!--- Script 2.1 - template.html -->
<!--- script src="js/calc.js"> 
</footer>
</body>
</html>

```
Please note the escape characters included for factorial, squared and cubed are from HTML 4 Entities. [[5]](#5) 

## Stage 2: Adding javascript functions
&#x1F535;


First we change the code in index.html to add onclick (onclick Event) [[6]](#6) = function() [[7]](#7) as follows:


```
<button type="button" onclick="echo(number.value)">Calculate!</button><br>
```

and enabled the script src using the following tag &lt;script&gt; [[8]](#8).

```
<script src="js/calc.js"> 
```

and we create a file called calc.js with the following:

```
//calc.js

function functionName( echo ){
	alert('You entered, ' + number + '!');
}
```


Unfortunately this doesn't show the alert we are expecting. To debug this I have opened the debug console in the chrome browser and found the following under the console table.

![stage2](readme_files/screenshot4.PNG)



First I noticed some errors in my js code. I have changed the function code to:

```
function echo( number ) {
	alert("You entered", + number + "!");
```

and I have added a debug line:

```
console.log("Hello");
```

Unfortunately it still can't find the "echo" function and it also isn't showing the console log message.

I have changed the script src as follows:

```
<script src="/js/calc.js"> 
```

Unfortunately this still didn't work. However from the console log under the HTML inspector I noticed the following:

![stage2-part2](readme_files/screenshot5.PNG)

It appears that all the code is commented out!

My text editor (github Ed file) must not be adding a new line code.

I have changed the type of comment and my file now looks like this:

```
`/* calc.js */

console.log("Hello");

function echo( number ) {
	alert("You entered", + number + "!");
}


```

After reloading the page I find yet another error:

![stage2-part3](readme_files/screenshot6.PNG)

I have changed the script src in index.html back to

```
<!--- Script 2.1 - template.html -->
<script src="js/calc.js"> 
```

Unfortunately we are still getting the original error about the echo function.

I have changed the index.html code as follows to remove the ';' sign:

```
 <button type="button" onclick="javascript:echo(number.value)">Calculate!</button><br>
 ```


I also found that their was no terminating html tag for script. We now have the following in index.html:

```
<script src="js/calc.js"></script>
```

Now we are getting the alert! 
-
![stage2-part4](readme_files/screenshot7.PNG)

It still wasn't quite right as per the screenshot above so I have adjusted the alert code as follows:

```
function echo(number) {
    alert("You entered: " + number + "!");
}
```

Now we are getting there:

![stage2-part5](readme_files/screenshot8.PNG)


## Stage 3: Checking input
&#x1F535;

We still need to do the following to check the input. We need to make sure it is a number, we need to make sure it is a integer (that is a whole number) and we need
to make sure it is between and 0 and 50.

First we add the following code:

```
if(Number.isNaN(number)) num = 1; 
    alert("That's not a number!"); 
```    

However we find that it gives us the alert no matter if we type a number or a letter!
This is frustrating but there is an explanation.  


> Number.isNaN() both test if a value is (or, in the case of isNaN(), can be converted to a number-type value that represents) the NaN value. In other words, "NaN" does not simply mean "this value is not a number", it specifically means "this value is a numeric Not-a-Number value according to IEEE-754".

So lets try something else:

```
if (typeof number === 'number')
   alert("That's not a number!"); 
```

At this point things are getting very confusing. So we check the best practice for naming rules and variables.

>Try to make your variable names look as different from JavaScript's keywords and other built-in terms (such as alert) as possible. This helps avoid the confusion that can arise when you look at a term and you can't remember if it's a variable or a JavaScript wor. Use Multiple-Word Names - This helps a bit because most JavaScript terms are single words.


Let's rename our variable "number" to "fancynumber".

The code in index.html was changed to:

```
 <label for="fancynumber">Please enter a number between 0 and 50.</label><br>
 <input type="text" id="fancynumber" name="fancynumber"><br>
 <button type="button" onclick="echo(fancynumber.value)">Calculate!</button><br>
 ```
 
 The function in calc.js was changed to the following:
 
 ```
 function echo(fancynumber) {
    alert("You entered: " + fancynumber + "!");
 ```   
 and Number.isNaN was removed.
 
We next add this if statement to: 

```
if (typeof fancynumber !== 'number')
   alert("That's not a number!");
```
!== is a javascript operator that checks for:
>not equal value or not equal type [[999]](#999).

Before going any further lets validate our HTML using the [W3C mark-up validation service](https://validator.w3.org/).
We can see two errors as follows:
![stage3](readme_files/screenshot9.PNG)

In order to connect the validation errors lines 18 and 19 have been changed as follows:

```
<tr><th>Fancy Calculator</th></tr>
<tr><td>
```

From the validator we now get:

```
Document checking completed. No errors or warnings to show.
```


Unforuntately it appears the typeof code isn't working for us either but we can actually check the validation in HTML. We change line 22 of index.html as follows:

```
<input type="number" id="fancynumber" name="fancynumber" min="1" max="50"><br>

```
![stage3-partx](readme_files/screenshot10.PNG)

This creates up and down arrows and prevents typing letters or special characters in but still allows numbers out of range such as negative numbers or numbers above 50 to be typed. It allows 'e', '.' and '-' as those characters are often used in math. There may be other characters too but this means that javascript needs to be used for further input validation.

![stage3-partx](readme_files/screenshot11.PNG)

Additionally the Midori browser lets the user type anything they want.

![stage3-partx](readme_files/screenshot12.PNG)

typeof has been commented out and an if statement has been entered that uses Number.isInteger:


```
/* calc.js */

console.log("Hello");

function echo(fancynumber) {
    alert("You entered: " + fancynumber + "!");
 
 if (Number.isInteger(+fancynumber)) {
    alert("That's an integer!");
} else {
    alert("That's not a integer!");
}   
       
    
  /*  if (typeof fancynumber !== 'number')
   alert("That's not a number!");*/

    
}
```
Another code segment has been found to work properly. This is from the example provided by w3 schools.

```
// If x is Not a Number or less than one or greater than 50
  if (isNaN(fancynumber) || fancynumber < 1 || fancynumber > 50) {
    alert("Input is not valid!");
  } else {
     /*alert("Input is OK!"); */
      document.getElementById("factorial").disabled = false;
    /*  document.getElementById("factorial").value = "1"; */
        
  }    
  
  ```

This changes the input text box to enabled provided a valid input is entered as shown in the following screenshot:

![stage3-partx](readme_files/screenshot13.PNG)

## Stage 4: Doing the math
&#x1F535;

```
console.log(factorial(fancynumber));

```
![stage4-partx](readme_files/screenshot14.PNG)


```
fancyfactorial = factorial(fancynumber);
```

![stage4-partx](readme_files/screenshot15.PNG)

As there is no inbuilt factorial function in javascript we will need to write our own function. From the assignment sheet:
>A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).

We then desgin a nassi shniederman diagram (psuedocode) to find the factorial via an iterative for loop.

![nassi shneiderman diagram- factorial](readme_files/factorial-ns.PNG)

We can now write our JavaScript code as follows:
:loop:

```
* testing code */
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
 ```     
```
findFactorial(fancynumber);
```

![stage4-partx](readme_files/screenshot16.PNG)

In order to help troubleshoot the code for now the line has been commented out:

```
/*	document.getElementById("factorial").value(fact);*/
```


The following is now produced in the console. 
:flashlight:

![stage4-partx](readme_files/screenshot17.PNG)


The line that was commented out has been rewritten as:


```
document.getElementById("factorial").value = fact;
```


----
Please note the above line marks a break of about 3 months. I am now continuing with the assignment.

Line 24 in the HTML is now changed from:

 ```
 <button type="button" onclick="echo(fancynumber.value)">Calculate!</button><br>
 ```
 to:
 
 ```  
 <button type="button" id="calc-btn">Calculate!</button><br>
 ```
I have done this to remove all the javascript from the HTML file and use an on-click listening in the JavaScript file. I have also removed commented out code that is no longer used.

I have now changed the code to the following:

```
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
```

Unfortunately this has given us the following output:

![mouse-event](readme_files/mouse-event.png)
![input-invalid](readme_files/invalid.png)



I have decided to start again using the task1.js file included with the assignment. Please see as follows:


```
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
*/

// Function called when the form is submitted.
// Function performs the calculations and returns false.
function calculate(){


		// For storing the factorial, squared and cubed results:
		
		
		
		
		  // Get references to the form value:
		  
		  
		  // Add validation here later!
	
		 // Calculate the factorial results:
		 //HINT: the factorial of 0 is 1.
		 
		 
		 // Calculate the squared results:
		 
		 
		 
		  // Calculate the cubed results:
		  
		  
		  
		  
		  //display factorial, squared and cubed results
		  
		  
	// Return false to prevent submission:
	return false; 
	
}// End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init(){
    // Add an event listener to the form:
    
document.getElementById('calc-btn').addEventListener("click", calculate);

}  // End of init() function.

// Assign an event listener to the window's load event:
```

I will now modify the html file to make operate the same as the one included in the assignment.

It now looks like the following:

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Simple Calculator</title>
<link href="css/task1.css" rel="stylesheet" type="text/css">
</head>
<body>

<main>

<h1>Front-end Development Scripting</h1>
    <h2>Portfolio Task 1: Simple Variables</h2>
    <form name="theForm">
      <fieldset>
        <legend>Fancy Calculator</legend>
        <p>
          <label>
            Please enter a number between 0 and 50</label>
          <input type="number" name="number" id="number" value="0" min="1" max="50" required>
        </p>
        <p>
          <button id="calc-btn">Calculate</button>

          </p>
        <p>
          <label>The Factorial (!) of your number is:
            <input type="text" name="factorial" id="factorial">
          </label>
        </p>
        <p>
          <label>The square (&sup2;) of your number is:
            <input type="text" name="squared" id="squared">
          </label>
        </p>
        <p>
          <label>The cube (&#xB3;) of your number is:
            <input type="text" name="cubed" id="cubed">
          </label>
        </p>
      </fieldset>
    </form>



</main>
<footer>
<!--- Script 2.1 - template.html -->
<script src="js/task1.js"></script>
</footer>
</body>
</html>

```

I have set the javascript as follows:

```
// Portfolio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2).
*/

// Function called when the form is submitted.
// Function performs the calculations and returns false.
function calculate(){


		// For storing the factorial, squared and cubed results:


		console.log("calc started");

		  // Get references to the form value:


		  // Add validation here later!

		 // Calculate the factorial results:
		 //HINT: the factorial of 0 is 1.


		 // Calculate the squared results:



		  // Calculate the cubed results:




		  //display factorial, squared and cubed results


	// Return false to prevent submission:
	return false;
  //event.preventDefault();

}// End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init(){
	  'use strict';
    // Add an event listener to the form:

document.getElementById("calc-btn").addEventListener("click", calculate);

}  // End of init() function.

// Assign an event listener to the window's load event:


window.onload = init;

```

However, there is an issue that the page is refreshing when a value has been entered and the calculate function is not running. This happened despite using return false and use strict.

I am going to make a much simpler html page as follows:

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Simple Calculator</title>
<link href="css/task1.css" rel="stylesheet" type="text/css">
</head>
<body>

<main>

<h1>Front-end Development Scripting</h1>
    <h2>Portfolio Task 1: Simple Variables</h2>

    <form id="main">
  <em>Please enter a number between 0 and 50:</em>
  <input name="numInput" input type="number" min="1" max="50" placeholder="example: 3">
  <button name="addButton">Calculate!</button><p>
  <br><label>The Factorial (!) of your number is:
    <input type="text" name="factorial" id="factorial">
  </label>
</p>
<p>
  <label>The square (&sup2;) of your number is:
    <input type="text" name="squared" id="squared">
  </label>
</p>
<p>
  <label>The cube (&#xB3;) of your number is:
    <input type="text" name="cubed" id="cubed">
  </label>
</p>
</form>



</main>
<footer>
<!--- Script 2.1 - template.html -->
<script src="js/task1.js"></script>
</footer>
</body>
</html>
```

Unfortunately with this I am still getting a type error as follows:

![uncaught type error](readme_files/type-error.png)


I have made further changes to the JavaScript. I have created an event function called onSubmit containing an event.preventDefault function and then starting the calculate function. I have changed the getElement by ID statement too. Please see the following code:

```
// Portfolio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2).
*/

// Function called when the form is submitted.
// Function performs the calculations and returns false.
function onSubmit (event)
{ event.preventDefault()
	calculate()
}


function calculate(){


		// For storing the factorial, squared and cubed results:


		console.log("calc started");

		  // Get references to the form value:


		  // Add validation here later!

		 // Calculate the factorial results:
		 //HINT: the factorial of 0 is 1.


		 // Calculate the squared results:



		  // Calculate the cubed results:




		  //display factorial, squared and cubed results


	// Return false to prevent submission:
	//return false;
  //event.preventDefault();

}// End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init(){
	  'use strict';
    // Add an event listener to the form:

//document.getElementById("calcBtn").addEventListener("click", calculate);
const f = document.forms.main;                    // <- html form
f.calcBtn.addEventListener("click", onSubmit);  // <- button listener




}  // End of init() function.

// Assign an event listener to the window's load event:


window.onload = init;
```


I have now integrated the code from the previous javasctipt file calc.js as follows:

```
// Portfolio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2).
*/

// Function called when the form is submitted.
// Function performs the calculations and returns false.
function onSubmit (event)
{ event.preventDefault()
	calculate()
}


function calculate(){


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

			}    // end function



     findFactorial(fancynumber);

		 // Calculate the squared results:



		  // Calculate the cubed results:




		  //display factorial, squared and cubed results


	// Return false to prevent submission:
	//return false;
  //event.preventDefault();

}// End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init(){
	  'use strict';
    // Add an event listener to the form:

//document.getElementById("calcBtn").addEventListener("click", calculate);
const f = document.forms.main;                    // <- html form
f.calcBtn.addEventListener("click", onSubmit);  // <- button listener



}  // End of init() function.

// Assign an event listener to the window's load event:


window.onload = init;
```

and the factorial is displayed as follows:

![factorial](readme_files/factorial.png)

I have now used the Javascript Math function with pow (power of) to build functions to get the square and the cubed of the number. 
```
 function findSquare(fancynumber) { //start function
	 console.log("findSquare function started");
	var fancySquare = Math.pow(4,2);
	console.log(fancySquare);
	document.getElementById("squared").value = fancySquare;
 } //end function

findSquare();
		  // Calculate the cubed results:


			function findCubed(fancynumber) { //start function
			console.log("findCubed function started");
			var fancyCubed = Math.pow(4,3);
			console.log(fancyCubed);
			document.getElementById("cubed").value = fancyCubed;
			} //end function

findCubed();
```


Unfortunately there is still an issue as the fancynumber vairable was not being used in the square and cubed functions and instead math.pow was running on hard coded numbers.

![incomplete](readme_files/complete.png)


This has now been fixed as following:

```
  // Calculate the squared results:

    function findSquare(fancynumber) { //start function
      const f = document.forms.main;
      var fancynumber = f.numInput.value;
      console.log(fancynumber);
        console.log("findSquare function started");
        var fancySquare = Math.pow(fancynumber, 2);
        console.log(fancySquare);
        document.getElementById("squared").value = fancySquare;
    } //end function

    findSquare();
    // Calculate the cubed results:


    function findCubed(fancynumber) { //start function
        const f = document.forms.main;
        var fancynumber = f.numInput.value;
        console.log(fancynumber);
        console.log("findCubed function started");
        var fancyCubed = Math.pow(fancynumber, 3);
        console.log(fancyCubed);
        document.getElementById("cubed").value = fancyCubed;
    } //end function

    findCubed();
    
 ```

As you can see it is now working...

![working](readme_files/working.png)

:fireworks:


## References

<a id="1">[1]</a> 
W3 schools (2020). \
Define an HTML Table \
https://www.w3schools.com/html/html_tables.asp

<a id="2">[2]</a> 
W3 schools (2020). \
HTML Forms \
https://www.w3schools.com/html/html_forms.asp

<a id="3">[3]</a> 
W3 schools (2020). \
HTML button Tag \
https://www.w3schools.com/tags/tag_button.asp

<a id="4">[4]</a>	
W3 schools (2020). \
HTML input disabled Attribute \
https://www.w3schools.com/tags/att_input_disabled.asp

<a id="5">[5]</a>
W3 schools (2020). \
Complete HTML 4 Entity Reference \
https://www.w3schools.com/charsets/ref_html_entities_4.asp

<a id="6">[6]</a>
W3 schools (2020). \
onclick Event \
https://www.w3schools.com/jsref/event_onclick.asp

<a id="7">[7]</a>
W3 schools (2020). \
JavaScript functions \
https://www.w3schools.com/js/js_functions.asp

<a id="8">[8]</a>
W3 schools (2020). \
The HTML script Tag
https://www.w3schools.com/html/html_scripts.asp

<a id="999">[999]</a> 
W3 schools (2020). \
JavaScript Operators Reference,\
Comparison Operators\
https://www.w3schools.com/jsref/jsref_operators.asp






references





https://www.codegrepper.com/code-examples/delphi/calculate+square+of+a+number+js

https://stackoverflow.com/questions/7789521/how-to-link-external-javascript-file-onclick-of-button

https://www.w3schools.com/js/js_comments.asp

https://www.w3schools.com/jsref/jsref_isnan_number.asp

https://stackoverflow.com/questions/25176459/is-number-isnan-more-broken-than-isnan

https://www.w3schools.com/jsref/jsref_isinteger.asp

https://www.informit.com/articles/article.aspx?p=131025&seqNum=3

https://www.w3schools.com/jsref/jsref_operators.asp

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number

https://www.w3schools.com/tags/att_input_type_number.asp

https://www.geeksforgeeks.org/form-validation-using-html-javascript/

https://www.w3schools.com/js/js_if_else.asp

https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number

https://www.w3schools.com/jsref/met_document_getelementbyid.asp

https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-1.php

https://www.educative.io/edpresso/how-to-find-the-factorial-of-a-number-in-javascript

https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript

https://www.w3schools.com/js/js_function_invocation.asp

https://purecss.io/

math object:

https://www.w3schools.com/js/js_math.asp
