export default (data) => {
  const { resolvedAddress, days } = data;
  const weatherInfo = days.map(
    ({ conditions, datetime, tempmax, tempmin }) => ({
      conditions,
      datetime,
      tempmax,
      tempmin,
    }),
  );

  console.log(weatherInfo);
};
