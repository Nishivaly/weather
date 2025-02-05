import processData from "./process";
import populateTable from "./display";

export default (location) => {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=RBZM57BNTJE7E5CQ9YQG8P3UJ`,
    { mode: "cors" },
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return processData(data);
    })
    .then(([place, data]) => populateTable(data, place))
    // .then(([place, weatherInfo]) => console.log(place, weatherInfo))
    .catch((error) => console.log(error));
};
