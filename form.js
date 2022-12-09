const form  = getElementById ('form');
const firstName = getElementById ('firstName');
const lastName = getElementById ('lastName');
const email = getElementById ('email');
const userName = getElementById ('userName');
const newPassword = getElementById ('newPassword');
const confirmPassword = getElementById ('confirmPassword');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(string(email).toLowerCase());
    }

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const userNameValue = userName.value.trim();
    const newPasswordValue = newPassword.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(firstName === ''){ 
        setError (firstName, 'First Name is required');
    }else {
        setSuccess(firstName);
    }
    if(lastName === ''){ 
        setError (lastName, 'First Name is required');
    }else {
        setSuccess(lastName);
    }
    if(email === ''){ 
        setError (email, 'First Name is required');
    }else if (!isValidEmail(emailValue)) {
        setError (email, 'Please provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(newPasswordValue === '') {
        setError(password, 'Password is required');
    } else if (newPasswordValue.length < 8) {
        setError(newPassword, 'Password must be atleast 8 characters.')
    } else {
        setSuccess(newPassword);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm password');
    } else if(confirmPasswordValue !== newPasswordValue) {
        setError(confirmPassword, "Password doesn't match");
    } else{
        setSuccess(confirmPassword);
    }
};