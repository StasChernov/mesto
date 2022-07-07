import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
  }

  renderLoading(isLoading){
    if (isLoading) {
      this._btnSubmit.textContent = 'Сохранение ...'
    } else {
      this._btnSubmit.textContent = 'Сохранить'
    }
  }

  _getInputValues(){
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners(){
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  setInputValues(data){
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close(){
    this._formElement.reset();
    super.close();
  }

}
