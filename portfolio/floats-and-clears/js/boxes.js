let counter;
let html;
let boxarray = [];
var reload = 0;


function load() {
  html = '<h1>Floats and Clears</h1> <button type="button" onclick="load()">Reload!</button><br>';
counter = 1;
for (i = 1; i < 10 ; i++) {

// With template strings (es6)
//html = `
//    <div class="box box${counter}"></div>
//`; <-basic idea but expanded with concat and a multi-dimensional array.

if  (reload == 0) {
  //  block of code to be executed if the condition is true
    boxarray = [
      [counter, "left"] ];
} else {

console.log("reloaded");

//html='';

console.log(`box${counter}-properties`);
console.log(document.getElementById(`box${counter}-properties`));
/*  will have something like this:
  boxarray = [
    [counter, document.getElementById(`box${counter}-properties`)]
];*/

}

if (counter >= 9)
{
reload = 1;
}
else {
html = html.concat( `<div class="box box${counter} box-${boxarray[0][1]}">
<select name="box${counter}-properties" id="box${counter}-properties">
<option value="none">none</option>
<option value="left" selected="selected">left</option>
<option value="right">right</option>
<option value="clear">clear</option>
</select></div>`);
counter++;
}
}

document.body.innerHTML = html;

}
