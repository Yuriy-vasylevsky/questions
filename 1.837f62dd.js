parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"JJh1":[function(require,module,exports) {
"use strict";require("../sass/main.scss");const t={startBtn:document.querySelector(".hero-button"),stopBtn:document.querySelector(".stop"),box:document.querySelector(".box-section-hero__text"),text:document.querySelector(".text")},e=["Давно робив що-небудь нестандартне, наприклад, купався голим, не спав дві доби?","Є улюблена хокейна (футбольна) команда? Яка книга (фільм, пісня, блюдо) найулюбленіша?","Що для тебе означають друзі, батьки, кохана?","Дратують тупі люди?","Як змусити себе працювати, якщо лінь?","Назви 3 сайта, на які заходиш найчастіше на самоті?","Улюблене місце в рідному місті?","Що з ним пов’язано?","Як вбити нудьгу, самий небанальний варіант?","Яке місто вважаєш найкрасивішим, незвичайним?","Яка дрібниця може поліпшити настрій?","Була кличка в дитинстві? А зараз?","Що таке жіночність (любов, ніжність, шлюб, сім’я) для тебе?","На інших планетах є життя?","Як витратиш мільйон?","Бачиш дивні сни? Про що вони?","Любов окрилює або руйнує?","Знаєш, що таке нерозділене почуття?","Вмієш влаштовувати романтичні побачення?","Любиш говорити про політику?","Чи зміг би кинути все і поїхати в іншу країну один?","Чи можна образитися назавжди і ніколи більше не розмовляти з людиною?","Чим займаєшся, коли виходиш з інстаграму?","Хто головний у відносинах: чоловік або жінка?","Яка відпустка найідеальніший для тебе?","Тобі потрібна дружина-домогосподарка або подруга по життю?","Чим тебе можна образити?","Що піднімає тобі настрій?","Здатний на компроміси?","Хотів би жити в інший час?"];t.box.textContent="Нажми на кнопку";class n{constructor(){this.counter=0,this.intervalid=null,this.isActive=!1}getRandomInRange(t,e){return Math.floor(Math.random()*(e-t+1))+t}createRender(){this.isActive||(this.intervalid=setInterval(()=>{this.isActive=!0,t.text.textContent=this.counter+=1,t.box.textContent="";const n=this.getRandomInRange(0,e.length-1),s=`<h1 class="title"> ${e[n]} </h1>`;return t.box.insertAdjacentHTML("beforeend",s)},100))}stop(){this.isActive=!1,this.counter=0,t.text.textContent=0,clearTimeout(this.intervalid)}}const s=new n({});t.startBtn.addEventListener("click",s.createRender.bind(s)),t.stopBtn.addEventListener("click",s.stop.bind(s));
},{"../sass/main.scss":"clu1"}]},{},["JJh1"], null)
//# sourceMappingURL=/questions/1.837f62dd.js.map