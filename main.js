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
    this.locationName = document.getElementById("location-name");
    this.locationTime = document.getElementById("location-time");
    this.weatherTemp = document.getElementById("weather-temp");
    this.weatherName = document.getElementById("weather-name");
    this.weatherIcon = document.getElementById("weather-icon");
    this.weatherWind = document.getElementById("weather-wind");
    this.weatherHumidity = document.getElementById("weather-humidity");
    this.weatherPressure = document.getElementById("weather-pressure");

    this.handleApi = new _HandleApi__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.formSearch = document.getElementById("form-location");
    this.formSearch.addEventListener("submit", this.getWeatherDetails);
  }

  getWeatherDetails = (e) => {
    e.preventDefault();
    const location = document.getElementById("input-location").value;
    const formatLocation = this.formatLocationText(location);
    this.showWeather(this.handleApi.getWeather(formatLocation));
    localStorage.setItem("lastLocation", formatLocation);
  };

  async showWeather(weatherDetails) {
    const response = await weatherDetails;
    this.locationName.textContent = response.location;
    this.locationTime.textContent = response.time;
    this.weatherTemp.textContent = `${response.temp} °C`;
    this.weatherName.textContent = response.weatherName;
    this.weatherIcon.src = response.weatherIcon;
    this.weatherWind.textContent = `${response.windSpeed} km/h`;
    this.weatherHumidity.textContent = `${response.humidity} %`;
    this.weatherPressure.textContent = `${response.pressure} hpa`;
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

  if (localStorage.getItem("lastLocation")) {
    weather.showWeather(weather.handleApi.getWeather(localStorage.getItem("lastLocation")));
  } else {
    weather.showWeather(weather.handleApi.getWeather("london"));
  }
}

init();

// GUVLXAK3DHQBXF1NGNAG605XOZFXFO6R

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQSxvSEFBb0gsU0FBUztBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCb0M7QUFDcEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7QUFDQTtBQUNBLHNDQUFzQyxvQkFBb0I7QUFDMUQsMENBQTBDLG1CQUFtQjtBQUM3RCwwQ0FBMEMsbUJBQW1CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7QUFDeEM7QUFDQTtBQUNBLHNCQUFzQix3REFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9IYW5kbGVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvV2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlQXBpIHtcclxuICBhc3luYyBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ZWY0MmExMzg4YTgwNGUyOGIzZDE3MzYxNjIzMTgwMyZxPSR7bG9jYXRpb259YCk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlscyA9IHt9O1xyXG5cclxuICAgIHdlYXRoZXJEZXRhaWxzLmxvY2F0aW9uID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcclxuICAgIHdlYXRoZXJEZXRhaWxzLnRpbWUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpLnNsaWNlKDEpWzBdO1xyXG4gICAgd2VhdGhlckRldGFpbHMud2VhdGhlckljb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xyXG4gICAgd2VhdGhlckRldGFpbHMud2VhdGhlck5hbWUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgd2VhdGhlckRldGFpbHMudGVtcCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2M7XHJcbiAgICB3ZWF0aGVyRGV0YWlscy53aW5kU3BlZWQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoO1xyXG4gICAgd2VhdGhlckRldGFpbHMuaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xyXG4gICAgd2VhdGhlckRldGFpbHMucHJlc3N1cmUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnByZXNzdXJlX21iO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyRGV0YWlscztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEhhbmRsZUFwaSBmcm9tIFwiLi9IYW5kbGVBcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5sb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uLW5hbWVcIik7XHJcbiAgICB0aGlzLmxvY2F0aW9uVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24tdGltZVwiKTtcclxuICAgIHRoaXMud2VhdGhlclRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItdGVtcFwiKTtcclxuICAgIHRoaXMud2VhdGhlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItbmFtZVwiKTtcclxuICAgIHRoaXMud2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaWNvblwiKTtcclxuICAgIHRoaXMud2VhdGhlcldpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItd2luZFwiKTtcclxuICAgIHRoaXMud2VhdGhlckh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWh1bWlkaXR5XCIpO1xyXG4gICAgdGhpcy53ZWF0aGVyUHJlc3N1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItcHJlc3N1cmVcIik7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVBcGkgPSBuZXcgSGFuZGxlQXBpKCk7XHJcbiAgICB0aGlzLmZvcm1TZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbG9jYXRpb25cIik7XHJcbiAgICB0aGlzLmZvcm1TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLmdldFdlYXRoZXJEZXRhaWxzKTtcclxuICB9XHJcblxyXG4gIGdldFdlYXRoZXJEZXRhaWxzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1sb2NhdGlvblwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGZvcm1hdExvY2F0aW9uID0gdGhpcy5mb3JtYXRMb2NhdGlvblRleHQobG9jYXRpb24pO1xyXG4gICAgdGhpcy5zaG93V2VhdGhlcih0aGlzLmhhbmRsZUFwaS5nZXRXZWF0aGVyKGZvcm1hdExvY2F0aW9uKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3RMb2NhdGlvblwiLCBmb3JtYXRMb2NhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgc2hvd1dlYXRoZXIod2VhdGhlckRldGFpbHMpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2VhdGhlckRldGFpbHM7XHJcbiAgICB0aGlzLmxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmxvY2F0aW9uO1xyXG4gICAgdGhpcy5sb2NhdGlvblRpbWUudGV4dENvbnRlbnQgPSByZXNwb25zZS50aW1lO1xyXG4gICAgdGhpcy53ZWF0aGVyVGVtcC50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLnRlbXB9IMKwQ2A7XHJcbiAgICB0aGlzLndlYXRoZXJOYW1lLnRleHRDb250ZW50ID0gcmVzcG9uc2Uud2VhdGhlck5hbWU7XHJcbiAgICB0aGlzLndlYXRoZXJJY29uLnNyYyA9IHJlc3BvbnNlLndlYXRoZXJJY29uO1xyXG4gICAgdGhpcy53ZWF0aGVyV2luZC50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLndpbmRTcGVlZH0ga20vaGA7XHJcbiAgICB0aGlzLndlYXRoZXJIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLmh1bWlkaXR5fSAlYDtcclxuICAgIHRoaXMud2VhdGhlclByZXNzdXJlLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UucHJlc3N1cmV9IGhwYWA7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRMb2NhdGlvblRleHQobG9jYXRpb24pIHtcclxuICAgIGxldCBmb3JtYXRMb2NhdGlvbiA9IGxvY2F0aW9uLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGZvcm1hdExvY2F0aW9uO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBXZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvV2VhdGhlclwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBjb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIoKTtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdExvY2F0aW9uXCIpKSB7XHJcbiAgICB3ZWF0aGVyLnNob3dXZWF0aGVyKHdlYXRoZXIuaGFuZGxlQXBpLmdldFdlYXRoZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0TG9jYXRpb25cIikpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2VhdGhlci5zaG93V2VhdGhlcih3ZWF0aGVyLmhhbmRsZUFwaS5nZXRXZWF0aGVyKFwibG9uZG9uXCIpKTtcclxuICB9XHJcbn1cclxuXHJcbmluaXQoKTtcclxuXHJcbi8vIEdVVkxYQUszREhRQlhGMU5HTkFHNjA1WE9aRlhGTzZSXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==