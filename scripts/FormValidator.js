
export class FormValidator{

  constructor(validationOptions, formElement, buttonState){
    this._formSelector = validationOptions.formSelector;
    this._inputSelector = validationOptions.inputSelector;
    this._submitButtonSelector = validationOptions.submitButtonSelector;
    this._inactiveButtonClass = validationOptions.inactiveButtonClass;
    this._inputErrorClass = validationOptions.inputErrorClass;
    this._errorClass = validationOptions.errorClass;
    this._formElement = formElement;
    this._buttonState = buttonState;
  }

  _setEventListeners(){
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input',  () => {
        this._checkInputValidity(this._formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation(){
    this._formElement.addEventListener('submit',  (evt) => {
      evt.preventDefault();
    });
    this._clearAll();
    if (this._buttonState) {
      this._setButtonEnabled(this._formElement.querySelector(this._submitButtonSelector));
    } else {
      this._setButtonDisabled(this._formElement.querySelector(this._submitButtonSelector));
    }
    this._setEventListeners();
  }

  _hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
      {
        return !inputElement.validity.valid;
      }
    });
  }

  _setButtonDisabled(buttonElement){
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  }

  _setButtonEnabled(buttonElement){
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }

  _toggleButtonState(inputList, buttonElement){
      if (this._hasInvalidInput(inputList)){
        this._setButtonDisabled(buttonElement, this._inactiveButtonClass);
      } else {
        this._setButtonEnabled(buttonElement, this._inactiveButtonClass);
      }
  };

  _showInputError (formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError (formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _clearAll(){
    this._formElement.reset();
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    inputList.forEach((inputElement) => {
      this._hideInputError(this._formElement, inputElement);
    });
  };

  _checkInputValidity (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };
}
