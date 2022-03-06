import './sass/main.scss';

// const refs = {
//   startBtn: document.querySelector('.hero-button'),
//   stopBtn: document.querySelector('.stop'),
//   box: document.querySelector('.box-section-hero__text'),
//   text: document.querySelector('.text'),
// };

// const questions = [
//   `Давно робив що-небудь нестандартне, наприклад, купався голим, не спав дві доби?`,
//   `Є улюблена хокейна (футбольна) команда? Яка книга (фільм, пісня, блюдо) найулюбленіша?`,
//   `Що для тебе означають друзі, батьки, кохана?`,
//   `Дратують тупі люди?`,
//   `Як змусити себе працювати, якщо лінь?`,
//   `Назви 3 сайта, на які заходиш найчастіше на самоті?`,
//   `Улюблене місце в рідному місті?`,
//   `Що з ним пов’язано?`,
//   `Як вбити нудьгу, самий небанальний варіант?`,
//   `Яке місто вважаєш найкрасивішим, незвичайним?`,
//   `Яка дрібниця може поліпшити настрій?`,
//   `Була кличка в дитинстві? А зараз?`,
//   `Що таке жіночність (любов, ніжність, шлюб, сім’я) для тебе?`,
//   `На інших планетах є життя?`,
//   `Як витратиш мільйон?`,
//   `Бачиш дивні сни? Про що вони?`,
//   `Любов окрилює або руйнує?`,
//   `Знаєш, що таке нерозділене почуття?`,
//   `Вмієш влаштовувати романтичні побачення?`,
//   `Любиш говорити про політику?`,
//   `Чи зміг би кинути все і поїхати в іншу країну один?`,
//   `Чи можна образитися назавжди і ніколи більше не розмовляти з людиною?`,
//   `Чим займаєшся, коли виходиш з інстаграму?`,
//   `Хто головний у відносинах: чоловік або жінка?`,
//   `Яка відпустка найідеальніший для тебе?`,
//   `Тобі потрібна дружина-домогосподарка або подруга по життю?`,
//   `Чим тебе можна образити?`,
//   `Що піднімає тобі настрій?`,
//   `Здатний на компроміси?`,
//   `Хотів би жити в інший час?`,
// ];

// // function getRandomInRange(min, max) {
// //   return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// refs.box.textContent = 'Нажми на кнопку';

// // function start() {
// //   // let random = getRandomInRange(0, 8);
// //   // refs.box.textContent = '';
// //   // const render = `<h1 class="title"> ${questions[random]} </h1>`;
// //   // return refs.box.insertAdjacentHTML('beforeend', render);
// // }

// class Questions {
//   constructor() {
//     this.counter = 0;
//     this.intervalid = null;
//     this.isActive = false;
//   }

//   getRandomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   createRender() {
//     if (this.isActive) {
//       return;
//     }

//     this.intervalid = setInterval(() => {
//       this.isActive = true;
//       refs.text.textContent = this.counter += 1;
//       refs.box.textContent = '';
//       const index = this.getRandomInRange(0, questions.length - 1);

//       const r = `<h1 class="title"> ${questions[index]} </h1>`;

//       return refs.box.insertAdjacentHTML('beforeend', r);
//     }, 100);
//   }

//   stop() {
//     this.isActive = false;
//     this.counter = 0;
//     refs.text.textContent = 0;
//     clearTimeout(this.intervalid);
//   }
// }

// const question = new Questions({});

// refs.startBtn.addEventListener(`click`, question.createRender.bind(question));
// refs.stopBtn.addEventListener(`click`, question.stop.bind(question));

const refs = {
  morBtn: document.querySelector('.top-button'),
  morText: document.querySelector('.top_text-mor'),
  morRemoveBtn: document.querySelector('.top-button-remove'),
};

refs.morBtn.addEventListener(`click`, start);

function start() {
  refs.morText.classList.remove(`block`);
  refs.morBtn.classList.add(`block`);

  refs.morRemoveBtn.classList.remove(`block`);
}

refs.morRemoveBtn.addEventListener(`click`, stop);

function stop() {
  refs.morText.classList.add(`block`);
  refs.morBtn.classList.remove(`block`);

  refs.morRemoveBtn.classList.add(`block`);
}
