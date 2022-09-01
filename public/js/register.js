const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const form = document.querySelector('form.form');

function showPasswordHelp(show) {
    const ulPasswordHelp = document.querySelector('.password-help');

    if (show) {
        ulPasswordHelp.classList.remove('d-none');
    } else {
        ulPasswordHelp.classList.add('d-none');
    }
}

function addInvalidStyle(input, invalid) {

    if (invalid) {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
    }
}

function addMsgOfInvalidField(input, invalid, message=null) {
    let divFormField = input.parentNode; 
    let pError = divFormField.querySelector('.form__error-msg');

    if (invalid) {  
        if (!pError) {
            pError = document.createElement('p');
            pError.classList.add('form__error-msg');   
        }
        
        pError.innerText = message;
        divFormField.insertBefore(pError, input); 
    } else {
        if (pError) pError.classList.add('d-none');
    }
}

function validateEmail() {
    const email = emailInput.value;
    const invalidMessage = "Ingrese un email válido.";
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (emailRegex.test(email)) {
        addInvalidStyle(emailInput, false);
        addMsgOfInvalidField(emailInput, false);
        
        return true;
    }
    addInvalidStyle(emailInput, true);
    addMsgOfInvalidField(emailInput, true, invalidMessage);
    
    return false;
}

function validatePassword() {
    const invalidMessage = "Ingrese una contraseña válida."
    const password = passwordInput.value;
    const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);

    if (passwordRegex.test(password)) {
        addInvalidStyle(passwordInput, false);
        addMsgOfInvalidField(passwordInput, false);
        showPasswordHelp(false);
        return true;
    }

    addInvalidStyle(passwordInput, true);
    addMsgOfInvalidField(passwordInput, true, invalidMessage);
    showPasswordHelp(true);
    return false;
}

function validateName() {
    const invalidMessage = "Ingrese un nombre válido.";
    const name = nameInput.value;
    const minLength = 3;
    console.log('validate name');

    if (name.length >= minLength) {
        addInvalidStyle(nameInput, false);
        addMsgOfInvalidField(nameInput, false, invalidMessage);
        return true;
    }

    addInvalidStyle(nameInput, true);
    addMsgOfInvalidField(nameInput, true, invalidMessage);
    return false;
}

function validateSurname() {
    const invalidMessage = "Ingrese un apellido válido.";
    const surname = surnameInput.value;
    const minLength = 3;
    
    if (surname.length >= minLength) {
        addInvalidStyle(surnameInput, false);
        addMsgOfInvalidField(surnameInput, false, invalidMessage);
        return true;
    }

    addInvalidStyle(surnameInput, true);
    addMsgOfInvalidField(surnameInput, true, invalidMessage);
    return false;
}

function sendForm(e) {
    const emailIsValid = validateEmail();
    const passwordIsValid = validatePassword();
    const nameIsValid = validateName();
    const surnameIsValid = validateSurname();

    if ( emailIsValid && passwordIsValid && nameIsValid && surnameIsValid ) {
        return true;
    }

    e.preventDefault();
    return true;
}

function loadRegister() {
    form.addEventListener('submit', sendForm);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);
    nameInput.addEventListener('blur', validateName);
    surnameInput.addEventListener('blur', validateSurname);
}

window.addEventListener('DOMContentLoaded', loadRegister);