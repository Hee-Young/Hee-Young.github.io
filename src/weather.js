const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "241a1fe8428dc2785aaa979ddc541de4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      let temperature = parseInt(data.main.temp);
      weather.innerText = `${data.weather[0].main} | ${temperature}°C`;
    });
}
function onGeoError() {
  weather.innerText = "Can't find you. No weather for you.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
