const openProfileBtn = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup');
const closeProfileBtn = profilePopup.querySelector('.popup__close');
const submitProfile = profilePopup.querySelector('.popup__edit-profile');
const profileFullName = document.querySelector('.profile__full-name');
const profileAbout = document.querySelector('.profile__about');
const profilePopupFullName = document.querySelector('.popup__input-string_type_full-name');
const profilePopupAbout = document.querySelector('.popup__input-string_type_about');

function profilePopupOpen() {
  profilePopup.classList.add('popup_opened');
  profilePopupFullName.value = profileFullName.textContent;
  profilePopupAbout.value = profileAbout.textContent;
}

function profilePopupClose() {
  profilePopup.classList.remove('popup_opened');
}

function profilePopupSave(event) {
  event.preventDefault();
  profilePopupClose();
  profileFullName.textContent = profilePopupFullName.value;
  profileAbout.textContent = profilePopupAbout.value;
}

openProfileBtn.addEventListener('click', profilePopupOpen);
closeProfileBtn.addEventListener('click', profilePopupClose);
submitProfile.addEventListener('submit', profilePopupSave);
