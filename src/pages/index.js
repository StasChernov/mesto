import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";

import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  buttonOpenProfile,
  buttonOpenNewCardForm,
  buttonOpenAvatarEditForm,
  validationOptions,
  formValidators,
  headers,
  apiURL
} from '../utils/Constants.js';

function handleCardClick(cardName, cardLink){
  popupWithImage.open(cardName, cardLink);
}

function handleCardLike(cardId){
  if (!this._cardLiked) {
    api.likeCard(cardId)
    .then((res) => this.likeCard(res))
    .catch((err) => console.log(`Ошибка: ${err}`))
  }
  else {
    api.deleteLikeCard(cardId)
    .then((res) => this.likeCard(res))
    .catch((err) => console.log(`Ошибка: ${err}`))
  }
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(validationOptions);

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const api = new Api(headers, apiURL);

const userInfo = new UserInfo({userNameSelector: '.profile__full-name', userAboutSelector: '.profile__about', userAvatarSelector:'.profile__avatar'});

const section = new Section({
  renderer: (item) => {
    section.addItem(createCard(item));
  }
}, '.elements');

const popupEditForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (formData) => {
    popupEditForm.renderLoading(true);
    api.setUserInfo(formData.user_full_name, formData.user_about)
    .then (res => userInfo.setUserInfo(res.name, res.about))
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupEditForm.renderLoading(false))
  }
});

popupEditForm.setEventListeners();

buttonOpenProfile.addEventListener('click', () => {
  const userProfile = userInfo.getUserInfo();
  popupEditForm.setInputValues(userProfile);
  formValidators['user-profile'].resetValidation()
  popupEditForm.open();
});

const popupNewCardForm = new PopupWithForm({
  popupSelector: '.popup_type_add-place',
  handleFormSubmit: (formData) => {
    popupNewCardForm.renderLoading(true)
    api.addNewCard(formData.place_title, formData.place_link)
    .then (res => section.addItem(createCard(res)))
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupNewCardForm.renderLoading(false))
  }
});

popupNewCardForm.setEventListeners();

buttonOpenNewCardForm.addEventListener('click', () => {
  formValidators['add-place'].resetValidation()
  popupNewCardForm.open();
});

const popupAvatarEditForm = new PopupWithForm({
  popupSelector: '.popup_type_avatar-edit',
  handleFormSubmit: (formData) => {
    popupAvatarEditForm.renderLoading(false)
    api.updateAvatar(formData.avatar_edit)
    .then (res => userInfo.setAvatar(res.avatar))
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupAvatarEditForm.renderLoading(false))
  }
});

popupAvatarEditForm.setEventListeners();

buttonOpenAvatarEditForm.addEventListener('click', () => {
  const userProfile = userInfo.getUserInfo();
  popupAvatarEditForm.setInputValues(userProfile);
  formValidators['avatar-edit'].resetValidation();
  popupAvatarEditForm.open();
});

const popupCardDelete = new PopupWithConfirm('.popup_type_confirm');

popupCardDelete.setEventListeners();
popupCardDelete.setEventListenerSubmit();

function createCard(item){
  const card = new Card(item, '#element-template', handleCardClick, handleCardLike, handleCardDelete, userInfo.getUserId());
  const cardElement = card.createCard();
  return cardElement;
}

function handleCardDelete(cardId){
  popupCardDelete.open();
  popupCardDelete.setSubmitAction(()=>{
    popupCardDelete.renderLoading(true);
    api.deleteCard(cardId)
    .then(() => {
      this.deleteCard();
      popupCardDelete.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupCardDelete.renderLoading(false))
  });
}

const loader = document.querySelector('.loader');

function hideLoader (){
  loader.classList.add('loader_hidden');
}

Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([cards, user]) => {
  userInfo.setUserInfo(user.name, user.about, user._id);
  userInfo.setAvatar(user.avatar);
  section.renderItems(cards);
})
.catch((err) => console.log(`Ошибка: ${err.status}`))
.finally(() => hideLoader())