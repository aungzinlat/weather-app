import {
  cityName,
  error,
  searchInput,
  weather,
  weatherIcon,
} from "./selectors";

export const apiKey = "49c9c3785a11b4f3560cf5a520da7994";
export const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404 || response.status == 400) {
    error.classList.replace("hidden", "block");
    weather.classList.add("hidden");
  } else {
    var data = await response.json();
    console.log(data);

    cityName.innerHTML = data.name;
    temp.innerHTML = Math.floor(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = `../public/images/clouds.png`;
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = `../public/images/clear.png`;
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = `../public/images/rain.png`;
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = `../public/images/drizzle.png`;
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = `../public/images/mist.png`;
    }
    error.classList.add("hidden");
    weather.classList.replace("hidden", "flex");
  }
}

export const btnHandler = (event) => {
  event.preventDefault();
  weather.classList.toggle("animate__slideInDown");
  const searchValue = searchInput.value;
  checkWeather(searchValue);
};
