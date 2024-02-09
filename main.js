console.log("This is only a test");

console.log("This is test number 2");

//Message Adjective Object

const adjectives = {
  weather: [
    "rainy",
    "sunny",
    "hot",
    "cold",
    "windy",
    "clear",
    "snowy",
    "hail",
    "thunder",
  ],
  work: [
    "slow",
    "relaxed",
    "stressful",
    "joyous",
    "despairing",
    "normal",
    "terrific",
    "terrible",
  ],
  freetime: [
    "productive",
    "aimless",
    "bleary",
    "useless",
    "fun",
    "fulfilling",
    "painful",
    "full",
    "joyous",
  ],
};

//Message Generator

const message = (name) => {
  let wth =
    adjectives.weather[Math.floor(Math.random() * adjectives.weather.length)];
  let wrk = adjectives.work[Math.floor(Math.random() * adjectives.work.length)];
  let ft =
    adjectives.freetime[Math.floor(Math.random() * adjectives.freetime.length)];
  console.log(
    `Hello, ${name}! Tomorrow, when you wake up, the weather will be ${wth}, your workday will be ${wrk}, and your free time will be ${ft}. Have a wonderful future!`
  );
};

message("Greg");
