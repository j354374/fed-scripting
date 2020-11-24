// Script 8.8 - events.js

function infoinit() {
// Render new div, label and textarea
const newDiv = document.createElement("div");
const fieldEl = document.getElementsByTagName("fieldset")[0];
const newLabel = document.createElement("label");
newLabel.innerHTML = "Event Registered";
console.log(fieldEl);

console.log(newDiv);
fieldEl.appendChild(newDiv);
newDiv.appendChild(newLabel);


const newEl = document.createElement("textarea");
newEl.id = "textarea";
newEl.innerHTML = "none";
newEl.disabled = true; // set the boolean attribute for disabled to true as it can't be done by setAttribute
fieldEl.appendChild(newEl); // render the new element
return newEl;
}


// Function called when events occur.
// Function reports the event type and target.
function reportEvent(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Get the event target:
    var target = e.target || e.srcElement;

    // Establish the output message:
    var msg = target.nodeName + ': ' + e.type + '\n';

    // Add the output to the textarea:
    U.$('output').value += msg;

} // End of reportEvent() function.

// This function is called when the form is submitted.
// It adds and removes event handlers
// and returns false to prevent submission.
function setHandlers() {
    'use strict';

    // List of possible events:
    var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];

    // Add or remove event handlers accordingly:
    for (var i = 0, count = events.length; i < count; i++) {
        var checkbox = U.$(events[i]); // Get the element.
        if (checkbox.checked) { // Is it checked?
            U.addEvent(document, events[i], reportEvent);
        } else {
            U.removeEvent(document, events[i], reportEvent);
        }
    } // End of FOR loop.

    // Clear the output textarea:
    U.$('output').value = '';

     alert("Form has been submitted");
    // Return false to prevent submission:
    return false;

} // End of setHandlers() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
  U.$('theForm').onsubmit = setHandlers;

    var newEl = infoinit();






document.getElementsByTagName("fieldset")[0].addEventListener("change",function(e)
{

  if(e.target.checked) {
          // Checkbox is checked..
          console.log ("checked");
          console.log(e.target.id);
          newEl.innerHTML = e.target.id;

      } else {
          // Checkbox is not checked..
         console.log ("unchecked");
         console.log(e.target.id);
         newEl.innerHTML = "none";
      }

});



};
