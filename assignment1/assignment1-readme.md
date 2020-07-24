Stage 1:

![stage1](readme_files/screenshot1.PNG)

Stage 2:

![stage2](readme_files/screenshot2.PNG)

Currently we can enter text and press the button but no input detection or calculation takes place.


Stage 3: 

We have now added the disabled inputs that will show the number in factorial, squared and cubed.

Please see the following screenshot:

![stage3](readme_files/screenshot3.PNG)

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



Now to start adding our javascript functions:

First we change the code in index.html as follows:
```
<button type="button" onclick="echo(number.value)">Calculate!</button><br>
```
```
and enabled the script src

<script src="js/calc.js"> 
```

and we create a file called calc.js with the following:

```
//calc.js

function functionName( echo ){
	alert('You entered, ' + number + '!');
}
```





Unfortunately this doesn't show the alert we are expecting. To debug this I have opened the debug console in the chrome browser and found the following console entry.

![stage4](readme_files/screenshot4.PNG)



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

Unfortunately this still didn't work. However from the console log I noticed the following:

![stage5](readme_files/screenshot5.PNG)

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

![stage6](readme_files/screenshot6.PNG)

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
![stage7](readme_files/screenshot7.PNG)

It still wasn't quite right as per the screenshot above so I have adjust the alert code as follows:

```
function echo(number) {
    alert("You entered: " + number + "!");
}
```

references

https://www.w3schools.com/html/html_tables.asp


https://www.w3schools.com/html/html_forms.asp


https://www.w3schools.com/tags/tag_button.asp


https://www.w3schools.com/tags/att_input_disabled.asp

https://www.w3schools.com/charsets/ref_html_entities_4.asp

https://stackoverflow.com/questions/7789521/how-to-link-external-javascript-file-onclick-of-button

https://www.w3schools.com/js/js_functions.asp

https://www.w3schools.com/js/js_comments.asp
