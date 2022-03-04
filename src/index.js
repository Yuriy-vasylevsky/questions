import './sass/main.scss';

const refs = {
  startBtn: document.querySelector('.hero-button'),
  box: document.querySelector('.box-section-hero__text'),
};

const questions = [`d`, `e`, `t`, `h`, `w`, `e`, `r`, `y`, `uy`];

// console.log(questions[getRandomInRange(0, 8)]);

//1 зробити рандомайзер

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

refs.box.textContent = 'Нажми на кнопку';
// 2 повісити сухач подій на кнопку

refs.startBtn.addEventListener(`click`, start);

function start() {
  let random = getRandomInRange(0, 8);
  console.log('🚀 ~ file: index.js ~ line 24 ~ start ~ random', random);
  refs.box.textContent = '';
  console.log('🚀 ~ file: index.js ~ line 24 ~ start ~ random', random);

  const render = `<h1 class="title"> ${questions[random]} </h1>`;

  return refs.box.insertAdjacentHTML('beforeend', render);
}

// function render() {}

// 3 зробити функцію вибора рандомного питання з масиву

// 4 зробити функцію редера
