import { btnHandler, checkWeather } from "./apikey";
import { searchInput } from "./selectors";

export default class WeatherApp {
  init() {}
  listener() {
    btn.addEventListener("click", btnHandler);
    // searchInput.addEventListener("keyup", btnHandler);
  }
}
