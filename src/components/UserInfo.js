export default class UserInfo {
  constructor({userNameSelector, userAboutSelector, userAvatarSelector}){
    this._userNameElement = document.querySelector(userNameSelector);
    this._userAboutElement = document.querySelector(userAboutSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo(){
    return {
        user_full_name: this._userNameElement.textContent,
        user_about: this._userAboutElement.textContent,
        avatar_edit: this._userAvatarElement.src
    }
  }

  getUserId(){
    return this._userId;
  }

  getAvatar(){
    return this._userAvatarElement.src;
  }

  setAvatar(user_avatar){
    this._userAvatarElement.src = user_avatar;
  }

  setUserInfo({name, about, avatar, _id}){
    this._userNameElement.textContent = name;
    this._userAboutElement.textContent = about;
    this._userId = _id;
    this._avatar = avatar;
  }
}
