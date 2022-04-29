const openProfileBtn = document.querySelector('.profile__edit-button');
const openAddPlaceBtn = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddPlace = document.querySelector('.popup_add-place');

const closeProfileBtn = popupEditProfile.querySelector('.popup__close');
const closeAddPlaceBtn = popupAddPlace.querySelector('.popup__close');

const profileFullName = document.querySelector('.profile__full-name');
const profileAbout = document.querySelector('.profile__about');

const submitProfile = document.querySelector('.popup__form_type_user-profile');

const profilePopupFullName = document.querySelector('.popup__input_type_full-name');
const profilePopupAbout = document.querySelector('.popup__input_type_about');

const todoCardTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".element");

const cardContainer = document.querySelector(".elements");

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
  popupOpen(popup);
}

function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

function profilePopupSave(event) {
  event.preventDefault();
  profileFullName.textContent = profilePopupFullName.value;
  profileAbout.textContent = profilePopupAbout.value;
  popupClose(popupEditProfile);
}

const renderCard = (cardData) => {
  cardContainer.prepend(generateCard(cardData));
};

initialCards.forEach((cardData) => {
  renderCard(cardData);
});




openProfileBtn.addEventListener('click', () => openPopupEditProfile(popupEditProfile));
openAddPlaceBtn.addEventListener('click',() => popupOpen(popupAddPlace));

closeProfileBtn.addEventListener('click', () => popupClose(popupEditProfile));
closeAddPlaceBtn.addEventListener('click',() => popupClose(popupAddPlace));

submitProfile.addEventListener('submit', profilePopupSave);




