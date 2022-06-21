export default class UserInfo {
  constructor({userNameSelector, userAboutSelector}){
    this._userNameElement = document.querySelector(userNameSelector);
    this._userAboutElement = document.querySelector(userAboutSelector);
  }

  getUserinfo(){
    return {
        name: this._userNameElement.textContent,
        about: this._userAboutElement.textContent
    }
  }

  setUserinfo(name, about){
    this._userNameElement.textContent = name;
    this._userAboutElement.textContent = about;
  }
}