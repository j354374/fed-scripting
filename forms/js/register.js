// - register.js

// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function checkInputs() {
    // trim to remove the whitespaces

    const emailValue = email.value.trim();

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneValue = phone.value.trim();
    const cityValue = city.value.trim();
    const stateValue = state.value.trim();
    const zipValue = zip.value.trim();
    const termsValue = terms.value;


    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name cannot be blank');
    } else if (!isfirstName(firstNameValue)) {

        setErrorFor(firstName, 'Not a valid first name');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be blank');
    } else if (!islastName(lastNameValue)) {

        setErrorFor(lastName, 'Not a valid last name');
    } else {
        setSuccessFor(lastName);
    }



    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }



    if (phoneValue === '') {
        setErrorFor(phone, 'Phone cannot be blank');
    } else if (!isPhone(phoneValue)) {
        setErrorFor(phone, 'Not a valid Aust phone number. Must be 10 digits including area code.');
    } else {
        setSuccessFor(phone);
    }


    if (cityValue === '') {
        setErrorFor(city, 'City name cannot be blank');
    } else {
        setSuccessFor(city);
    }

    if (stateValue === "NA") {
        setErrorFor(state, 'Please select a state');
    } else {
        setSuccessFor(state);
    }

    if (zipValue === "") {
        setErrorFor(zip, 'Please enter a zip code');
    } else if (!isZip(zipValue)) {
        setErrorFor(zip, 'Not a valid Aust zip code');
    } else {
        setSuccessFor(zip);
    }


    if (!terms.checked) {
        setErrorFor(terms, 'Please agree to the terms');
    } else {
        setSuccessFor(terms);
    }


    //!terms.checked ? setErrorFor(terms, 'Please agree to the terms') : setSuccessFor(terms);

} //end function check inputs

//set the form element label to have more than one class e.g. error (red) or success (green)

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isZip(zip) {
    return /^[0-9]{4}$/.test(zip);
}


function isPhone(phone) {
    return /^[0-9]{10}$/.test(phone);
}

function isfirstName(firstName) {
    return /^[A-Z \.\-']{2,20}$/i.test(firstName);
}

function islastName(lastName) {
    return /^[A-Z \.\-']{2,20}$/i.test(lastName);
}


// Establish functionality on window load:
window.onload = function() {
    'use strict';

    //make a link to each from elementById
    const form = document.getElementById('form');

    const email = document.getElementById('email');

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    // Enbable tooltips on the phone number:
    //U.enableTooltips('phone');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');
    const terms = document.getElementById('terms');
    //add the event listeners and javascript code for tooltips:

    var tooltips = document.querySelectorAll('.tooltip span');

    window.onmousemove = function(e) {
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].style.top = '440px';
            tooltips[i].style.left = '30px';
            console.log("1");
        }
    };



    //add an event listener to the form. On submit call function e and stop the page from reloading
    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();
    });

};
