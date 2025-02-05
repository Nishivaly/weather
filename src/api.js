import processData from "./process";
import populateTable from "./display";

export default (location, unit) => {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=RBZM57BNTJE7E5CQ9YQG8P3UJ&contentType=json`,
    {
      method: "GET",
      headers: {},
    },
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return processData(data);
    })
    .then(([place, cleanData]) => populateTable(cleanData, place, unit))
    .catch((error) => console.log(error));
};
