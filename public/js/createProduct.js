const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const stockInput = document.getElementById('stock');
const priceInput = document.getElementById('price');
const discountInput = document.getElementById('discount');
const descriptionInput = document.getElementById('description');
const imgInput = document.getElementById('product-img');
const form = document.querySelector('form.form');

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

function validateName() {
    const name = nameInput.value;
    const invalidMessage = "Ingrese un nombre válido.";
    if (name.length > 2) {
        addInvalidStyle(nameInput, false);
        addMsgOfInvalidField(nameInput, false);
        
        return true;
    }
    addInvalidStyle(nameInput, true);
    addMsgOfInvalidField(nameInput, true, invalidMessage);
    
    return false;
}

function validateStock() {
    const stock = stockInput.value;
    const invalidMessage = "Ingrese una cantidad de stock.";
    if (stock > 0) {
        addInvalidStyle(stockInput, false);
        addMsgOfInvalidField(stockInput, false);
        
        return true;
    }
    addInvalidStyle(stockInput, true);
    addMsgOfInvalidField(stockInput, true, invalidMessage);
    
    return false;
}

function validatePrice() {
    const price = priceInput.value;
    const invalidMessage = "Ingrese un precio válido.";
    if (price > 0) {
        addInvalidStyle(priceInput, false);
        addMsgOfInvalidField(priceInput, false);
        
        return true;
    }
    addInvalidStyle(priceInput, true);
    addMsgOfInvalidField(priceInput, true, invalidMessage);
    
    return false;
}

function validateDiscount() {
    const discount = discountInput.value;
    const invalidMessage = "Ingrese un descuento válido.";
    if (discount > 0 && discount < 40) {
        addInvalidStyle(discountInput, false);
        addMsgOfInvalidField(discountInput, false);
        
        return true;
    }
    addInvalidStyle(discountInput, true);
    addMsgOfInvalidField(discountInput, true, invalidMessage);
    
    return false;
}

function validateDescription() {
    const description = descriptionInput.value;
    const invalidMessage = "Ingrese una descripción válida.";
    if (description.length > 10) {
        addInvalidStyle(descriptionInput, false);
        addMsgOfInvalidField(descriptionInput, false);
        
        return true;
    }
    addInvalidStyle(descriptionInput, true);
    addMsgOfInvalidField(descriptionInput, true, invalidMessage);
    
    return false;
}

function validateImg() {
    const img = imgInput.value;
    const invalidMessage = "Ingrese una imagen válida.";
    if (img) {
        addInvalidStyle(imgInput, false);
        addMsgOfInvalidField(imgInput, false);
        
        return true;
    }
    addInvalidStyle(imgInput, true);
    addMsgOfInvalidField(imgInput, true, invalidMessage);
    
    return false;
}


function sendForm(e) {
    const nameValid =validateName();
    const sotckValid =validateStock();
    const priceValid =validatePrice();
    const discountValid = validateDiscount();
    const descriptionValid = validateDescription();
    const imgValid = validateImg();

    if (nameValid && sotckValid && priceValid
    &&  discountValid && descriptionValid && imgValid ) {
        return true;
    }

    e.preventDefault();
    return false;
}


function loadProduct() {
    form.addEventListener('submit', sendForm);
   nameInput.addEventListener('blur', validateName);
   stockInput.addEventListener('blur', validateStock);
   priceInput.addEventListener('blur', validatePrice);
   discountInput.addEventListener('blur', validateDiscount);
   descriptionInput.addEventListener('blur', validateDescription);
   imgInput.addEventListener('blur', validateImg);
}

window.addEventListener('DOMContentLoaded', loadProduct);