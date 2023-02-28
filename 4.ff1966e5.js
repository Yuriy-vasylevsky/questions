// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/4.js":[function(require,module,exports) {
"use strict";

require("../sass/main.scss");

const refs = {
  startBtn: document.querySelector('.footer-button'),
  stopBtn: document.querySelector('.stop'),
  box: document.querySelector('.box-section-hero__text'),
  text: document.querySelector('.text'),
  boxHistory: document.querySelector('.box-section-hero__texti-history'),
  load: document.querySelector('.animation')
};
const questions = [`Расскажи о первом сексуальном опыте.`, `Какие интимные ласки предпочитаешь?`, `Назови самую притягательную и эротичную часть женского тела.`, `Что не приемлешь в сексе?`, `Занятия сексом и любовью – идентичные понятия?`, `Пробовал ролевые игры и какие образы возбуждают сильнее всего?`, `Любишь эксперименты?`, `Что неприемлемо в интимных отношениях?`, `Как относишься к фетишам, например, чулкам и кружевному белью?`, `Расскажи о первой девушке, которая вызвала дикое возбуждение.`, `О чем чаще всего фантазируешь?`, `Готов ли воплощать эротические фантазии со мной?`, `С кем из известных личностей хотел бы переспать?`, `Насколько быстро возбуждаешься, что на это влияет?`, `Что должна сделать девушка, чтобы ты разогрелся?`, `Любимая позиция из Камасутры?`, `Как часто меняешь позиции во время полового акта?`, `Какая поза больше всего не нравится?`, `Пользовался интимными игрушками?`, `Какой самый любимый девайс из секс-шопа?`, `Бывал в интимном магазине вместе с девушкой?`, `Готов посетить секс-шоп со мной?`, `Какие игрушки хочешь использовать вместе со мной?`, `Пробовал ролевые игры?`, `Какую роль отведешь мне?`, `Расскажи о неудачном опыте если он был.`, `Поделись самой постыдной фантазией.`, `Где у тебя расположена эрогенная зона и есть ли она?`, `Пара слов о размере.`, `Со сколькими девушками переспал?`, `Сколько девушек ублажали тебя орально, но без проникновения?`, `Мечтаешь о сексе со мной?`, `Какие мысли посещают во время оргазма?`, `Я снилась тебе в эротических сновидениях?`, `Самый долгий срок без интима?`, `Рассказываешь о сексуальных победах друзьям?`, `Испытывал одновременный оргазм?`, `Что нового больше всего хочешь попробовать?`, `Практикуешь анальный секс с девушкой?`, `Твое отношение к свингерам?`, `Пробовал БДСМ?`, `Пробовал 69, был сверху или снизу?`, `Хотел бы мастурбировать на лесби?`, `Пробовал страпон с женщиной?`, `Как относишься к кунилингусу?`, `Готов делать куни без последующего продолжения?`, `Как часто мастурбируешь?`, `Удовлетворял себя представляя меня?`, `Часто смотришь порно?`, `Во время просмотра всегда самоудовлетворяешься?`, `Сколько раз был секс с незнакомками, с которыми больше не виделся?`, `Снимал проститутку?`, `Пробовал секс с другим парнем?`, `Как накажешь меня за такие вопросы?`, `Самый экстремальный половой акт в жизни?`, `Была близость с девственницей?`, `Из последних 10 актов сколько были незащищенными?`, `Как относишься к половому акту в публичном месте?`, `Мастурбируешь на мою лучшую подругу?`, `Хотел бы переспать со своей преподавательницей?`, `Участвовал в оргиях?`, `Подглядывал за девушками в юности в раздевалке или туалете?`, `Бреешь своего дружка?`, `Нравятся интимные стрижки или любишь, когда у леди гладко?`, `Мастурбировал вместе с другом?`, `Согласился бы на взаимное удовлетворение руками без последующего акта?`, `Уважаешь фут-фетиш и готов попробовать его со мной?`, `Возраст самой взрослой партнерши?`, `Сколько лет самой юной девушке, с которой ты спал?`, `Пробовал свое семя?`, `Любишь, чтобы девушка глотала?`, `Переспишь с моей сестрой если я и она будем не против?`, `Любишь доминировать или подчиняться?`, `Спал с азиатками или чернокожими?`, `Если бы застал меня с другим парнем, присоединился бы?`, `Если бы застал меня с подругой, твоя реакция?`, `Болел венерическими заболеваниями?`, `Какую игрушку купил бы для нас обоих?`, `Пробовал секс, когда кто-то третий смотрит на вас?`, `Оральные ласки с другим партнером – это измена?`, `Сколько готов заплатить за ночь любви с женщиной мечты?`, `Испытывал преждевременный оргазм до начала акта?`, `Влюблялся в проституток?`, `Какой предмет женского гардероба готов одеть для прелюдии?`, `Глотать или выплевывать?`, `Когда-нибудь нюхал ношенное нижнее белье?`, `Был ли сквирт у твоей партнерши во время секса?`, `Делали тебе минет, пока ты управляешь машиной?`, `Хотел бы снятся в порнофильме?`, `Мастурбировал в публичном месте?`, `Любишь ласкать соски?`, `Готов обсудить интимные отношения без цензуры?`, `Самые необычные места, где был интим?`, `Знаешь, что такое афродизиаки, пробовал?`, `Возбуждают интимные фото или снимки в купальнике?`, `Назови предмет женского гардероба или обувь, вызывающий возбуждение.`, `Что из нестандартных вещей практиковал?`, `На что готов ради интима с объектом вожделения?`, `Как относишься к татуировкам в интимной зоне?`, `Пробовал секс по телефону или вирт?`, `Будем вместе смотреть фильмы для взрослых?`, `Какую категорию порно выбираешь чаще всего?`, `Последний ряд в кинозале для секса или только поцелуев?`, `Объект возбуждения: нагота или одежда?`, `Сколько длятся предварительные ласки?`, `Ходишь голым по квартире?`, `Ты был хорошим мальчиком в прошедшем году?`, `Сколько номеров бывших в твоем телефоне?`, `Свободные отношения – приемлемая тема?`, `Когда-нибудь изменял или ловил на этом партнера?`, `Когда в последний раз удовлетворял сам себя?`, `Любишь, когда девушка кричит?`, `Называл кого-то грязной сучкой?`, `Какие ласки хочешь прямо сейчас?`, `Был секс с женой друга?`, `Спал с коллегами по работе?`, `Изменял с родственниками девушки?`, `Ходил на интимную депиляцию?`]; // function getRandomInRange(min, max) {
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
      refs.load.classList.add(`visually-hidden`); // refs.historyText.classList.add(`text-for-history-transform`);

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
},{"../sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52295" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/4.js"], null)
//# sourceMappingURL=/4.ff1966e5.js.map