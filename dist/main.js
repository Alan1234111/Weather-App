/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/HandleApi.js":
/*!**********************************!*\
  !*** ./src/modules/HandleApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HandleApi)
/* harmony export */ });
class HandleApi {
  async getWeather(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ef42a1388a804e28b3d173616231803&q=${location}`);
    const weatherData = await response.json();

    const weatherDetails = {};

    weatherDetails.location = weatherData.location.name;
    weatherDetails.time = weatherData.location.localtime.split(" ").slice(1)[0];
    weatherDetails.weatherIcon = weatherData.current.condition.icon;
    weatherDetails.weatherName = weatherData.current.condition.text;
    weatherDetails.temp = weatherData.current.feelslike_c;
    weatherDetails.windSpeed = weatherData.current.wind_kph;
    weatherDetails.humidity = weatherData.current.humidity;
    weatherDetails.pressure = weatherData.current.pressure_mb;

    return weatherDetails;
  }
}


/***/ }),

/***/ "./src/modules/Weather.js":
/*!********************************!*\
  !*** ./src/modules/Weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var _HandleApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandleApi */ "./src/modules/HandleApi.js");


class Weather {
  constructor() {
    this.handleApi = new _HandleApi__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.formSearch = document.getElementById("form-location");
    this.formSearch.addEventListener("submit", this.getWeatherDetails);
  }

  getWeatherDetails = (e) => {
    e.preventDefault();
    const location = document.getElementById("input-location").value;
    const formatLocation = this.formatLocationText(location);
    this.showWeather(this.handleApi.getWeather(formatLocation));
  };

  async showWeather(weatherDetails) {
    const response = await weatherDetails;
    console.log(response);
  }

  formatLocationText(location) {
    let formatLocation = location.trim().toLowerCase();

    return formatLocation;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Weather */ "./src/modules/Weather.js");


function init() {
  const weather = new _modules_Weather__WEBPACK_IMPORTED_MODULE_0__["default"]();
}
init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQSxvSEFBb0gsU0FBUztBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCb0M7QUFDcEM7QUFDZTtBQUNmO0FBQ0EseUJBQXlCLGtEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7QUFDeEM7QUFDQTtBQUNBLHNCQUFzQix3REFBTztBQUM3QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvSGFuZGxlQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZUFwaSB7XHJcbiAgYXN5bmMgZ2V0V2VhdGhlcihsb2NhdGlvbikge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWVmNDJhMTM4OGE4MDRlMjhiM2QxNzM2MTYyMzE4MDMmcT0ke2xvY2F0aW9ufWApO1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHMgPSB7fTtcclxuXHJcbiAgICB3ZWF0aGVyRGV0YWlscy5sb2NhdGlvbiA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XHJcbiAgICB3ZWF0aGVyRGV0YWlscy50aW1lID0gd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KFwiIFwiKS5zbGljZSgxKVswXTtcclxuICAgIHdlYXRoZXJEZXRhaWxzLndlYXRoZXJJY29uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcclxuICAgIHdlYXRoZXJEZXRhaWxzLndlYXRoZXJOYW1lID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuICAgIHdlYXRoZXJEZXRhaWxzLnRlbXAgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jO1xyXG4gICAgd2VhdGhlckRldGFpbHMud2luZFNwZWVkID0gd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaDtcclxuICAgIHdlYXRoZXJEZXRhaWxzLmh1bWlkaXR5ID0gd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eTtcclxuICAgIHdlYXRoZXJEZXRhaWxzLnByZXNzdXJlID0gd2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZV9tYjtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlckRldGFpbHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBIYW5kbGVBcGkgZnJvbSBcIi4vSGFuZGxlQXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGFuZGxlQXBpID0gbmV3IEhhbmRsZUFwaSgpO1xyXG4gICAgdGhpcy5mb3JtU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWxvY2F0aW9uXCIpO1xyXG4gICAgdGhpcy5mb3JtU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5nZXRXZWF0aGVyRGV0YWlscyk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWF0aGVyRGV0YWlscyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbG9jYXRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCBmb3JtYXRMb2NhdGlvbiA9IHRoaXMuZm9ybWF0TG9jYXRpb25UZXh0KGxvY2F0aW9uKTtcclxuICAgIHRoaXMuc2hvd1dlYXRoZXIodGhpcy5oYW5kbGVBcGkuZ2V0V2VhdGhlcihmb3JtYXRMb2NhdGlvbikpO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIHNob3dXZWF0aGVyKHdlYXRoZXJEZXRhaWxzKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdlYXRoZXJEZXRhaWxzO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TG9jYXRpb25UZXh0KGxvY2F0aW9uKSB7XHJcbiAgICBsZXQgZm9ybWF0TG9jYXRpb24gPSBsb2NhdGlvbi50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0TG9jYXRpb247XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy9XZWF0aGVyXCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcigpO1xyXG59XHJcbmluaXQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9