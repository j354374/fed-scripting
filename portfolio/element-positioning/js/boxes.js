let counter;
let html;
let boxarray = [];
var reload = 0;
var strUser;
var e;
var f;

function load() {
  html = '<h1>Element positioning</h1> <button type="button" onclick="load()">Reload!</button><br>';
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
console.log(`box${counter}-positioning`);  

e = document.getElementById(`box${counter}-properties`);
f = document.getElementById(`box${counter}-positioning`); 

if (e != null)
{
strUser = e.options[e.selectedIndex].value;
strProp = f.options[f.selectedIndex].value;
}
//console.log(e);
//console.log(f);
console.log(strUser);
console.log(strProp);

/*
Now to refill the array with the user selected vales we grabbed from the DOM*/
boxarray = [
  [counter, strUser, strProp] ];

}

if (counter >= 10)
{
reload = 1;
}
else {
html = html.concat( `<div class="box box${counter} box-${boxarray[0][1]}">
<em>float</em>
<select name="box${counter}-properties" id="box${counter}-properties">
<option value="none">none</option>
<option value="left">left</option>
<option value="right">right</option>
<option value="clear">clear</option>
</select>
<em>positioning</em>
<select name="box${counter}-positioning" id="box${counter}-positioning">
<option value="static">static</option>
<option value="relative">relative</option>
<option value="absolute">absolute</option>
<option value="fixed">fixed</option>
<option value="sticky">sticky</option>
</select></div>`);
  
counter++;
}
}

document.body.innerHTML = html;

}
