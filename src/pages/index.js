import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/Data.js";

import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const buttonOpenProfile = document.querySelector('.profile__edit-button');
const buttonOpenNewCardForm = document.querySelector('.profile__add-button');

const profileFullName = document.querySelector('.profile__full-name');
const profileAbout = document.querySelector('.profile__about');

const profileForm = document.querySelector('.popup__form_type_user-profile');
const newCardForm = document.querySelector('.popup__form_type_add-place');

const profilePopupFullName = document.querySelector('.popup__input_type_full-name');
const profilePopupAbout = document.querySelector('.popup__input_type_about');

function handleCardClick(cardName, cardLink){
  popupWithImage.open(cardName, cardLink);
}

function createCard(item){
  const newCard = new Card(item, '#element-template', handleCardClick);
  const newCardElement = newCard.createCard();
  return newCardElement;
}

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item));
  }
}, '.elements');

section.renderItems();

const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const profileElement = new FormValidator(validationOptions, profileForm);
const newCardElement = new FormValidator(validationOptions, newCardForm);
newCardElement.enableValidation();
profileElement.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupEditForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (formData) => {
    profileFullName.textContent = formData.user_full_name;
    profileAbout.textContent = formData.user_about;
  }
});

popupEditForm.setEventListeners();

buttonOpenProfile.addEventListener('click', () => {
  profilePopupFullName.value = profileFullName.textContent;
  profilePopupAbout.value = profileAbout.textContent;
  profileElement.resetValidation();
  popupEditForm.open();
});

const popupNewCardForm = new PopupWithForm({
  popupSelector: '.popup_type_add-place',
  handleFormSubmit: (formData) => {
    section.addItem(createCard({name: formData.place_title, link: formData.place_link}));
  }
});

popupNewCardForm.setEventListeners();

buttonOpenNewCardForm.addEventListener('click', () => {
  newCardElement.resetValidation();
  popupNewCardForm.open();
});
