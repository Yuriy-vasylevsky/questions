import '../sass/main.scss';

const refs = {
  startBtn: document.querySelector('.footer-button'),
  stopBtn: document.querySelector('.stop'),
  box: document.querySelector('.box-section-hero__text'),
  text: document.querySelector('.text'),
  boxHistory: document.querySelector('.box-section-hero__texti-history'),
  load: document.querySelector('.animation'),
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
  `У закоханих можуть бути таємниці один від одного?`,
  `Ідеальні відносини – це … Назви три ключових слова для визначення.`,
  `Яка пісня більше підходить мені? Тобі? Нашій парі?`,
  `Протилежності притягуються або відштовхуються?`,
  `Подобається, коли дівчина робить перший крок?`,
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

class Questions {
  constructor() {
    this.counter = 0;
    this.intervalid = null;
    this.isActive = false;
    this.arr = [];
  }

  rundomaizer(max) {
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

  startAnimation() {
    refs.load.classList.remove(`visually-hidden`);
    refs.load.classList.add(`load`);
    refs.box.classList.add(`transform`);
  }

  stopAnimation() {
    refs.box.classList.remove(`transform`);
    refs.load.classList.remove(`load`);
    refs.load.classList.add(`visually-hidden`);
  }

  renderTextHistory() {
    const textForHistory = `<div class="text-for-history">${refs.box.textContent}</div>`;
    refs.boxHistory.insertAdjacentHTML('beforeend', textForHistory);
  }

  renderQuestion() {
    const index = this.rundomaizer(questions.length - 1);
    const r = `<h1 class="title"> ${questions[index]} </h1>`;
    refs.box.insertAdjacentHTML('beforeend', r);
  }

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.startAnimation();
    this.renderTextHistory();

    this.intervalid = setTimeout(() => {
      this.isActive = false;
      refs.text.textContent = this.counter += 1;
      refs.box.textContent = '';

      this.stopAnimation();
      this.renderQuestion();
    }, 1500);
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

refs.startBtn.addEventListener(`click`, question.start.bind(question));
refs.stopBtn.addEventListener(`click`, question.stop.bind(question));
