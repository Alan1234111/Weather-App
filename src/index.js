import Weather from "./modules/Weather";

function init() {
  const weather = new Weather();

  if (localStorage.getItem("lastLocation")) {
    weather.showWeather(weather.handleApi.getWeather(localStorage.getItem("lastLocation")));
  } else {
    weather.showWeather(weather.handleApi.getWeather("london"));
  }
}

init();

// GUVLXAK3DHQBXF1NGNAG605XOZFXFO6R
