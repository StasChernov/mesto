(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){this._hideAllErrors(),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setButtonDisabled",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_setButtonEnabled",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._setButtonDisabled():this._setButtonEnabled()}},{key:"_hideAllErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardName=t.name,this._cardLink=t.link,this._cardLikes=t.likes,this._cardId=t._id,this._owner=t.owner._id===a,this._userId=a,this._cardTemplateSelector=n,this._handleCardClick=r,this._handleCardDelete=i,this._handleCardLike=o,this._cardElement=this._getElement(),this._cardImage=this._cardElement.querySelector(".element__image"),this._cardTitle=this._cardElement.querySelector(".element__title"),this._cardTrashBtn=this._cardElement.querySelector(".element__trash"),this._cardLikeBtn=this._cardElement.querySelector(".element__like-button"),this._cardLikesCounter=this._cardElement.querySelector(".element__likes-counter"),this._cardLiked=!1}var t,r;return t=e,(r=[{key:"_getElement",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"likeCard",value:function(e){this._cardLikeBtn.classList.toggle("element__like-button_liked"),this._cardLiked=!this._cardLiked,this._cardLikesCounter.textContent=e.likes.length}},{key:"deleteCard",value:function(){this._cardElement.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._cardName,e._cardLink)})),this._owner&&(this._cardTrashBtn.classList.add("element__trash_visible"),this._cardTrashBtn.addEventListener("click",(function(){return e._handleCardDelete(e)}))),this._cardLikeBtn.addEventListener("click",(function(){return e._handleCardLike(e)}))}},{key:"createCard",value:function(){var e=this;return this._cardLikes.some((function(t){return t._id===e._userId}))&&(this._cardLikeBtn.classList.add("element__like-button_liked"),this._cardLiked=!0),this._cardTitle.textContent=this._cardName,this._cardLikesCounter.textContent=this._cardLikes.length,this._cardImage.src=this._cardLink,this._cardImage.alt=this._cardName,this._setEventListeners(),this._cardElement}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this._btnSubmit=this._popup.querySelector(".popup__save")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImageCard=t._popup.querySelector(".popup__image"),t._popupImageTitle=t._popup.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImageCard.src=t,this._popupImageCard.alt=e,this._popupImageTitle.textContent=e,l(h(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._formElement=t._popup.querySelector(".popup__form"),t._inputList=t._formElement.querySelectorAll(".popup__input"),t}return t=a,(n=[{key:"renderLoading",value:function(e){this._btnSubmit.textContent=e?"Сохранение ...":"Сохранить"}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;m(k(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){this._formElement.reset(),m(k(a.prototype),"close",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function I(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElement=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleFormSubmit=e}},{key:"renderLoading",value:function(e){this._btnSubmit.textContent=e?"Удаление ...":"Удалить"}},{key:"setEventListeners",value:function(){var e=this;C(P(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.userNameSelector,r=t.userAboutSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{user_full_name:this._userNameElement.textContent,user_about:this._userAboutElement.textContent,avatar_edit:this._userAvatarElement.src}}},{key:"getUserId",value:function(){return this._userId}},{key:"getAvatar",value:function(){return this._userAvatarElement.src}},{key:"setAvatar",value:function(e){this._userAvatarElement.src=e}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._userNameElement.textContent=t,this._userAboutElement.textContent=n,this._userId=o,this._avatar=r}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q,U=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._apiUserURL="".concat(n,"/users/me"),this._apiCardsURL="".concat(n,"/cards"),this._headers=t}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._apiUserURL,{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch(this._apiCardsURL,{headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch(this._apiUserURL,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._handleResponse(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch(this._apiCardsURL,{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._apiCardsURL,"/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._apiCardsURL,"/").concat(e,"/likes "),{method:"PUT",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._apiCardsURL,"/").concat(e,"/likes "),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._apiUserURL,"/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._handleResponse(e)}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x=document.querySelector(".profile__edit-button"),V=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__avatar-edit"),D={};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t){M.open(e,t)}function H(e){e._cardLiked?z.deleteLikeCard(e._cardId).then((function(t){return e.likeCard(t)})).catch((function(e){return console.log("Ошибка: ".concat(e))})):z.likeCard(e._cardId).then((function(t){return e.likeCard(t)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(q.formSelector)).forEach((function(e){var n=new t(q,e),r=e.getAttribute("name");D[r]=n,n.enableValidation()}));var M=new _(".popup_type_image");M.setEventListeners();var z=new U({authorization:"ba4cc9cb-bb64-45d3-b2e3-92f91eb3a7e5","Content-Type":"application/json"},"https://mesto.nomoreparties.co/v1/cohort-44"),$=new T({userNameSelector:".profile__full-name",userAboutSelector:".profile__about",userAvatarSelector:".profile__avatar"}),G=new i({renderer:function(e){G.addItem(Y(e))}},".elements"),K=new S({popupSelector:".popup_type_edit-profile",handleFormSubmit:function(e){K.renderLoading(!0),z.setUserInfo(e.user_full_name,e.user_about).then((function(e){$.setUserInfo(e),K.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return K.renderLoading(!1)}))}});K.setEventListeners(),x.addEventListener("click",(function(){var e=$.getUserInfo();K.setInputValues(e),D["user-profile"].resetValidation(),K.open()}));var Q=new S({popupSelector:".popup_type_add-place",handleFormSubmit:function(e){Q.renderLoading(!0),z.addNewCard(e.place_title,e.place_link).then((function(e){G.addItem(Y(e)),Q.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return Q.renderLoading(!1)}))}});Q.setEventListeners(),V.addEventListener("click",(function(){D["add-place"].resetValidation(),Q.open()}));var W=new S({popupSelector:".popup_type_avatar-edit",handleFormSubmit:function(e){W.renderLoading(!1),z.updateAvatar(e.avatar_edit).then((function(e){$.setAvatar(e.avatar),W.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return W.renderLoading(!1)}))}});W.setEventListeners(),N.addEventListener("click",(function(){var e=$.getUserInfo();W.setInputValues(e),D["avatar-edit"].resetValidation(),W.open()}));var X=new R(".popup_type_confirm");function Y(e){return new r(e,"#element-template",J,H,Z,$.getUserId()).createCard()}function Z(e){X.open(),X.setSubmitAction((function(){X.renderLoading(!0),z.deleteCard(e._cardId).then((function(){e.deleteCard(),X.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return X.renderLoading(!1)}))}))}X.setEventListeners();var ee=document.querySelector(".loader");Promise.all([z.getInitialCards(),z.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo(i),$.setAvatar(i.avatar),G.renderItems(o)})).catch((function(e){return console.log("Ошибка: ".concat(e.status))})).finally((function(){ee.classList.add("loader_hidden")}))})();