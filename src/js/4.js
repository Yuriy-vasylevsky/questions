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
  `Расскажи о первом сексуальном опыте.`,
  `Какие интимные ласки предпочитаешь?`,
  `Назови самую притягательную и эротичную часть женского тела.`,
  `Что не приемлешь в сексе?`,
  `Занятия сексом и любовью – идентичные понятия?`,
  `Пробовал ролевые игры и какие образы возбуждают сильнее всего?`,
  `Любишь эксперименты?`,
  `Что неприемлемо в интимных отношениях?`,
  `Как относишься к фетишам, например, чулкам и кружевному белью?`,
  `Расскажи о первой девушке, которая вызвала дикое возбуждение.`,
  `О чем чаще всего фантазируешь?`,
  `Готов ли воплощать эротические фантазии со мной?`,
  `С кем из известных личностей хотел бы переспать?`,
  `Насколько быстро возбуждаешься, что на это влияет?`,
  `Что должна сделать девушка, чтобы ты разогрелся?`,
  `Любимая позиция из Камасутры?`,
  `Как часто меняешь позиции во время полового акта?`,
  `Какая поза больше всего не нравится?`,
  `Пользовался интимными игрушками?`,
  `Какой самый любимый девайс из секс-шопа?`,
  `Бывал в интимном магазине вместе с девушкой?`,
  `Готов посетить секс-шоп со мной?`,
  `Какие игрушки хочешь использовать вместе со мной?`,
  `Пробовал ролевые игры?`,
  `Какую роль отведешь мне?`,
  `Расскажи о неудачном опыте если он был.`,
  `Поделись самой постыдной фантазией.`,
  `Где у тебя расположена эрогенная зона и есть ли она?`,
  `Пара слов о размере.`,
  `Со сколькими девушками переспал?`,
  `Сколько девушек ублажали тебя орально, но без проникновения?`,
  `Мечтаешь о сексе со мной?`,
  `Какие мысли посещают во время оргазма?`,
  `Я снилась тебе в эротических сновидениях?`,
  `Самый долгий срок без интима?`,
  `Рассказываешь о сексуальных победах друзьям?`,
  `Испытывал одновременный оргазм?`,
  `Что нового больше всего хочешь попробовать?`,

  `Практикуешь анальный секс с девушкой?`,
  `Твое отношение к свингерам?`,
  `Пробовал БДСМ?`,
  `Пробовал 69, был сверху или снизу?`,

  `Хотел бы мастурбировать на лесби?`,
  `Пробовал страпон с женщиной?`,
  `Как относишься к кунилингусу?`,
  `Готов делать куни без последующего продолжения?`,
  `Как часто мастурбируешь?`,
  `Удовлетворял себя представляя меня?`,
  `Часто смотришь порно?`,
  `Во время просмотра всегда самоудовлетворяешься?`,
  `Сколько раз был секс с незнакомками, с которыми больше не виделся?`,
  `Снимал проститутку?`,
  `Пробовал секс с другим парнем?`,
  `Как накажешь меня за такие вопросы?`,
  `Самый экстремальный половой акт в жизни?`,
  `Была близость с девственницей?`,
  `Из последних 10 актов сколько были незащищенными?`,
  `Как относишься к половому акту в публичном месте?`,
  `Мастурбируешь на мою лучшую подругу?`,
  `Хотел бы переспать со своей преподавательницей?`,
  `Участвовал в оргиях?`,
  `Подглядывал за девушками в юности в раздевалке или туалете?`,
  `Бреешь своего дружка?`,
  `Нравятся интимные стрижки или любишь, когда у леди гладко?`,
  `Мастурбировал вместе с другом?`,
  `Согласился бы на взаимное удовлетворение руками без последующего акта?`,
  `Уважаешь фут-фетиш и готов попробовать его со мной?`,
  `Возраст самой взрослой партнерши?`,
  `Сколько лет самой юной девушке, с которой ты спал?`,
  `Пробовал свое семя?`,
  `Любишь, чтобы девушка глотала?`,
  `Переспишь с моей сестрой если я и она будем не против?`,
  `Любишь доминировать или подчиняться?`,
  `Спал с азиатками или чернокожими?`,
  `Если бы застал меня с другим парнем, присоединился бы?`,
  `Если бы застал меня с подругой, твоя реакция?`,
  `Болел венерическими заболеваниями?`,
  `Какую игрушку купил бы для нас обоих?`,
  `Пробовал секс, когда кто-то третий смотрит на вас?`,
  `Оральные ласки с другим партнером – это измена?`,
  `Сколько готов заплатить за ночь любви с женщиной мечты?`,
  `Испытывал преждевременный оргазм до начала акта?`,
  `Влюблялся в проституток?`,
  `Какой предмет женского гардероба готов одеть для прелюдии?`,
  `Глотать или выплевывать?`,
  `Когда-нибудь нюхал ношенное нижнее белье?`,
  `Был ли сквирт у твоей партнерши во время секса?`,
  `Делали тебе минет, пока ты управляешь машиной?`,
  `Хотел бы снятся в порнофильме?`,
  `Мастурбировал в публичном месте?`,
  `Любишь ласкать соски?`,
  `Готов обсудить интимные отношения без цензуры?`,
  `Самые необычные места, где был интим?`,
  `Знаешь, что такое афродизиаки, пробовал?`,
  `Возбуждают интимные фото или снимки в купальнике?`,
  `Назови предмет женского гардероба или обувь, вызывающий возбуждение.`,
  `Что из нестандартных вещей практиковал?`,
  `На что готов ради интима с объектом вожделения?`,
  `Как относишься к татуировкам в интимной зоне?`,
  `Пробовал секс по телефону или вирт?`,
  `Будем вместе смотреть фильмы для взрослых?`,
  `Какую категорию порно выбираешь чаще всего?`,
  `Последний ряд в кинозале для секса или только поцелуев?`,
  `Объект возбуждения: нагота или одежда?`,
  `Сколько длятся предварительные ласки?`,
  `Ходишь голым по квартире?`,
  `Ты был хорошим мальчиком в прошедшем году?`,
  `Сколько номеров бывших в твоем телефоне?`,
  `Свободные отношения – приемлемая тема?`,
  `Когда-нибудь изменял или ловил на этом партнера?`,
  `Когда в последний раз удовлетворял сам себя?`,
  `Любишь, когда девушка кричит?`,
  `Называл кого-то грязной сучкой?`,
  `Какие ласки хочешь прямо сейчас?`,
  `Был секс с женой друга?`,
  `Спал с коллегами по работе?`,
  `Изменял с родственниками девушки?`,
  `Ходил на интимную депиляцию?`,
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
