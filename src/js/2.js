import '../sass/main.scss';

const refs = {
  startBtn: document.querySelector('.footer-button'),
  stopBtn: document.querySelector('.stop'),
  box: document.querySelector('.box-section-hero__text'),
  text: document.querySelector('.text'),
  boxHistory: document.querySelector('.box-section-hero__texti-history'),
};

const questions = [
  `Давно робив що-небудь нестандартне, наприклад, купався голим, не спав дві доби?`,
  `Є улюблена хокейна (футбольна) команда?`,
  `Яка книга (фільм, пісня, блюдо) найулюбленіша?`,
  `Що для тебе означають друзі, батьки, кохана?`,
  `Дратують тупі люди?`,
  `Як змусити себе працювати, якщо лінь?`,
  `Назви 3 сайта, на які заходиш найчастіше на самоті?`,
  `Улюблене місце в рідному місті? Що з ним пов’язано?`,
  `Як вбити нудьгу, самий небанальний варіант?`,
  `Яке місто вважаєш найкрасивішим, незвичайним?`,
  `Яка дрібниця може поліпшити настрій?`,
  `Була кличка в дитинстві? А зараз?`,
  `Що таке жіночність (любов, ніжність, шлюб, сім’я) для тебе?`,
  `На інших планетах є життя?`,
  `Як витратиш мільйон?`,
  `Бачиш дивні сни? Про що вони?`,
  `Любов окрилює чи руйнує?`,
  `Знаєш, що таке нерозділене почуття?`,
  `Вмієш влаштовувати романтичні побачення?`,
  `Любиш говорити про політику?`,
  `Чи зміг би кинути все і поїхати в іншу країну один?`,
  `Чи можна образитися назавжди і ніколи більше не розмовляти з людиною?`,
  `Чим займаєшся, коли виходиш з інстаграму?`,
  `Хто головний у відносинах: чоловік або жінка?`,
  `Яка відпустка найідеальніша для тебе?`,
  `Чим тебе можна образити?`,
  `Що піднімає тобі настрій?`,
  `Здатний на компроміси?`,
  `Чи хочеш жити в інший час?`,
  `Ти дивився мою анкету, сподобалися мої фото?`,
  `Можеш допомогти хорошій людині, яку ти не знаєш, безкорисливо?`,
  `Можеш розповісти про свою роботу (хобі, друзів, сім’ї)?`,
  `Хто ти по гороскопу? `,
  `Любиш сюрпризи?`,
  `Яким спортом займаєшся?`,
  `Давно був у кіно (театрі, на концерті, на футболі)?`,
  `Правда, що слабкі чоловік бояться сильних жінок?`,

  `Як ти ставишся до зрад у шлюбі?`,
  `Часто обманюєш інших?`,
  `Якщо знаєш, що тобe не покарають, яку капость хотів би зробити?`,
  `Чи зможеш довірити дружині сімейний бюджет?`,
  `Заради коханої відмовишся від друзів, роботи, хобі?`,
  `Якщо колишня подзвонить, попросить відновити відносини, що зробиш?`,
  `Хто повинен першим вибачатися після сварки: хлопець чи дівчина?`,
  `Дозволиш коханій дівчині переглядати твої смс, дзвінки, читати повідомлення від друзів?`,
  `Як ставишся до емансипації?`,

  `У тебе була страшна дівчина(хлопець)?`,
  `Які теми не можна обговорювати з малознайомими дівчатами(хлопцями)?`,
  `Як думаєш, яким кольором можна пофарбувати холодильник?`,
  `У мене 15 собак, як ти ставишся до тварин?`,
  `У тебе є алгоритм розкидання шкарпеток по квартирі?`,

  `Навіщо лисому кухареві ковпак?`,
  `Ти б поїхав з коханою в інше місто або країну, якщо їй так потрібно?`,
  `Можеш визнаватися в любові прилюдно?`,
  `У закоханих можуть бути таємниці один від одного?`,
  `Скільки потрібно зустрічатися до весілля?`,
  `Що важливіше секс або підтримка один одного в біді?`,
  `Ідеальні відносини – це … Назви три ключових слова для визначення.`,
  `Відносини без зобов’язань – круто?`,
  `Куди хочеш поїхати на медовий місяць з майбутньою дружиною?`,
  `Яка пісня більше підходить мені? Тобі? Нашій парі?`,
  `Протилежності притягуються або відштовхуються?`,

  `Поговоримо про секс? Ой, прости, не туди написав(ла).`,
  `Якби робив мені масаж, з чого б почав, чим закінчив?`,
  `Якщо дівчина сильно втомилася, як допоможеш їй зняти напругу?`,
  `Ти спиш в трусах чи голий?`,
  `Подобається, коли дівчина робить перший крок?`,
  `Якa білизна тебе збуджує?`,
  `Уяви, що ми пішли на вечірку разом, добре випили. Чим потім займемося? І де саме?`,
  `Ти часто думаєш “про це?” Є сексуальні фантазії?`,
  `Бачив фільм “50 відтінків сірого”? Ну як тобі?`,
  `Яка частина тіла у тебе найбільш чутлива?`,
  `Любиш експерементувати у ліжку?`,
  `Що краще, лежати на дивані або подорожувати?`,
  `Які 3 речі візьмеш на безлюдний острів?`,
  `Опиши себе п’ятьма словами?`,
  `Твоя потаємна мрія?`,
  `Що важливіше розум чи серце?`,
  `Які книги не порадиш читати?`,
  `Друг може брехати, зраджувати?`,
  `Що робиш краще за інших?`,
  `Віриш в життя після смерті?`,
  `Що страшніше: місяць в лісі або місяць без інтернету?`,
  `Як ти ставишся до відносин на відстані?`,
  `Хто на твою думку головний у сім’ї?`,
  `Що вкрали гопніки в Києві у солдат РФ?`,
];

