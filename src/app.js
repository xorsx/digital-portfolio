function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "e7fo6tea7dab2f64b9d0694388b0ea0f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-input");
form.addEventListener("submit", search);

function formatDate() {
  let now = new Date();

  let dateTime = document.querySelector("#date-time");

  let hours = now.getHours();
  let minutes = now.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  dateTime.innerHTML = `${day} ${hours}:${minutes}`;
}

formatDate();
