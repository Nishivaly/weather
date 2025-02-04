import processData from "./process";

export default (location) => {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=RBZM57BNTJE7E5CQ9YQG8P3UJ`,
    { mode: "cors" },
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      processData(data);
    })
    .catch((error) => console.log(error));
};
