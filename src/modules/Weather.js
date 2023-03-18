import HandleApi from "./HandleApi";

export default class Weather {
  constructor() {
    this.locationName = document.getElementById("location-name");
    this.locationTime = document.getElementById("location-time");
    this.weatherTemp = document.getElementById("weather-temp");
    this.weatherName = document.getElementById("weather-name");
    this.weatherIcon = document.getElementById("weather-icon");
    this.weatherWind = document.getElementById("weather-wind");
    this.weatherHumidity = document.getElementById("weather-humidity");
    this.weatherPressure = document.getElementById("weather-pressure");

    this.handleApi = new HandleApi();
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
