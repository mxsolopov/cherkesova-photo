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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('DOMContentLoaded', function () {\n  'use strict';\n\n  var btn = document.querySelector('.button'),\n      heroImgWrap = document.querySelector('.hero__img-wrap'),\n      heroImg = document.querySelectorAll('.hero__img'),\n      windowWidth = window.innerWidth;\n\n  function checkWidth() {\n    if (windowWidth < 1024) {\n      btn.classList.remove('button-rotate');\n    } else {\n      btn.classList.add('button-rotate');\n      heroImgWrap.addEventListener('mouseover', function () {\n        heroImg.forEach(function (item, i) {\n          heroImg[i].style.transform = 'translateY(0)';\n        });\n      });\n      heroImgWrap.addEventListener('mouseleave', function () {\n        heroImg[0].style.transform = 'translateY(-6%)';\n        heroImg[2].style.transform = 'translateY(-6%)';\n        heroImg[1].style.transform = 'translateY(6%)';\n        heroImg[3].style.transform = 'translateY(6%)';\n      });\n    }\n  }\n\n  checkWidth();\n  window.addEventListener('resize', function () {\n    checkWidth();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Mzg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJyksXG4gICAgICBoZXJvSW1nV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19pbWctd3JhcCcpLFxuICAgICAgaGVyb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZXJvX19pbWcnKSxcbiAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgZnVuY3Rpb24gY2hlY2tXaWR0aCgpIHtcbiAgICBpZiAod2luZG93V2lkdGggPCAxMDI0KSB7XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLXJvdGF0ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXJvdGF0ZScpO1xuICAgICAgaGVyb0ltZ1dyYXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBoZXJvSW1nLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICBoZXJvSW1nW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDApJztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGhlcm9JbWdXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhlcm9JbWdbMF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTYlKSc7XG4gICAgICAgIGhlcm9JbWdbMl0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTYlKSc7XG4gICAgICAgIGhlcm9JbWdbMV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoNiUpJztcbiAgICAgICAgaGVyb0ltZ1szXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSg2JSknO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tXaWR0aCgpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgIGNoZWNrV2lkdGgoKTtcbiAgfSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8zYjQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map