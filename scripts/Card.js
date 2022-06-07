export class Card {
  constructor(cardData, cardTemplateSelector, handleOpenImage){
    this._cardName = cardData.name;
    this._cardLink = cardData.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleOpenImage = handleOpenImage;
  }

  _getElement(){
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _likeCard(event){
    event.target.closest('.element__like').classList.toggle('element__like_liked');
  };
  
  _deleteCard(event){
    event.target.closest('.element').remove();
  };
  
  createCard(){
    this._cardElement = this._getElement();
    this._cardElement.querySelector('.element__title').textContent = this._cardName;
    this._cardElement.querySelector('.element__image').src = this._cardLink;
    this._cardElement.querySelector('.element__image').alt = this._cardName;

    this._cardElement.querySelector('.element__image').addEventListener('click', () => this._handleOpenImage(this._cardName, this._cardLink));
  
    this._cardElement.querySelector('.element__trash').addEventListener('click', this._deleteCard);
    this._cardElement.querySelector('.element__like').addEventListener('click', this._likeCard);
    return this._cardElement;
  }
}