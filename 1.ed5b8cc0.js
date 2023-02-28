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
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/1.js":[function(require,module,exports) {
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
const questions = [`Давно робив що-небудь нестандартне, наприклад, купався голим, не спав дві доби?`, `Є улюблена хокейна (футбольна) команда?`, `Яка книга (фільм, пісня, блюдо) найулюбленіша?`, `Що для тебе означають друзі, батьки, кохана?`, `Дратують тупі люди?`, `Як змусити себе працювати, якщо лінь?`, `Назви 3 сайта, на які заходиш найчастіше на самоті?`, `Улюблене місце в рідному місті? Що з ним пов’язано?`, `Як вбити нудьгу, самий небанальний варіант?`, `Яке місто вважаєш найкрасивішим, незвичайним?`, `Яка дрібниця може поліпшити настрій?`, `Була кличка в дитинстві? А зараз?`, `Що таке жіночність (любов, ніжність, шлюб, сім’я) для тебе?`, `На інших планетах є життя?`, `Як витратиш мільйон?`, `Бачиш дивні сни? Про що вони?`, `Любов окрилює чи руйнує?`, `Знаєш, що таке нерозділене почуття?`, `Вмієш влаштовувати романтичні побачення?`, `Любиш говорити про політику?`, `Чи зміг би кинути все і поїхати в іншу країну один?`, `Чи можна образитися назавжди і ніколи більше не розмовляти з людиною?`, `Чим займаєшся, коли виходиш з інстаграму?`, `Хто головний у відносинах: чоловік або жінка?`, `Яка відпустка найідеальніша для тебе?`, `Чим тебе можна образити?`, `Що піднімає тобі настрій?`, `Здатний на компроміси?`, `Чи хочеш жити в інший час?`, `Ти дивився мою анкету, сподобалися мої фото?`, `Можеш допомогти хорошій людині, яку ти не знаєш, безкорисливо?`, `Можеш розповісти про свою роботу (хобі, друзів, сім’ї)?`, `Хто ти по гороскопу? `, `Любиш сюрпризи?`, `Яким спортом займаєшся?`, `Давно був у кіно (театрі, на концерті, на футболі)?`, `Правда, що слабкі чоловік бояться сильних жінок?`, `Як ти ставишся до зрад у шлюбі?`, `Часто обманюєш інших?`, `Якщо знаєш, що тобe не покарають, яку капость хотів би зробити?`, `Чи зможеш довірити дружині сімейний бюджет?`, `Заради коханої відмовишся від друзів, роботи, хобі?`, `Якщо колишня подзвонить, попросить відновити відносини, що зробиш?`, `Хто повинен першим вибачатися після сварки: хлопець чи дівчина?`, `Дозволиш коханій дівчині переглядати твої смс, дзвінки, читати повідомлення від друзів?`, `Як ставишся до емансипації?`, `У тебе була страшна дівчина(хлопець)?`, `Які теми не можна обговорювати з малознайомими дівчатами(хлопцями)?`, `Як думаєш, яким кольором можна пофарбувати холодильник?`, `У мене 15 собак, як ти ставишся до тварин?`, `У тебе є алгоритм розкидання шкарпеток по квартирі?`, `Навіщо лисому кухареві ковпак?`, `У закоханих можуть бути таємниці один від одного?`, `Ідеальні відносини – це … Назви три ключових слова для визначення.`, `Яка пісня більше підходить мені? Тобі? Нашій парі?`, `Протилежності притягуються або відштовхуються?`, `Подобається, коли дівчина робить перший крок?`, `Що краще, лежати на дивані або подорожувати?`, `Які 3 речі візьмеш на безлюдний острів?`, `Опиши себе п’ятьма словами?`, `Твоя потаємна мрія?`, `Що важливіше розум чи серце?`, `Які книги не порадиш читати?`, `Друг може брехати, зраджувати?`, `Що робиш краще за інших?`, `Віриш в життя після смерті?`, `Що страшніше: місяць в лісі або місяць без інтернету?`, `Як ти ставишся до відносин на відстані?`, `Хто на твою думку головний у сім’ї?`, `Що вкрали гопніки в Києві у солдат РФ?`];

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/1.js"], null)
//# sourceMappingURL=/1.ed5b8cc0.js.map