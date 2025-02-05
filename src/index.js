import "./styles.css";
import getWeather from "./api";

// getWeather("london");

(() => {
  const weatherForm = document.querySelector("#weatherForm");

  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = document.querySelector("#location").value;
    const unit = document.querySelector("input[name='unit']:checked").value;
    getWeather(location, unit);
    // weatherForm.reset();
  });
})();
