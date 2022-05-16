function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
    {
      return !inputElement.validity.valid;
    }
  });
}

function getButtonDisabled(buttonElement, inactiveButtonClass){
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

function getButtonEnabled(buttonElement, inactiveButtonClass){
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

function toggleButtonState(inputList, buttonElement, validationOptions){
    if (hasInvalidInput(inputList)){
      getButtonDisabled(buttonElement, validationOptions.inactiveButtonClass);
    } else {
      getButtonEnabled(buttonElement, validationOptions.inactiveButtonClass);
    }
};

const showInputError = (formElement, inputElement, errorMessage, validationOptions) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationOptions.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationOptions.errorClass);
};

const hideInputError = (formElement, inputElement, validationOptions) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationOptions.inputErrorClass);
  errorElement.classList.remove(validationOptions.errorClass);
  errorElement.textContent = '';
};

function clearAll(formElement, validationOptions){
  formElement.reset();
  const inputList = Array.from(formElement.querySelectorAll(validationOptions.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationOptions);
  });
};

const checkInputValidity = (formElement, inputElement, validationOptions) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationOptions);
  } else {
    hideInputError(formElement, inputElement, validationOptions);
  }
};

function setEventListeners(formElement, validationOptions){
  const inputList = Array.from(formElement.querySelectorAll(validationOptions.inputSelector));
  const buttonElement = formElement.querySelector(validationOptions.submitButtonSelector);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationOptions);
      toggleButtonState(inputList, buttonElement, validationOptions);
    });
  });
}

function enableValidation(validationOptions){
  const formList = Array.from(document.querySelectorAll(validationOptions.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationOptions);
  });
}

const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

enableValidation(validationOptions);
