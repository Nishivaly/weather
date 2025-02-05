import "./styles.css";
import getWeather from "./api";

// getWeather("london");

const weatherForm = document.querySelector("#weatherForm");

(() => {
  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = document.querySelector("#location").value;
    getWeather(location);
    weatherForm.reset();
  });
})();
