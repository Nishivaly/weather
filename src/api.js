import processData from "./process";
import populateTable from "./display";

export default async (location, unit) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=RBZM57BNTJE7E5CQ9YQG8P3UJ&contentType=json`,
      {
        method: "GET",
        headers: {},
      },
    );
    const data = await response.json();
    console.log(data);
    const [place, cleanData, currentWeather] = processData(data);
    populateTable(cleanData, place, unit, currentWeather);
  } catch (error) {
    console.log(error);
  }
};
