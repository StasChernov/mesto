import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./Data.js";

const buttonOpenProfile = document.querySelector('.profile__edit-button');
const buttonOpenNewCardForm = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupNewCard = document.querySelector('.popup_type_add-place');
const popupImage = document.querySelector('.popup_type_image');

const popupImageCard = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');

const buttonCloseProfile = popupEditProfile.querySelector('.popup__close');
const buttonCloseNewCardForm = popupNewCard.querySelector('.popup__close');
const buttonCloseImage = popupImage.querySelector('.popup__close');

const profileFullName = document.querySelector('.profile__full-name');
const profileAbout = document.querySelector('.profile__about');

const profileForm = document.querySelector('.popup__form_type_user-profile');
const newCardForm = document.querySelector('.popup__form_type_add-place');

const profilePopupFullName = document.querySelector('.popup__input_type_full-name');
const profilePopupAbout = document.querySelector('.popup__input_type_about');

const newCardName = document.querySelector('.popup__input_type_place-title');
const newCardLink = document.querySelector('.popup__input_type_place-link');

const cardContainer = document.querySelector('.elements');

function openPopupEditProfile() {
  profilePopupFullName.value = profileFullName.textContent;
  profilePopupAbout.value = profileAbout.textContent;
  openPopup(popupEditProfile);
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

function submitNewCardForm(event){
  event.preventDefault();
  renderCard({ name: newCardName.value, link: newCardLink.value});
  closePopup(popupNewCard);
};

function handleOpenImage(cardName, cardLink){
  popupImageCard.src = cardLink;
  popupImageCard.alt = cardName;
  popupImageTitle.textContent = cardName;
  openPopup(popupImage);
}

function generateCard(cardData){
  const newCard = new Card(cardData, '#element-template', handleOpenImage);
  const newCardElement = newCard.createCard();
  return newCardElement;
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

const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

function clearForm(formId){
  formId.reset();
}

const profileElement = new FormValidator(validationOptions, profileForm);
const newCardElement = new FormValidator(validationOptions, newCardForm);
newCardElement.enableValidation();
profileElement.enableValidation();

buttonOpenProfile.addEventListener('click', () => {
  clearForm(profileForm);
  openPopupEditProfile();
  profileElement.resetValidation();
});

buttonOpenNewCardForm.addEventListener('click',() => {
  clearForm(newCardForm);
  openPopup(popupNewCard);
  newCardElement.resetValidation();
});

buttonCloseProfile.addEventListener('click', () => closePopup(popupEditProfile));
buttonCloseNewCardForm.addEventListener('click',() => closePopup(popupNewCard));
buttonCloseImage.addEventListener('click',() => closePopup(popupImage));

profileForm.addEventListener('submit', submitProfileForm);
newCardForm.addEventListener('submit', submitNewCardForm);

closeByClickOnOverlay();




