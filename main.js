/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t,r,n,o,i){var a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);e(a,t,r);var u=a.querySelector(".card__delete-button"),c=a.querySelector(".card__like-button");return a.querySelector(".card__image").src=t.link,a.querySelector(".card__image").alt=t.name,a.querySelector(".card__title").textContent=t.name,a.setAttribute("data-card_id",t._id),r===t.owner._id?(u.addEventListener("click",(function(){return n(a)})),u.setAttribute("aria-label",'Удалить карточку "'.concat(t.name,'"'))):u.remove(),c.addEventListener("click",(function(){o(a,r)})),a.querySelector(".card__image").addEventListener("click",(function(){return i(t)})),a}function e(t,e,r){var n=e.link,o=e.name,i=e.likes,a=i.some((function(t){return t._id===r}));t.setAttribute("data-is_liked",JSON.stringify(a)),t.querySelector(".card__image").src=n,t.querySelector(".card__image").alt=o,t.querySelector(".card__title").textContent=o,t.querySelector(".card__like-button").classList.toggle("card__like-button_is-active",a),t.querySelector(".card__like-button").setAttribute("aria-label","Поставить like для: ".concat(o)),t.querySelector(".card__likes-count").textContent=i.length}function r(t){return t.getAttribute("data-card_id")}function n(t){return JSON.parse(t.getAttribute("data-is_liked"))}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),u=new A(n||[]);return a(i,"_invoke",{value:q(t,r,u)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function _(){}function w(){}var S={};p(S,c,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(N([])));x&&x!==r&&n.call(x,c)&&(S=x);var L=w.prototype=b.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(i,a,u,c){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==o(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function q(e,r,n){var o=d;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=j(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return _.prototype=w,a(L,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:_,configurable:!0}),_.displayName=p(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,p(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},k(O.prototype),p(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),p(L,l,"Generator"),p(L,c,(function(){return this})),p(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){a(i,n,o,u,c,"next",t)}function c(t){a(i,n,o,u,c,"throw",t)}u(void 0)}))}}var c={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"f7b85faf-647d-49f4-9714-9c79aa77ce34","Content-Type":"application/json"},url:function(t){return"".concat(this.baseUrl,"/").concat(t)}};function s(t,e){return l.apply(this,arguments)}function l(){return(l=u(i().mark((function t(e,r){var n,o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:if(n=t.sent,!e.ok){t.next=7;break}return t.abrupt("return",Promise.resolve(n));case 7:return o=400===e.status?"Bad Request":401===e.status?"Unauthorized":403===e.status?"Forbidden":404===e.status?"Not Found":"неизвестная ошибка",a=(null==n?void 0:n.message)&&"".concat(n.message)||o,t.abrupt("return",Promise.reject("".concat(r,". ").concat(a)));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=u(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.url("cards"),{headers:c.headers});case 2:return e=t.sent,t.abrupt("return",s(e,"Не удалось получить список карточек"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=u(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.url("users/me"),{headers:c.headers});case 2:return e=t.sent,t.abrupt("return",s(e,"Не удалось получить данные пользователя"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=u(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.url("users/me"),{method:"PATCH",headers:c.headers,body:JSON.stringify(e)});case 2:return r=t.sent,t.abrupt("return",s(r,"Не удалось отправить профиль для изменения"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=u(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.url("cards"),{method:"POST",headers:c.headers,body:JSON.stringify(e)});case 2:return r=t.sent,t.abrupt("return",s(r,"Не удалось отправить новую карточку"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=u(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.url("cards/".concat(e)),{method:"DELETE",headers:c.headers});case 2:return r=t.sent,t.abrupt("return",s(r,"Не удалось выполнить запрос на удаление карточки"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return m.apply(this,arguments)}function m(){return(m=u(i().mark((function t(e,r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.url("cards/likes/".concat(e)),{method:r?"PUT":"DELETE",headers:c.headers});case 2:return n=t.sent,t.abrupt("return",s(n,"Не удалось отправить запрос на ".concat(r?"установку":"снятие"," лайка")));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return(b=u(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v(e,!0));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return w.apply(this,arguments)}function w(){return(w=u(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v(e,!1));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=u(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var r=new Image;r.onload=function(){t(!0)},r.onerror=function(){t(!1)},r.src=e})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=u(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.url("users/me/avatar"),{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:e})});case 2:return r=t.sent,t.abrupt("return",s(r,"Не удалось отправить запрос на изменение аватара"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x="popup_is-opened";function L(t){t.classList.add(x),t.tabIndex=-1===t.tabIndex?0:t.tabIndex,document.addEventListener("keydown",O),t.addEventListener("click",q)}function k(t){!function(t,e){t.classList.remove(e)}(t,x),t.removeEventListener("click",q),document.removeEventListener("keydown",O)}function O(t){"Escape"===t.key&&k(document.querySelector(".".concat(x)))}function q(t){t.target.classList.contains("popup__content")?t.stopPropagation():(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&k(document.querySelector(".".concat(x)))}function j(t){return t.validity.valid}function C(t){return".".concat(t,"-error")}function P(t,e){var r=e.inputSelector,n=e.submitButtonSelector,o=e.inactiveButtonClass,i=Array.from(t.querySelectorAll(r));t.querySelector(n).classList.toggle(o,!i.every(j))}function A(t){var e=t.formElement,r=t.inputElement,n=t.inputErrorClass,o=t.errorClass,i=e.querySelector(C(r.id));r.classList.remove(n),i.textContent="",i.classList.remove(o)}function N(t){var e=t.formElement,r=t.inputElement,n=t.errorMessage,o=t.inputErrorClass,i=t.errorClass,a=e.querySelector(C(r.id));r.classList.add(o),a.textContent=n,a.classList.add(i)}function T(t,e){var r=e.inputSelector,n=e.inputErrorClass,o=e.errorClass,i=e.inactiveButtonClass,a=e.submitButtonSelector;Array.from(t.querySelectorAll(r)).forEach((function(e){A({formElement:t,inputElement:e,inputErrorClass:n,errorClass:o})})),P(t,{inactiveButtonClass:i,inputSelector:r,submitButtonSelector:a})}function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function B(){B=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),u=new C(n||[]);return o(a,"_invoke",{value:k(t,r,u)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function b(){}var _={};s(_,a,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(P([])));S&&S!==r&&n.call(S,a)&&(_=S);var E=b.prototype=m.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,u){var c=p(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==G(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=f;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?y:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(G(e)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(E),s(E,c,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],a=function(t,e){if("object"!=G(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==G(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function M(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var J,U,Y,z,H,R,V,$={value:void 0,set:function(t){var e,r,n,o,i;this.value=t,r=(e=t).name,n=e.about,o=e.avatar,i=e._id,tt.style.backgroundImage="url('".concat(o,"')"),tt.addEventListener("click",gt),X.textContent=r,et.textContent=n,Z.setAttribute("data-profile_id",i)}},K=document.querySelector(".places__list"),Q=document.querySelector(".popup_type_edit .popup__input_type_name"),W=document.querySelector(".popup_type_edit .popup__input_type_description"),X=document.querySelector(".profile__title"),Z=document.querySelector(".profile__info"),tt=document.querySelector(".profile__image"),et=document.querySelector(".profile__description"),rt=document.querySelector(".popup_type_edit"),nt=document.querySelector(".popup_type_new-card"),ot=document.querySelector('.popup__form[name="edit-profile"]'),it=document.querySelector('.popup__form[name="new-place"]'),at=document.querySelector(".popup_type_avatar-edit .popup__form"),ut=document.querySelector('.popup__form[name="delete-confirm"]'),ct=document.querySelector(".popup.popup_type_delete-confirm"),st=document.querySelector(".popup__input_type_avatar-url"),lt=document.querySelector(".popup.popup_type_avatar-edit"),pt={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function ft(t){console.error(t)}function ht(t){return t.getAttribute("data-profile_id")}function dt(t){var e=r(t);ct.setAttribute("data-card_id",e),L(ct)}function yt(t,e){return vt.apply(this,arguments)}function vt(){var t;return t=B().mark((function t(o,i){var a,u;return B().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r(o),t.prev=1,!n(o)){t.next=8;break}return t.next=5,_(a);case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,g(a);case 10:t.t0=t.sent;case 11:u=t.t0,e(o,u,i),t.next=18;break;case 15:t.prev=15,t.t1=t.catch(1),ft(t.t1);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})),vt=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){M(i,n,o,a,u,"next",t)}function u(t){M(i,n,o,a,u,"throw",t)}a(void 0)}))},vt.apply(this,arguments)}function mt(t){var e=document.querySelector(".popup.popup_type_image");e.querySelector(".popup__image").src=t.link,e.querySelector(".popup__caption").textContent=t.name,L(e)}function gt(){st.value=$.value.avatar,L(lt),T(lt.querySelector(pt.formSelector),pt)}function bt(t,e,r,n){t.preventDefault();var o=e.querySelector('button[type="submit"]'),i=o.textContent;o.textContent="Сохранение...",r().then(n).catch(ft).finally((function(){o.textContent=i}))}function _t(e){var r=document.querySelector(".popup_type_new-card .popup__input_type_card-name"),n=document.querySelector(".popup_type_new-card .popup__input_type_url");bt(e,it,(function(){return function(t){return d.apply(this,arguments)}({name:r.value,link:n.value})}),(function(e){var r=t(e,ht(Z),dt,yt,mt);k(nt),it.reset(),K.prepend(r)}))}ot.addEventListener("submit",(function(t){var e=Q.value,r=W.value;bt(t,ot,(function(){return function(t){return h.apply(this,arguments)}({name:e,about:r})}),(function(t){var e=t.name,r=t.about;X.textContent=e,et.textContent=r,k(rt),ot.reset()}))})),at.addEventListener("submit",(function(t){var e=st.value;bt(t,at,(function(){return function(t){return S.apply(this,arguments)}(e).then((function(t){return t?function(t){return E.apply(this,arguments)}(e):(N(D({formElement:at,inputElement:st,errorMessage:"Это не изображение"},pt)),Promise.resolve(void 0))}))}),(function(t){void 0!==t&&($.set(D(D({},$.value),{},{avatar:t.avatar})),k(lt),at.reset())}))})),document.querySelector(".profile__add-button").addEventListener("click",(function(){it.addEventListener("submit",_t),it.reset(),L(nt),T(rt.querySelector(pt.formSelector),pt)})),document.querySelector(".profile__edit-button").addEventListener("click",(function(){Q.value=X.textContent,W.value=et.textContent,L(rt),T(rt.querySelector(pt.formSelector),pt)})),it.addEventListener("submit",_t),ut.addEventListener("submit",(function(t){var e=ct.getAttribute("data-card_id"),r=document.querySelector('li[data-card_id="'.concat(e,'"]'));bt(t,ut,(function(){return function(t){return y.apply(this,arguments)}(e)}),(function(){!function(t){t.remove()}(r),k(ct),ct.setAttribute("data-card_id","")}))})),document.querySelectorAll(".popup").forEach((function(t){t.classList.add("popup_is-animated")})),Promise.all([function(){return f.apply(this,arguments)}(),function(){return p.apply(this,arguments)}()]).then((function(e){var r,n,o=(n=2,function(t){if(Array.isArray(t))return t}(r=e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(r,n)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];$.set(i),function(e){e.forEach((function(e){var r=t(e,ht(Z),dt,yt,mt);K.appendChild(r)}))}(a)})).catch(ft),U=(J=pt).formSelector,Y=J.inputSelector,z=J.submitButtonSelector,H=J.inactiveButtonClass,R=J.inputErrorClass,V=J.errorClass,Array.from(document.querySelectorAll(U)).forEach((function(t){Array.from(t.querySelectorAll(Y)).forEach((function(e){e.addEventListener("input",(function(){e.setCustomValidity(e.validity.patternMismatch?e.dataset.errorMessage:""),j(e)?A({formElement:t,inputElement:e,inputErrorClass:R,errorClass:V}):N({formElement:t,inputElement:e,errorMessage:e.validationMessage,inputErrorClass:R,errorClass:V}),P(t,{inactiveButtonClass:H,inputSelector:Y,submitButtonSelector:z})})),P(t,{inactiveButtonClass:H,inputSelector:Y,submitButtonSelector:z})}))}))})();