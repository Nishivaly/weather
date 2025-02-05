export default (data) => {
  // resolvedAddress is the location
  const {
    resolvedAddress,
    days,
    currentConditions: { conditions: currentWeather },
  } = data;
  const weatherInfo = days.map(
    ({ conditions, datetime, tempmax, tempmin }) => ({
      conditions,
      datetime,
      tempmax,
      tempmin,
    }),
  );
  return [resolvedAddress, weatherInfo, currentWeather];
};
