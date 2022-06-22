export class Card {
  constructor(cardData, cardTemplateSelector, handleCardClick){
    this._cardName = cardData.name;
    this._cardLink = cardData.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._cardElement = this._getElement();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._cardTitle = this._cardElement.querySelector('.element__title');
    this._cardTrashBtn = this._cardElement.querySelector('.element__trash');
    this._cardLikeBtn = this._cardElement.querySelector('.element__like');
  }

  _getElement(){
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _likeCard(event){
    console.log(event);
    event.target.classList.toggle('element__like_liked');
  };

  _deleteCard(){
    this._cardElement.remove();
  };

  _setEventListeners(){
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._cardName, this._cardLink));
    this._cardTrashBtn.addEventListener('click', () => this._deleteCard());
    this._cardLikeBtn.addEventListener('click', this._likeCard);
  }

  createCard(){
    this._cardTitle.textContent = this._cardName;
    this._cardImage.src = this._cardLink;
    this._cardImage.alt = this._cardName;
    this._setEventListeners();
    return this._cardElement;
  }
}
