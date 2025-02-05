export default (data) => {
  // resolvedAddress is the location
  const {
    resolvedAddress: place,
    days,
    currentConditions: { conditions: currentWeather },
  } = data;
  const cleanData = days.map(({ conditions, datetime, tempmax, tempmin }) => ({
    conditions,
    datetime,
    tempmax,
    tempmin,
  }));
  return [place, cleanData, currentWeather];
};
