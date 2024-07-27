const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phonenumber");
const address = document.getElementById("address");
const pass = document.getElementById("password");
const pass2 = document.getElementById("confirmpassword");
const sub = document.getElementById("sub");
const errfname = document.getElementById("err-fname");
const errlname = document.getElementById("err-lname");
const errmail = document.getElementById("err-email");
const errphone = document.getElementById("err-phone");
const erradd = document.getElementById("err-add");
const errpass = document.getElementById("err-pass");
const errpass2 = document.getElementById("err-pass2");

sub.addEventListener('click', (e) => {
    // Define regex patterns
    const Namec = /^[A-Za-z ]{3,25}$/;
    const EmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneCheck = /^\+?[1-9]\d{1,14}$/;
    const passCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    e.preventDefault();
    // Validate first name
    if (fname.value === '') {
        errfname.innerHTML = 'First name is required';
    } else if (!fname.value.match(Namec)) {
        errfname.innerHTML = 'Valid first name is required'; 
    } else {
        errfname.innerHTML = null; 
    }
    // Validate last name
    if (lname.value === '') {
        errlname.innerHTML = 'Last name is required';
    } else if (!lname.value.match(Namec)) {
        errlname.innerHTML = 'Valid last name is required'; 
    } else {
        errlname.innerHTML = null; 
    }

    // Validate email
    if (email.value === '') {
        errmail.innerHTML = 'Email is required';
    } else if (!email.value.match(EmailCheck)) {
        errmail.innerHTML = 'Enter a valid email address';
    } else {
        errmail.innerHTML = null;
    }

    // Validate phone number
    if (phone.value === '') {
        errphone.innerHTML = 'Phone number is required';
    } else if (!phone.value.match(phoneCheck)) {
        errphone.innerHTML = 'Enter a valid phone number';
    } else if (phone.value.length < 10) {
        errphone.innerHTML = 'Phone number should be at least 10 digits';
    } else {
        errphone.innerHTML = null;
    }

    // Validate address
    if (address.value === '') {
        erradd.innerHTML = 'Address is required';
    } else {
        erradd.innerHTML = null;
    }

    // Validate password
    if (pass.value === '') {
        errpass.innerHTML = 'Password is required';
    } else if (!pass.value.match(passCheck)) {
        errpass.innerHTML = 'Passwords must be includs 8 char and 1 letter, 1 number';
    } else {
        errpass.innerHTML = null;
    }

    if (pass.value === '') {
        errpass2.innerHTML = 'Password confirmation is required';

    } 
    //check password 
    else if (pass.value !== pass2.value) {
        errpass2.innerHTML = 'Passwords do not match';
    } else {
        errpass2.innerHTML = null;
    }
});
