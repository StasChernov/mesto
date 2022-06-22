export default class UserInfo {
  constructor({userNameSelector, userAboutSelector}){
    this._userNameElement = document.querySelector(userNameSelector);
    this._userAboutElement = document.querySelector(userAboutSelector);
  }

  getUserInfo(){
    return {
        user_full_name: this._userNameElement.textContent,
        user_about: this._userAboutElement.textContent
    }
  }

  setUserInfo(user_full_name, user_about){
    this._userNameElement.textContent = user_full_name;
    this._userAboutElement.textContent = user_about;
  }
}
