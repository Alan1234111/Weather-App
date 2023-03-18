import HandleApi from "./HandleApi";

export default class Weather {
  constructor() {
    this.handleApi = new HandleApi();
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
