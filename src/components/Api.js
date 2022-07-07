export default class Api {
  constructor(headers, apiURL) {
    this._apiUserURL = `${apiURL}/users/me`;
    this._apiCardsURL = `${apiURL}/cards`;
    this._headers = headers;
  }

  _response(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

    getUserInfo() {
      return fetch(this._apiUserURL, {
        headers: this._headers
      })
        .then(res => this._response(res))
    }

    getInitialCards() {
      return fetch(this._apiCardsURL, {
        headers: this._headers
      })
        .then(res => this._response(res));
    }

    setUserInfo(name, about) {
      return fetch(this._apiUserURL, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name,
          about
        })
      })
      .then(res => this._response(res));
    }

    addNewCard(name, link){
      return fetch(this._apiCardsURL, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          link
        })
      })
      .then(res => this._response(res));
    }

    deleteCard(cardId) {
      return fetch(`${this._apiCardsURL}/${cardId}`, { 
        method: 'DELETE', 
        headers: this._headers
      })
      .then(res => this._response(res));
    }

    likeCard(cardId){
      return fetch(`${this._apiCardsURL}/${cardId}/likes `,{
          method: 'PUT',
          headers: this._headers
      })
      .then(res => this._response(res));
    }

    deleteLikeCard(cardId){
      return fetch(`${this._apiCardsURL}/${cardId}/likes `,{
          method: 'DELETE',
          headers: this._headers
      })
      .then(res => this._response(res));
    }

    updateAvatar(avatarURL){
      return fetch(`${this._apiUserURL}/avatar`,{
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({avatar: avatarURL})
      })
      .then(res => this._response(res));
  }
}
