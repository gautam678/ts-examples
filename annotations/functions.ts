const add = (a: number, b: number): number => a + b;

// Anon functions

function divide(a: number, b: number): number {
  return a / b;
}

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.weather);
};
