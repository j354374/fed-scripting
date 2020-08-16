// membership.js
/*jslint browser:true */
// This script calculates the cost of a membership.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {

    // Be strict:
    'use strict';

    // Variables to store the total cost as well as membership type and years:
    var cost, type, years;
    //ar type;
    //var years;

    // Get a reference to the form elements:
    type = document.getElementById('type');
    years = document.getElementById('years');

    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }

    // Check for valid data:
    if (type && type.value && years && (years > 0)) {

        // Determine the base cost:
        switch (type.value) {
        case 'basic':
            cost = 10.00;
            break;
        case 'premium':
            cost = 15.00;
            break;
        case 'gold':
            cost = 20.00;
            break;
        case 'platinum':
            cost = 25.00;
            break;
        } // End of switch.

        // Factor in the number of years:
        cost *= years;

        // Discount multiple years:
      /*  if (years > 1) {
            cost *= .80; // 80%
        } */

        switch (years) {
        case 2:
        case 3:
            cost *= 0.90; // 10% discount
            break;
        case 4:
            cost *= 0.85; // 15% Discount
            break;
        case 5:
            cost *= 0.80; //20% Discount
            break;
        }

        if (years >= 6) {
            cost *= 0.80; //20% Discount
        }

  /*      // Show the total amount:
        document.getElementById('cost').value = '$' + cost.toFixed(2);

    } else { // Show an error:
        document.getElementById('cost').value = 'Please enter valid values.';
    } */

    // Show the total amount:
        document.getElementById('cost-print').textContent = '$' + cost.toFixed(2);
    // Show the total amount but using innerText:
        document.getElementById('cost-print2').innerText = '$' + cost.toFixed(2);

    } else { // Show an error:
        document.getElementById('cost-print').textContent = 'Please enter valid values.';
    }

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;
