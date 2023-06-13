function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "9e21abf3913eb0t4o03834ad4082bcb4";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Johannesburg&key=9e21abf3913eb0t4o03834ad4082bcb4&units=metric";

axios.get(apiUrl).then(displayTemperature);
