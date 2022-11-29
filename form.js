const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const LastName = document.getElementById("lastName");
const email = document.getElementById("email");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const userName =document.getElementById("username");

const checkUsername = () => {

    let valid = false;

    const min = 5,
        max = 25;

    const username = userName.value.trim();

    if (!isRequired(userName)) {
        showError(userName, 'Username cannot be blank.');
    } else if (!isBetween(userName.length, min, max)) {
        showError(userName, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(userName);
        valid = true;
    }
    return valid;
};
    const checkEmail = () => {
    let valid = false;
    const email1 = email.value.trim();
    if (!isRequired(email1)) {
        showError(email1, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};
const checkPassword = () => {
    let valid = false;


    const password = newPassword.value.trim();

    if (!isRequired(password)) {
        showError(newPassword, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(newPassword, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(newPassword);
        valid = true;
    }

    return valid;
};

    const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPassword.value.trim();
    const password = newPassword.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPassword, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPassword, 'The password does not match');
    } else {
        showSuccess(confirmPassword);
        valid = true;
    }

    return valid;
};
    const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener ("submit", function (e) {
    //prevent the form from submitting
    e.preventDefault();
// validate fields
let isUsernameValid = checkUsername(),
isEmailValid = checkEmail(),
isPasswordValid = checkPassword(),
isConfirmPasswordValid = checkConfirmPassword();

let isFormValid = isUsernameValid &&
isEmailValid &&
isPasswordValid &&
isConfirmPasswordValid;

// submit to the server if the form is valid
if (isFormValid) {

}

});
