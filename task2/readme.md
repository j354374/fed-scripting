:beginner:\
Portfolio Activity - Task 2 – Control Structures\
Name: Christopher Paul Caston\
Student id: j354374

- [ Stage 1: Project setup](#Stage 1:)
- [ Stage 2: Instruction 1](#Stage 2:)
- [ Stage 3: Instruction 2](#Stage 3:)
- [ Stage 4: Instruction 3](#Stage 4:)
- [ References](#references-)

## Stage 1:
&#x1F535;

### directory structure

The project is laid out with the following directory structure:

![Directory structure](readme_files/dir.PNG)

The files clean.css, form.css, styles.css, membership.js and membership.html came from the zip file "Task 2.zip""]" included with the assignment.

## Stage 2: Instruction 1

**Change the discount percentage so that is varies based on the number of years being purchased (that is 10 percent for two or three years, 15 percent for four years and 20 percent for five or more years)**

The first step was to comment out the if statement on lines: 45-48 and then write a switch statement. Please see the following:

![First attempt at writing switch](readme_files/case-attempt1.png)

As there were errors in the code the following result was observed in the browser:

![result](readme_files/case-attempt1-result.png)

Syntax errors were fixed as follows:

![Second attempt at writing switch](readme_files/case-attempt2.png)

The same error was observed.

After checking the w3 schools website the switch statement was rewritten to have more than one case between each break as follows:
![Third attempt at writing switch](readme_files/case-attempt3.png)

We now see the following for each number of years entered:

![first calculation](readme_files/calculation1.png)
![second calculation](readme_files/calculation2.png)\
(Sorry the third screenshot was lost)\
![fourth calculation](readme_files/calculation4.png)
![fifth calculation](readme_files/calculation5.png)
![sixth calculation](readme_files/calculation6.png)

As we see the sixth calculation does not give a discount. Every purchase of membership five years or greater requires the 20% discount.
To achieve this we add an if statement as follows:

![if statement](readme_files/if-statement.png)

We now see the correct output as follows:

![correct-output.png](readme_files/correct-output.png)


## Stage 3: Instruction 2  
**Change the code so that you use a paragraph or span, along with textContent and innerText, rather than a form element to show the calculation cost of the membership.**

In the membership.html file provided the "Cost" is shown in the following div element:

```
<div>
  <label for="cost">Cost</label>
  <input type="text" name="cost" id="cost" disabled>
</div>
```
"The textContent property returns the text with spacing, but without inner element tags." -reference
To use textContent we need to change set an id inside a span tag as follows:

```
<div>
Your membership cost is <span id="cost-print"></span>
</div>
```

We then add something like the following Java-Script code:

```
document.getElementById('cost-print').textContent = cost;
```
So the following lines need to be changed from:

```

        // Show the total amount:
        document.getElementById('cost').value = '$' + cost.toFixed(2);

    } else { // Show an error:
        document.getElementById('cost').value = 'Please enter valid values.';
    }
```
to:

```
// Show the total amount:
document.getElementById('cost-print').textContent = '$' + cost.toFixed(2);

} else { // Show an error:
document.getElementById('cost-print').textContent = 'Please enter valid values.';
}

```    

We now get the following rendered on the page:

![first-page](readme_files/textContent-default.png)\
and when we enter a number and click "Calculate":\
![second-page](readme_files/textContent-calculate.png)

So now we need to do the same with innerText. The innerText property returns just the text, without spacing and inner element tags.
```
// Show the total amount but using innerText:
document.getElementById('cost-print2').innerText = '$' + cost.toFixed(2);
```
and we add the following html:

```
<div>
Your membership cost is <span id="cost-print2">?</span>
</div>
```
This is not working as expected as showing in the following screenshot:

![Not showing result](readme_files/inner-text-not-calc.png)

On closer inspection I hadn't yet added the JavaScript above to the membership.js file.
I have now done so and the code looks like this:

![updated-code](readme_files/updated-code.png)

And the screen looks like this:

![updated-screen](readme_files/updatedagain.png)

## Stage 4: Instruction 3  
**Test your script in at least two browsers and document any debugging plus version control of your script**

The problems experienced were non-trivial and could be fixed with standard troubleshooting and didn't require the use of the JavaScript console. The troubleshooting steps and code changes were included in the previous sections.

I take this opportunity update the text in the HTML file.

I have changed it to:

```
Complete this form to calculate your membership. There's a 10% discount if you enrol for two or three years, a 15% discount for four years and a 20% discount for five or more years!

```
"Enrol" is the spelling in British English.

I have now validated and fixed small coding errors such as in spacing an indentation using [Code Beautify](https://codebeautify.org/jsvalidate).
The line /*jslint browser:true */ was added to let the validator know the code was running in a browser and accessing the DOM.

![finalvalid](readme_files/finalvalidation.png)

The HTMl file was validated using the [W3 validator service](https://validator.w3.org/) and gave the message: **Document checking completed. No errors or warnings to show.**

Please note the below are GIF animations if (are viewing this offline and) you wish see them running please visit: https://github.com/j354374/fed-scripting/blob/master/task2/readme.md

Example running in Firefox:\
![Firefox](readme_files/GIFrecord-Firefox.gif)

Example running in Chrome:\
![Chrome](readme_files/GIFrecord-Chrome.gif)

## References


https://www.w3schools.com/js/js_switch.asp \
https://www.w3schools.com/js/js_if_else.asp \
https://www.w3schools.com/jsref/prop_node_textcontent.asp \
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent \
https://www.w3schools.com/jsref/prop_node_textcontent.asp \
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML \
https://www.w3schools.com/jsref/prop_html_innerhtml.asp 
