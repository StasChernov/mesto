const openProfileBtn = document.querySelector('.profile__edit-button');
const openAddPlaceBtn = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupImage = document.querySelector('.popup_type_image');

const closeProfileBtn = popupEditProfile.querySelector('.popup__close');
const closeAddPlaceBtn = popupAddPlace.querySelector('.popup__close');
const closeImageBtn = popupImage.querySelector('.popup__close');

const profileFullName = document.querySelector('.profile__full-name');
const profileAbout = document.querySelector('.profile__about');

const submitProfile = document.querySelector('.popup__form_type_user-profile');
const submitNewCard = document.querySelector('.popup__form_type_add-place');

const profilePopupFullName = document.querySelector('.popup__input_type_full-name');
const profilePopupAbout = document.querySelector('.popup__input_type_about');

const newCardName = document.querySelector('.popup__input_type_place-title');
const newCardLink = document.querySelector('.popup__input_type_place-link');

const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');

const cardContainer = document.querySelector('.elements');

function openPopupEditProfile(popup) {
  profilePopupFullName.value = profileFullName.textContent;
  profilePopupAbout.value = profileAbout.textContent;
  openPopup(popup);
}

function closePopupByEscape(evt){
    if (evt.key !== 'Escape') return;
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
}

function submitProfileForm(event) {
  event.preventDefault();
  profileFullName.textContent = profilePopupFullName.value;
  profileAbout.textContent = profilePopupAbout.value;
  closePopup(popupEditProfile);
}

function likeCard(event){
  event.target.closest('.element__like').classList.toggle('element__like_liked');
};

function deleteCard(event){
  event.target.closest('.element').remove();
};

function submitNewCardForm(event){
  event.preventDefault();
  renderCard({ name: newCardName.value, link: newCardLink.value});
  newCardName.value = "";
  newCardLink.value = "";
  closePopup(popupAddPlace);
};

function openImage(cardData){
  openPopup(popupImage);
  const popupImageCard = popupImage.querySelector('.popup__image');
  const popupImageTitle = popupImage.querySelector('.popup__image-title');
  popupImageCard.src = cardData.link;
  popupImageCard.alt = cardData.name;
  popupImageTitle.textContent = cardData.name;
}

function generateCard(cardData){
  const newCard = cardTemplate.cloneNode(true);

  const titleCard = newCard.querySelector('.element__title');
  titleCard.textContent = cardData.name;

  const imageCard = newCard.querySelector('.element__image');
  imageCard.src = cardData.link;
  imageCard.alt = cardData.name
  imageCard.addEventListener('click', () => openImage(cardData));

  const trashButton = newCard.querySelector('.element__trash');
  trashButton.addEventListener('click', deleteCard);

  const likeButton = newCard.querySelector('.element__like');
  likeButton.addEventListener('click', likeCard);

  return newCard;
}

function renderCard(cardData){
  cardContainer.prepend(generateCard(cardData));
};

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

function closeByClickOnOverlay(){
  const popupsList = document.querySelectorAll('.popup');
  popupsList.forEach(popupElement => {
    popupElement.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) closePopup(popupElement);
    })
  });
}

openProfileBtn.addEventListener('click', () => openPopupEditProfile(popupEditProfile));
openAddPlaceBtn.addEventListener('click',() => openPopup(popupAddPlace));


closeProfileBtn.addEventListener('click', () => closePopup(popupEditProfile));
closeAddPlaceBtn.addEventListener('click',() => closePopup(popupAddPlace));
closeImageBtn.addEventListener('click',() => closePopup(popupImage));

submitProfile.addEventListener('submit', submitProfileForm);
submitNewCard.addEventListener('submit', submitNewCardForm);

closeByClickOnOverlay();




