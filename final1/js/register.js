// - register.js
/* 'jshint es:version6'*/
// This script validates a form.

//globals
   //make a link to each from elementById
    const form = document.getElementById('form');

    const email = document.getElementById('email');

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');
    const reason = document.getElementById('reason');
    const terms = document.getElementById('terms');
    const comments = document.getElementById('comments');


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
    const reasonValue = reason.value;
    const zipValue = zip.value.trim();
//    let termsValue = terms.value;
    const commentsValue = comments.value;

    var submitReady = true;

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name cannot be blank');
        submitReady = false;
    } else if (!isfirstName(firstNameValue)) {

        setErrorFor(firstName, 'Not a valid first name');
        submitReady = false;
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be blank');
        submitReady = false;
    } else if (!islastName(lastNameValue)) {

        setErrorFor(lastName, 'Not a valid last name');
        submitReady = false;
    } else {
        setSuccessFor(lastName);
    }



    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        submitReady = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        submitReady = false;
    } else {
        setSuccessFor(email);
    }



    if (phoneValue === '') {
        setErrorFor(phone, 'Phone cannot be blank');
        submitReady = false;
    } else if (!isPhone(phoneValue)) {
        setErrorFor(phone, 'Not a valid Aust phone number. Must be 10 digits including area code.');
        submitReady = false;
    } else {
        setSuccessFor(phone);
    }


    if (cityValue === '') {
        setErrorFor(city, 'City name cannot be blank');
        submitReady = false;
    } else {
        setSuccessFor(city);
    }

    if (stateValue === "NA") {
        setErrorFor(state, 'Please select a state');
        submitReady = false;
    } else {
        setSuccessFor(state);
    }

    if (zipValue === "") {
        setErrorFor(zip, 'Please enter a zip code');
        submitReady = false;
    } else if (!isZip(zipValue)) {
        setErrorFor(zip, 'Not a valid Aust zip code');
        submitReady = false;
    } else {
        setSuccessFor(zip);
    }

    if (reasonValue === "NA") {
        setErrorFor(reason, 'Please select a reason');
        submitReady = false;
    } else {
        setSuccessFor(reason);
    }

    if (commentsValue === '') {
        tsetErrorFor(comments, 'Comments cannot be blank');
        submitReady = false;
    } else {
        tsetSuccessFor(comments);
    }


    if (!terms.checked) {
       setErrorFor(terms, 'Please agree to the terms');
        submitReady = false;
    } else {
        setSuccessFor(terms);
    }

   console.log(submitReady);

   if (submitReady == true ) {
     form.submit();
   }



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


function tsetErrorFor(textarea, message) {
    const formControl = textarea.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function tsetSuccessFor(textarea) {
    const formControl = textarea.parentElement;
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


    //add the event listeners and javascript code for tooltips:

    var tooltips = document.querySelectorAll('.tooltip span');

    window.onmousemove = function(e) {
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].style.top = '440px';
            tooltips[i].style.left = '30px';
        }
    };



    //add an event listener to the form. On submit call function e and stop the page from reloading
    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();

    });

};
