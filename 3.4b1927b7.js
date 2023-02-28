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
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/3.js":[function(require,module,exports) {
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
const questions = [`Твои самые распространенные сексуальные фантазии ?`, `Есть ли в фантазиях место мне?`, `Запретная тема в сексе?`, `Любишь эксперименты?`, `Расскажешь о первом сексуальном опыте?`, `Самая эротичная часть мужского тела?`, `Равнозначны понятия занятия любовью и сексом?`, `Во сколько лет испытала первый оргазм?`, `Помнишь первого парня, от вида которого возбудилась?`, `Какие интимные игры больше всего возбуждают?`, `Прелюдия – долго и страстно или не обязательна?`, `Что неприемлемо в постели?`, `Часто фантазируешь на интимные темы?`, `Хочешь воплотить эротические фантазии со мной?`, `Кто из медийных персонажей возбуждает (актер, певец, ведущий, известный блогер)?`, `Как тебя быстро возбудить, что на это влияет?`, `Любимая поза во время секса?`, `Какую позицию ненавидишь?`, `У тебя есть вибратор или другие игрушки?`, `Часто ходишь в интимный магазин?`, `Посещала сексшоп вместе с парнем?`, `Нравится частая смена поз во время полового акта?`, `Любимая игрушка из арсенала магазина для взрослых?`, `Когда последний раз пользовалась вибратором?`, `Какие игрушки готова попробовать во время интима со мной?`, `Расскажи о самой бесстыдной фантазии.`, `Участвовала в ролевых играх?`, `В какой роли видишь меня?`, `Был ли неудачный опыт, поделись.`, `Где расположена твоя эрогенная зона?`, `Какой у тебя размер груди?`, `На что парни чаще обращают внимание в твоем теле: попа или грудь?`, `Сколько партнеров у тебя было?`, `Был ли опыт оральных ласк без продолжения (тебе или ты)?`, `О чем думаешь во время оргазма?`, `Хочешь меня прямо сейчас?`, `Снятся эротические сны?`, `Я участвовал в твоих эротических сновидениях?`, `Самый длительный период без секса?`, `Обсуждаешь секс с подругами?`, `Что нового хочешь привнести в свою интимную жизнь?`, `Испытывала одновременный оргазм с молодым человеком?`, `Пробовала лесбийские ласки?`, `Нравится анальный секс?`, `Участвовала в БДСМ сессиях?`, `Во время 69 с парнем предпочитаешь быть снизу или сверху?`, `Нравится 69 с девушками?`, `Мастурбировала на геев?`, `Как относишься к лесбийскому сексу со страпоном?`, `Любишь оральные ласки?`, `Как часто делаешь минет парням?`, `Глотать или выплевывать?`, `Любишь делать куни девушкам или только минет парням?`, `Когда последний раз удовлетворяла сама себя?`, `Максимальное количество самоудовлетворений за один день?`, `Какое порно возбуждает больше всего?`, `Часто смотришь порнофильмы?`, `Во время просмотра удовлетворяешь себя рукой или игрушкой?`, `Спонтанный секс с незнакомцем: сколько раз и понравилось ли?`, `Участвовала в оргиях?`, `Допускаешь секс с лучшей подругой?`, `Спала с кем-то из друзей или близких парня?`, `Когда-нибудь отдавалась за деньги или дорогой подарок?`, `Самый экстремальный секс в жизни?`, `Как лишилась девственности?`, `Практикуешь незащищенный секс?`, `Возбуждает измена?`, `Переспала бы с преподавателем, который нравится?`, `Был интим в публичном месте?`, `Самоудовлетворяешься, представляя кого-то из моих друзей?`, `Приемлешь секс по дружбе?`, `Подсматривала за мальчиками в раздевалке в детстве?`, `Бреешь киску или делаешь интимную стрижку?`, `Любишь бритый пах или все равно?`, `Мастурбировала вместе с подружкой?`, `Согласилась бы на взаимное самоудовлетворение с парнем без последующего акта?`, `Возбуждают фетиши, в том числе фут-фетиш?`, `Сколько лет было самому старшему и самому младшему партнерам?`, `Занималась сексом с несовершеннолетними?`, `Переспишь с моим другом, если я буду не против?`, `Подчиняться или доминировать?`, `Если бы застала меня с другой девушкой, присоединилась бы?`, `Что приобретешь в магазине для взрослых для нас обоих?`, `Возбудишься, если во время секса на нас будет смотреть кто-то посторонний?`, `Оральные ласки с другим партнером – измена?`, `Кончала во время прелюдий?`, `У тебя был сквирт?`, `Если секс втроем, то в презервативе?`, `Оральные ласки только в кондоме или без?`, `Делала минет парню пока он за рулем?`, `Мечтала о съемках в порно?`, `Как накажешь меня за такие вопросы?`, `Кого захотела впервые в жизни, что аж трусы промокли?`, `Сколько раз за ночь должен быть секс?`, `Как быстро кончаешь во время мастурбации?`, `Сколько времени требуется для того, чтобы кончить с партнером?`, `Какой оргазм ярче: вагинальный или клиторальный?`, `Смущаешься при покупке презервативов?`, `Какие моменты из порно возбуждают?`, `Встречая красивого парня, представляешь, как он входит в тебя?`, `Была на нудистком пляже?`, `Где находится точка G?`, `Пробовала записывать свой секс на видео?`, `Как относишься к интиму с чернокожими или азиатами?`, `Возбуждаешься от поцелуев в грудь?`, `Сколько раз отдавалась пьяной на вписках?`, `Возбуждаешься под воздействием алкоголя?`, `Приемлешь примирение через постель?`, `Как называешь свою киску?`, `Читала Камасутру?`, `Хотела бы попробовать новые позы со мной?`, `При свете или в кромешной тьме?`, `Любимая музыка для интима?`, `Попробовала бы связывание со мной?`, `Заводит неприличная лексика из уст партнера?`, `Половой акт на кухонном столе или балконе – реальность или табу?`, `Нежный акт или жесткая долбежка?`, `Готова уступить парня на одну ночь лучшей подруге?`, `Спала с девственником?`, `Секс до свадьбы существует?`, `Был опыт с закомплексованными парнями?`, `Накачанные мускулы или большой член?`, `Какой размер нравится больше всего?`, `Сколько раз в день (неделю) достаточно для полного удовлетворения?`, `Пробовала перед зеркалом?`, `Упругий фаллос или накаченная попа?`, `Как часто фантазируешь о других мужчинах?`, `Возбуждают спортивные, подтянутые или тучные?`, `Половые отношения с одним мужчиной – печаль?`, `Расскажи об идеальном акте в твоей жизни.`, `Мнение подруг влияет на то, будет у тебя с парнем или нет?`, `Секс или любовь?`, `Возможна любовь без секса, а секс без любви?`, `Берешь на первое свидание кондомы?`, `Кто должен заботиться о безопасности и покупать контрацептивы?`, `Практиковала секс с разными партнерами в течение одного дня?`, `Самый любимый вариант секса, представим, что другие после выбора запретят?`, `Готовишь завтрак голой?`, `Какая часть моего тела тебе больше всего нравится?`, `Откуда начнешь массаж?`, `В какие моменты возбуждаю больше всего?`, `Хочешь стриптиз?`, `Часто хочется кричать в постели?`, `Ревнуешь, когда разговариваю с твоими подругами?`, `Сверху или снизу?`, `В машине или на природе?`]; // function getRandomInRange(min, max) {
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/3.js"], null)
//# sourceMappingURL=/3.4b1927b7.js.map