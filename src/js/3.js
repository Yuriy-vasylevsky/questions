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
  `Твои самые распространенные сексуальные фантазии ?`,
  `Есть ли в фантазиях место мне?`,
  `Запретная тема в сексе?`,
  `Любишь эксперименты?`,
  `Расскажешь о первом сексуальном опыте?`,
  `Самая эротичная часть мужского тела?`,
  `Равнозначны понятия занятия любовью и сексом?`,
  `Во сколько лет испытала первый оргазм?`,
  `Помнишь первого парня, от вида которого возбудилась?`,
  `Какие интимные игры больше всего возбуждают?`,
  `Прелюдия – долго и страстно или не обязательна?`,
  `Что неприемлемо в постели?`,
  `Часто фантазируешь на интимные темы?`,
  `Хочешь воплотить эротические фантазии со мной?`,
  `Кто из медийных персонажей возбуждает (актер, певец, ведущий, известный блогер)?`,
  `Как тебя быстро возбудить, что на это влияет?`,
  `Любимая поза во время секса?`,
  `Какую позицию ненавидишь?`,
  `У тебя есть вибратор или другие игрушки?`,
  `Часто ходишь в интимный магазин?`,
  `Посещала сексшоп вместе с парнем?`,
  `Нравится частая смена поз во время полового акта?`,
  `Любимая игрушка из арсенала магазина для взрослых?`,
  `Когда последний раз пользовалась вибратором?`,
  `Какие игрушки готова попробовать во время интима со мной?`,
  `Расскажи о самой бесстыдной фантазии.`,
  `Участвовала в ролевых играх?`,
  `В какой роли видишь меня?`,
  `Был ли неудачный опыт, поделись.`,
  `Где расположена твоя эрогенная зона?`,
  `Какой у тебя размер груди?`,
  `На что парни чаще обращают внимание в твоем теле: попа или грудь?`,
  `Сколько партнеров у тебя было?`,
  `Был ли опыт оральных ласк без продолжения (тебе или ты)?`,
  `О чем думаешь во время оргазма?`,
  `Хочешь меня прямо сейчас?`,
  `Снятся эротические сны?`,
  `Я участвовал в твоих эротических сновидениях?`,
  `Самый длительный период без секса?`,
  `Обсуждаешь секс с подругами?`,
  `Что нового хочешь привнести в свою интимную жизнь?`,
  `Испытывала одновременный оргазм с молодым человеком?`,
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
    refs.load.classList.remove(`visually-hidden`);
    refs.load.classList.add(`load`);
    refs.box.classList.add(`transform`);

    this.intervalid = setTimeout(() => {
      refs.text.textContent = this.counter += 1;
      const textForHistory = `<div class="text-for-history">${refs.box.textContent}</div>`;

      this.isActive = true;

      refs.box.textContent = '';
      const index = this.rrr(questions.length - 1);

      const r = `<h1 class="title"> ${questions[index]} </h1>`;
      refs.boxHistory.insertAdjacentHTML('beforeend', textForHistory);
      refs.box.classList.remove(`transform`);
      refs.load.classList.remove(`load`);
      refs.load.classList.add(`visually-hidden`);
      // refs.historyText.classList.add(`text-for-history-transform`);
      return refs.box.insertAdjacentHTML('beforeend', r);
    }, 2000);
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
