// epoch.js

// Call this function when the page has loaded
// and when mouseovers occur:
function btninit() { // this function adds a button (id of epochbtn) after the p element with id of output

  /* Adds Element BEFORE NeighborElement */
  Element.prototype.appendBefore = function (element) {
      element.parentNode.insertBefore(this, element);
  }, false;

  /* Adds Element AFTER NeighborElement */
  Element.prototype.appendAfter = function (element) {
      element.parentNode.insertBefore(this, element.nextSibling);
  }, false;

  /* Typical Creation and Setup A New Orphaned Element Object */
  var btn = document.createElement('button');
  btn.id="epochbtn";
  btn.innerHTML = "Update";

  //NewElement.innerHTML = 'New Element';


  /*  Add NewElement BEFORE -OR- AFTER Using the Aforementioned Prototypes */
btn.appendAfter(document.getElementById('output'));

return btn;
} // End of btninit() function.


function updateDuration() {
    'use strict';



    // Get now:
    var now = new Date();

    // Create the message:
    var message = 'It has been ' + now.getTime();
    message += ' milliseconds since the epoch. (mouseover to update)';

    // Update the page:
    U.setText('output', message);

} // End of updateDuration() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    // Create the event listener:
    U.addEvent(U.$('output'), 'mouseover', updateDuration);
    //U.addEvent(U.$('epochbtn'), 'click', updateDuration);
    //the above line didn't work so instead I defined var btn and returned it from the btninit function


    // Call the function now:
    updateDuration();
   //call the function to render the update button
var btn = btninit();
  console.log(btn);
 // add the event listener for the update button
  btn.addEventListener('click', updateDuration);

};
