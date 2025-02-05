export default (data) => {
  // resolvedAddress is the location
  const { resolvedAddress, days } = data;
  const weatherInfo = days.map(
    ({ conditions, datetime, tempmax, tempmin }) => ({
      conditions,
      datetime,
      tempmax,
      tempmin,
    }),
  );
  return [resolvedAddress, weatherInfo];
};
