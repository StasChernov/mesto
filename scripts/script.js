let openProfileBtn = document.querySelector('.profile__edit-button');
let profilePopup = document.querySelector('.popup');
let closeProfileBtn = profilePopup.querySelector('.popup__close');
let submitProfile = profilePopup.querySelector('.popup__edit-profile');
let profileFullName = document.querySelector('.profile__full-name');
let profileAbout = document.querySelector('.profile__about');
let profilePopupFullName = document.querySelector('.popup__full-name');
let profilePopupAbout = document.querySelector('.popup__about');

function profilePopupOpen() {
  profilePopup.classList.add('popup_opened');
  profilePopupFullName.value = profileFullName.textContent;
  profilePopupAbout.setAttribute('value', profileAbout.textContent);
}

function profilePopupClose() {
  profilePopup.classList.remove('popup_opened');
}

function profilePopupSave(event) {
  event.preventDefault();
  profilePopup.classList.remove('popup_opened');
  profileFullName.textContent = profilePopupFullName.value;
  profileAbout.textContent = profilePopupAbout.value;  
}

openProfileBtn.addEventListener('click', profilePopupOpen);
closeProfileBtn.addEventListener('click', profilePopupClose);
submitProfile.addEventListener('submit', profilePopupSave);