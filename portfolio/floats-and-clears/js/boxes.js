let counter;
let html;
let boxarray = [];
var reload = 0;
var strUser;
var e;

function load() {
  html = '<h1>Floats and Clears</h1> <button type="button" onclick="load()">Reload!</button><br>';
counter = 1;
for (i = 1; i <= 10 ; i++) {

// With template strings (es6)
//html = `
//    <div class="box box${counter}"></div>
//`; <-basic idea but expanded with concat and a multi-dimensional array.

if  (reload == 0) {
  //  block of code to be executed if the condition is true
    boxarray = [
      [counter, "none"] ];
} else {

console.log("reloaded");

//html='';

console.log(`box${counter}-properties`);

e = document.getElementById(`box${counter}-properties`);
//var strUser = e.options[e.selectedIndex].text;

if (e != null)
{
strUser = e.options[e.selectedIndex].value;

}
//console.log(e);
console.log(strUser);


/*  will have something like this:
Now to refill the array with the user selected vales we grabbed from the DOM*/
boxarray = [
  [counter, strUser] ];

}

if (counter >= 10)
{
reload = 1;
}
else {
html = html.concat( `<div class="box box${counter} box-${boxarray[0][1]}">
<select name="box${counter}-properties" id="box${counter}-properties">
<option value="none">none</option>
<option value="left">left</option>
<option value="right">right</option>
<option value="clear">clear</option>
</select></div>`);
counter++;
}
}

document.body.innerHTML = html;

}
