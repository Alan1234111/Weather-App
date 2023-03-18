export default class HandleApi {
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
