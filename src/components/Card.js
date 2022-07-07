export class Card {
  constructor(cardData, cardTemplateSelector, handleCardClick, handleCardLike, handleCardDelete, userId){
    this._cardName = cardData.name;
    this._cardLink = cardData.link;
    this._cardLikes = cardData.likes;
    this._cardId = cardData._id;
    this._owner = (cardData.owner._id === userId);
    this._userId = userId;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._cardElement = this._getElement();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._cardTitle = this._cardElement.querySelector('.element__title');
    this._cardTrashBtn = this._cardElement.querySelector('.element__trash');
    this._cardLikeBtn = this._cardElement.querySelector('.element__like-button');
    this._cardLikesCounter = this._cardElement.querySelector('.element__likes-counter');
    this._cardLiked = false;
  }

  _getElement(){
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  likeCard(res){
    this._cardLikeBtn.classList.toggle('element__like-button_liked');
    this._cardLiked = !this._cardLiked;
    this._cardLikesCounter.textContent = res.likes.length;
  };

  deleteCard(){
    this._cardElement.remove();
  };

  _setEventListeners(){
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._cardName, this._cardLink));
    if (this._owner) {
      this._cardTrashBtn.classList.add('element__trash_visible');
      this._cardTrashBtn.addEventListener('click', () => this._handleCardDelete(this));
    }
    this._cardLikeBtn.addEventListener('click', () => this._handleCardLike(this));
  }

  createCard(){
    if(this._cardLikes.some(user => user._id === this._userId)){
      this._cardLikeBtn.classList.add('element__like-button_liked');
      this._cardLiked = true;
    }
    this._cardTitle.textContent = this._cardName;
    this._cardLikesCounter.textContent = this._cardLikes.length;
    this._cardImage.src = this._cardLink;
    this._cardImage.alt = this._cardName;
    this._setEventListeners();
    return this._cardElement;
  }
}
