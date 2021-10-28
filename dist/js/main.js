/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/tab-form/tab-form.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/tab-form/tab-form.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tabForm = document.querySelector(".js-tab-form");
var tabs = tabForm.querySelectorAll("[data-tab-id]");
var views = tabForm.querySelectorAll("[data-view-id]");
var bgImage = tabForm.querySelector("[data-tab-image]");
var forms = tabForm.querySelectorAll("form");
var inputTel = document.querySelector("#phone");

try {
  if (tabs.length > 0 && views.length > 0) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        tabs.forEach(function (el) {
          return el.classList.remove("active");
        });
        views.forEach(function (el) {
          return el.classList.remove("active");
        });
        var tabId = Number(e.target.dataset.tabId) - 1;
        e.target.classList.add("active");
        views[tabId].classList.add("active");
      });
    });
  }
} catch (error) {}

try {
  inputTel.addEventListener("keypress", function (e) {
    if (e.which !== 43 && e.which < 48 || e.which > 57) {
      e.preventDefault();
    }
  });
  window.intlTelInput(inputTel, {
    customContainer: "tab-form__input-wrapper"
  });
} catch (error) {}

try {
  if (forms.length > 0) {
    forms.forEach(function (form) {
      var requriredElements = form.querySelectorAll("[required]");
      var submitBtn = form.querySelector("button[type='button']");
      var errorsElement = form.querySelector('.tab-form__errors');
      submitBtn.addEventListener("click", function (e) {
        errorsElement.innerHTML = '';
        requriredElements.forEach(function (field) {
          if (field.hasAttribute("required")) {
            if (!field.checkValidity()) {
              var errorHTML = "<small class=\"tab-form__error\">".concat(field.dataset.requirederrormessage, "</small>");
              errorsElement.insertAdjacentHTML("beforeend", errorHTML);
            }
          }
        });
      });
    });
  }
} catch (error) {}
/**
 * Нажимаем submit
 * Если в форме есть обязательные поля и если у они не прошли валидацию, то
 * Собираем все элементы полей, вытаскиваем аттрибуты и создаем html код в ошибке
 * Повторяем нажатие submit, проверяем, если ок, удаляем ошибки, если опять есть ошибки
 */

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tab_form_tab_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/tab-form/tab-form */ "./src/blocks/modules/tab-form/tab-form.js");
/* harmony import */ var _modules_tab_form_tab_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_tab_form_tab_form__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map