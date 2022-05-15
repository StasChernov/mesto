function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
    {
      return !inputElement.validity.valid;
    }
  });
}

function toggleButtonState(inputList, buttonElement, validationOptions){
    if (hasInvalidInput(inputList)){
      buttonElement.classList.add(validationOptions.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(validationOptions.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
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

const checkInputValidity = (formElement, inputElement, validationOptions) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationOptions);
    console.log(inputElement.validationMessage);
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
    const formSaveBtn = formElement.querySelector(validationOptions.submitButtonSelector);
    formSaveBtn.classList.add(validationOptions.inactiveButtonClass);
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationOptions);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
