
export class FormValidator{

  constructor(validationOptions, formElement){
    this._formSelector = validationOptions.formSelector;
    this._inputSelector = validationOptions.inputSelector;
    this._submitButtonSelector = validationOptions.submitButtonSelector;
    this._inactiveButtonClass = validationOptions.inactiveButtonClass;
    this._inputErrorClass = validationOptions.inputErrorClass;
    this._errorClass = validationOptions.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  enableValidation(){
    this._setEventListeners();
  }
  
  resetValidation(){
    this._hideAll();
    this._toggleButtonState();
  }

  _setEventListeners(){
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input',  () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
      });
    });
  }

  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError (inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      {
        return !inputElement.validity.valid;
      }
    });
  }

  _setButtonDisabled(){
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  _setButtonEnabled(){
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

  _toggleButtonState(){
      if (this._hasInvalidInput()){
        this._setButtonDisabled();
      } else {
        this._setButtonEnabled();
      }
  };

  _hideAll(){
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };
}
