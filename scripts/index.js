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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopupEditProfile(popup) {
  popup.querySelector('.popup__input_type_full-name').value = profileFullName.textContent;
  popup.querySelector('.popup__input_type_about').value = profileAbout.textContent;
  openPopup(popup);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function profilePopupSave(event) {
  event.preventDefault();
  profileFullName.textContent = profilePopupFullName.value;
  profileAbout.textContent = profilePopupAbout.value;
  closePopup(popupEditProfile);
}

function handleLikeCard(event){
  event.target.closest('.element__like').classList.toggle('element__like_liked');
};

function handleDeleteCard(event){
  event.target.closest('.element').remove();
};

function handleSubmitAddNewCard(event){
  event.preventDefault();
  renderCard({ name: newCardName.value, link: newCardLink.value});
  newCardName.value = "";
  newCardLink.value = "";
  closePopup(popupAddPlace);
};

function handleImageCard(cardData){
  openPopup(popupImage);
  const popupImageCard = popupImage.querySelector('.popup__image');
  const popupImageTitle = popupImage.querySelector('.popup__image-title');
  popupImageCard.src = cardData.link;
  popupImageTitle.textContent = cardData.name;
}

function generateCard(cardData){
  const newCard = cardTemplate.cloneNode(true);

  const titleCard = newCard.querySelector('.element__title');
  titleCard.textContent = cardData.name;

  const imageCard = newCard.querySelector('.element__image');
  imageCard.src = cardData.link;
  imageCard.alt = cardData.name
  imageCard.addEventListener('click', () => handleImageCard(cardData));

  const trashButton = newCard.querySelector('.element__trash');
  trashButton.addEventListener('click', handleDeleteCard);

  const likeButton = newCard.querySelector('.element__like');
  likeButton.addEventListener('click', handleLikeCard);

  return newCard;
}

function renderCard(cardData){
  cardContainer.prepend(generateCard(cardData));
};

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

openProfileBtn.addEventListener('click', () => openPopupEditProfile(popupEditProfile));
openAddPlaceBtn.addEventListener('click',() => openPopup(popupAddPlace));


closeProfileBtn.addEventListener('click', () => closePopup(popupEditProfile));
closeAddPlaceBtn.addEventListener('click',() => closePopup(popupAddPlace));
closeImageBtn.addEventListener('click',() => closePopup(popupImage));

submitProfile.addEventListener('submit', profilePopupSave);
submitNewCard.addEventListener('submit', handleSubmitAddNewCard);




