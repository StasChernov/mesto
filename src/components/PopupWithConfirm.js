import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setSubmitAction(action){
    this._handleFormSubmit = action;
  }

  renderLoading(isLoading){
    if (isLoading) {
      this._btnSubmit.textContent = 'Удаление ...'
    } else {
      this._btnSubmit.textContent = 'Удалить'
    }
  }

  setEventListeners(){
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