// function getRandomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// refs.box.textContent = 'Нажми на start';

// function start() {
//   // let random = getRandomInRange(0, 8);
//   // refs.box.textContent = '';
//   // const render = `<h1 class="title"> ${questions[random]} </h1>`;
//   // return refs.box.insertAdjacentHTML('beforeend', render);
// }

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

//     refs.text.textContent = this.counter += 1;
//     const textForHistory = `<div class="text-for-history">${refs.box.textContent}<div>`;

//     this.intervalid = setInterval(() => {
//       this.isActive = true;

//       refs.box.textContent = '';
//       const index = this.getRandomInRange(0, questions.length - 1);

//       const r = `<h1 class="title"> ${questions[index]} </h1>`;

//       return refs.box.insertAdjacentHTML('beforeend', r);
//     }, 50);

//     refs.boxHistory.insertAdjacentHTML('beforeend', textForHistory);
//   }

//   stop() {
//     this.isActive = false;
//     // this.counter = 0;
//     // refs.text.textContent = 0;
//     clearTimeout(this.intervalid);
//   }
// }

// const question = new Questions({});

// refs.startBtn.addEventListener(`click`, question.createRender.bind(question));
// refs.stopBtn.addEventListener(`click`, question.stop.bind(question));

// var arr = []; //записываем в этот массив рандомные числа
// var max = 100; // максимальная длина массива
// var rundomnumber; //случайное число

// while (arr.length <= max) {
//   rundomnumber = Math.floor(Math.random() * max); //создадим случайное число

//   if (arr.indexOf(rundomnumber) == -1) {
//     // проверим есть оно  у нас или нет

//     arr.push(rundomnumber); // записываем в массив т.к нету
//   }
// }

class Questions {
  constructor() {
    this.counter = 0;
    this.intervalid = null;
    this.isActive = false;
    this.arr = [];
  }

  // getRandomInRange(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  rrr(max) {
    var max;
    var rundomnumber;
    console.log(this.arr);
    while (this.arr.length <= max) {
      rundomnumber = Math.floor(Math.random() * max);

      if (this.arr.indexOf(rundomnumber) == -1) {
        this.arr.push(rundomnumber);
        return rundomnumber;
      }
    }
  }

  createRender() {
    refs.text.textContent = this.counter += 1;
    const textForHistory = `<div class="text-for-history">${refs.box.textContent}<div>`;

    this.isActive = true;

    refs.box.textContent = '';
    const index = this.rrr(questions.length - 1);

    const r = `<h1 class="title"> ${questions[index]} </h1>`;
    refs.boxHistory.insertAdjacentHTML('beforeend', textForHistory);
    return refs.box.insertAdjacentHTML('beforeend', r);
  }

  stop() {
    this.counter = 0;
    refs.text.textContent = 0;
    refs.boxHistory.textContent = 'В очікуванні на нові запитання';
    refs.box.textContent = 'Не зупиняйся, продовжуй використовувати цю чудову программу';
    this.arr = [];
  }
}

const question = new Questions({});

refs.startBtn.addEventListener(`click`, question.createRender.bind(question));
refs.stopBtn.addEventListener(`click`, question.stop.bind(question));
