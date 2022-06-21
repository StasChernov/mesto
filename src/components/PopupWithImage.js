import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector){
    super(popupSelector);
    this._popupImageCard = this._popup.querySelector('.popup__image');
    this._popupImageTitle = this._popup.querySelector('.popup__image-title');
  }

  open (cardName, cardLink){
    this._popupImageCard.src = cardLink;
    this._popupImageCard.alt = cardName;
    this._popupImageTitle.textContent = cardName;
    super.open();
  }

}
