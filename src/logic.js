const url = 'https://api.weatherapi.com/v1/forecast.json?key=013579cd6ed546089c7200633231911&days=8&q=';
const feelsLikeTemplate = 'Feels like ';
const degreeCircle = String.fromCharCode(176);
const celcuis = ` ${degreeCircle}C`;
const fahrenheit = ` ${degreeCircle}F`;
const http = 'http:'

const errorDialog = document.querySelector('.errorDialog');
const errorDialogCloseBtn = document.querySelector('.closeDialog');
const errorDescription = document.querySelector('.errorDescription');

const searchBtn = document.querySelector('.searchBtn');
const toCelcuisBtn = document.querySelector('.toCelcuisBtn');
const toFahrenheitBtn = document.querySelector('.toFahrenheitBtn');
const input = document.querySelector('.searchBar');

const location = document.querySelector('.location');
const localTime = document.querySelector('.localTime');
const cloudImg = document.querySelector('.cloud');
const degrees = document.querySelector('.degrees');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const uvIndex = document.querySelector('.uvIndex');
const visibility = document.querySelector('.visibility');
const cloudiness = document.querySelector('.cloudiness');
const rainChance = document.querySelector('.rainChance');
const tempStatus = document.querySelector('.tempStatus');
const feelsLike = document.querySelector('.feelsLike');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');

const zeroZero = document.querySelector('.zero-zero');
const zeroThree = document.querySelector('.zero-three');
const zeroSix = document.querySelector('.zero-six');
const zeroNine = document.querySelector('.zero-nine');
const oneTwo = document.querySelector('.one-two');
const oneFive = document.querySelector('.one-five');
const oneEight = document.querySelector('.one-eight');
const twoOne = document.querySelector('.two-one');

const zeroZeroImg = document.querySelector('.zeroZeroImg');
const zeroThreeImg = document.querySelector('.zeroThreeImg');
const zeroSixImg = document.querySelector('.zeroSixImg');
const zeroNineImg = document.querySelector('.zeroNineImg');
const oneTwoImg = document.querySelector('.oneTwoImg');
const oneFiveImg = document.querySelector('.oneFiveImg');
const oneEightImg = document.querySelector('.oneEightImg');
const twoOneImg = document.querySelector('.twoOneImg');

const zeroZeroStatus = document.querySelector('.zeroZeroStatus');
const zeroThreeStatus = document.querySelector('.zeroThreeStatus');
const zeroSixStatus = document.querySelector('.zeroSixStatus');
const zeroNineStatus = document.querySelector('.zeroNineStatus');
const oneTwoStatus = document.querySelector('.oneTwoStatus');
const oneFiveStatus = document.querySelector('.oneFiveStatus');
const oneEightStatus = document.querySelector('.oneEightStatus');
const twoOneStatus = document.querySelector('.twoOneStatus');

const dayOneImg = document.querySelector('.imgDayOne');
const dayTwoImg = document.querySelector('.imgDayTwo');
const dayThreeImg = document.querySelector('.imgDayThree');
const dayFourImg = document.querySelector('.imgDayFour');
const dayFiveImg = document.querySelector('.imgDayFive');
const daySixImg = document.querySelector('.imgDaySix');
const daySevenImg = document.querySelector('.imgDaySeven');

const dateOne = document.querySelector('.dateOne');
const dateTwo = document.querySelector('.dateTwo');
const dateThree = document.querySelector('.dateThree');
const dateFour = document.querySelector('.dateFour');
const dateFive = document.querySelector('.dateFive');
const dateSix = document.querySelector('.dateSix');
const dateSeven = document.querySelector('.dateSeven');

const statusDayOne = document.querySelector('.statusDayOne');
const statusDayTwo = document.querySelector('.statusDayTwo');
const statusDayThree = document.querySelector('.statusDayThree');
const statusDayFour = document.querySelector('.statusDayFour');
const statusDayFive = document.querySelector('.statusDayFive');
const statusDaySix = document.querySelector('.statusDaySix');
const statusDaySeven = document.querySelector('.statusDaySeven');

const tempDayOne = document.querySelector('.tempDayOne');
const tempDayTwo = document.querySelector('.tempDayTwo');
const tempDayThree = document.querySelector('.tempDayThree');
const tempDayFour = document.querySelector('.tempDayFour');
const tempDayFive = document.querySelector('.tempDayFive');
const tempDaySix = document.querySelector('.tempDaySix');
const tempDaySeven = document.querySelector('.tempDaySeven');


async function getAPI () {
  try {
    const response = await fetch(url + (input.value || 'minsk'), {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    getData(data);
  }
  catch (err){
    console.log(err.status);
    if (err.status = 400) {
      errorDescription.textContent =  'There\'s no such a city';
      errorDialog.showModal();
    }
    else if (err.status = 404) {
      errorDescription.textContent =  'Network connection is not stable';
      errorDialog.showModal();
    }
  }
}

function getData (data) {
  showCurrentWeather(data);
  showHourlyWeather(data);
  showWeeklyWeather(data);
}

function showCurrentWeather (data) {
  location.textContent = data.location.country + ', ' + data.location.name;
  localTime.textContent = data.location.localtime;
  humidity.textContent = data.current.humidity + '%';
  uvIndex.textContent = data.current.uv;
  cloudiness.textContent = data.current.cloud + '%';
  rainChance.textContent = data.forecast.forecastday[0].day.daily_chance_of_rain + '%';
  tempStatus.textContent = data.current.condition.text;
  cloudImg.src = `${http}${data.current.condition.icon}`;
  sunrise.textContent = data.forecast.forecastday[0].astro.sunrise;
  sunset.textContent = data.forecast.forecastday[0].astro.sunset;

  if (toCelcuisBtn.classList.contains('active')){
    degrees.textContent = data.current.temp_c + celcuis;
    wind.textContent = data.current.wind_kph + ' kph';
    visibility.textContent = data.current.vis_km + ' km';
    feelsLike.textContent = feelsLikeTemplate + data.current.feelslike_c + celcuis;
  }
  else if (toFahrenheitBtn.classList.contains('active')) {
    degrees.textContent = data.current.temp_f + fahrenheit;
    wind.textContent = data.current.wind_mph + ' mph';
    visibility.textContent = data.current.vis_miles + ' miles';
    feelsLike.textContent = feelsLikeTemplate + data.current.feelslike_f + fahrenheit;
  }
}

function showHourlyWeather (data) {
  zeroZeroStatus.textContent = data.forecast.forecastday[0].hour[0].condition.text;
  zeroThreeStatus.textContent = data.forecast.forecastday[0].hour[3].condition.text;
  zeroSixStatus.textContent = data.forecast.forecastday[0].hour[6].condition.text;
  zeroNineStatus.textContent = data.forecast.forecastday[0].hour[9].condition.text;
  oneTwoStatus.textContent = data.forecast.forecastday[0].hour[12].condition.text;
  oneFiveStatus.textContent = data.forecast.forecastday[0].hour[15].condition.text;
  oneEightStatus.textContent = data.forecast.forecastday[0].hour[18].condition.text;
  twoOneStatus.textContent = data.forecast.forecastday[0].hour[21].condition.text;

  zeroZeroImg.src = http + data.forecast.forecastday[0].hour[0].condition.icon;
  zeroThreeImg.src = http + data.forecast.forecastday[0].hour[3].condition.icon;
  zeroSixImg.src = http + data.forecast.forecastday[0].hour[6].condition.icon;
  zeroNineImg.src = http + data.forecast.forecastday[0].hour[9].condition.icon;
  oneTwoImg.src = http + data.forecast.forecastday[0].hour[12].condition.icon;
  oneFiveImg.src = http + data.forecast.forecastday[0].hour[15].condition.icon;
  oneEightImg.src = http + data.forecast.forecastday[0].hour[18].condition.icon;
  twoOneImg.src = http + data.forecast.forecastday[0].hour[21].condition.icon;

  if (toCelcuisBtn.classList.contains('active')){
    zeroZero.textContent = data.forecast.forecastday[0].hour[0].temp_c + celcuis;
    zeroThree.textContent = data.forecast.forecastday[0].hour[3].temp_c + celcuis;
    zeroSix.textContent = data.forecast.forecastday[0].hour[6].temp_c + celcuis;
    zeroNine.textContent = data.forecast.forecastday[0].hour[9].temp_c + celcuis;
    oneTwo.textContent = data.forecast.forecastday[0].hour[12].temp_c + celcuis;
    oneFive.textContent = data.forecast.forecastday[0].hour[15].temp_c + celcuis;
    oneEight.textContent = data.forecast.forecastday[0].hour[18].temp_c + celcuis;
    twoOne.textContent = data.forecast.forecastday[0].hour[21].temp_c + celcuis;
  }
  else if (toFahrenheitBtn.classList.contains('active')) {
    zeroZero.textContent = data.forecast.forecastday[0].hour[0].temp_f + fahrenheit;
    zeroThree.textContent = data.forecast.forecastday[0].hour[3].temp_f + fahrenheit;
    zeroSix.textContent = data.forecast.forecastday[0].hour[6].temp_f + fahrenheit;
    zeroNine.textContent = data.forecast.forecastday[0].hour[9].temp_f + fahrenheit;
    oneTwo.textContent = data.forecast.forecastday[0].hour[12].temp_f + fahrenheit;
    oneFive.textContent = data.forecast.forecastday[0].hour[15].temp_f + fahrenheit;
    oneEight.textContent = data.forecast.forecastday[0].hour[18].temp_f + fahrenheit;
    twoOne.textContent = data.forecast.forecastday[0].hour[21].temp_f + fahrenheit;
  }
}

function showWeeklyWeather(data) {
  dayOneImg.src = http + data.forecast.forecastday[1].day.condition.icon;
  dayTwoImg.src = http + data.forecast.forecastday[2].day.condition.icon;
  dayThreeImg.src = http + data.forecast.forecastday[3].day.condition.icon;
  dayFourImg.src = http + data.forecast.forecastday[4].day.condition.icon;
  dayFiveImg.src = http + data.forecast.forecastday[5].day.condition.icon;
  daySixImg.src = http + data.forecast.forecastday[6].day.condition.icon;
  daySevenImg.src = http + data.forecast.forecastday[7].day.condition.icon;

  dateOne.textContent = data.forecast.forecastday[1].date;
  dateTwo.textContent = data.forecast.forecastday[2].date;
  dateThree.textContent = data.forecast.forecastday[3].date;
  dateFour.textContent = data.forecast.forecastday[4].date;
  dateFive.textContent = data.forecast.forecastday[5].date;
  dateSix.textContent = data.forecast.forecastday[6].date;
  dateSeven.textContent = data.forecast.forecastday[7].date;

  statusDayOne.textContent = data.forecast.forecastday[1].day.condition.text;
  statusDayTwo.textContent = data.forecast.forecastday[2].day.condition.text;
  statusDayThree.textContent = data.forecast.forecastday[3].day.condition.text;
  statusDayFour.textContent = data.forecast.forecastday[4].day.condition.text;
  statusDayFive.textContent = data.forecast.forecastday[5].day.condition.text;
  statusDaySix.textContent = data.forecast.forecastday[6].day.condition.text;
  statusDaySeven.textContent = data.forecast.forecastday[7].day.condition.text;

  if (toCelcuisBtn.classList.contains('active')){
    tempDayOne.textContent = data.forecast.forecastday[1].day.maxtemp_c + `${degreeCircle} / ` + data.forecast.forecastday[1].day.mintemp_c + celcuis;
    tempDayTwo.textContent = data.forecast.forecastday[2].day.maxtemp_c + `${degreeCircle} / ` + data.forecast.forecastday[2].day.mintemp_c + celcuis;
    tempDayThree.textContent = data.forecast.forecastday[3].day.maxtemp_c + `${degreeCircle} / ` + data.forecast.forecastday[3].day.mintemp_c + celcuis;
    tempDayFour.textContent = data.forecast.forecastday[4].day.maxtemp_c + `${degreeCircle} / ` + data.forecast.forecastday[4].day.mintemp_c + celcuis;
    tempDayFive.textContent = data.forecast.forecastday[5].day.maxtemp_c + `${degreeCircle} / ` + data.forecast.forecastday[5].day.mintemp_c + celcuis;
    tempDaySix.textContent = data.forecast.forecastday[6].day.maxtemp_c + `${degreeCircle} / ` + data.forecast.forecastday[6].day.mintemp_c + celcuis;
    tempDaySeven.textContent = data.forecast.forecastday[7].day.maxtemp_c + `${degreeCircle} / ` + data.forecast.forecastday[7].day.mintemp_c + celcuis;
  }
  else if (toFahrenheitBtn.classList.contains('active')) {
    tempDayOne.textContent = data.forecast.forecastday[1].day.maxtemp_f + `${degreeCircle} / ` + data.forecast.forecastday[1].day.mintemp_f + fahrenheit;
    tempDayTwo.textContent = data.forecast.forecastday[2].day.maxtemp_f + `${degreeCircle} / ` + data.forecast.forecastday[2].day.mintemp_f + fahrenheit;
    tempDayThree.textContent = data.forecast.forecastday[3].day.maxtemp_f + `${degreeCircle} / ` + data.forecast.forecastday[3].day.mintemp_f + fahrenheit;
    tempDayFour.textContent = data.forecast.forecastday[4].day.maxtemp_f + `${degreeCircle} / ` + data.forecast.forecastday[4].day.mintemp_f + fahrenheit;
    tempDayFive.textContent = data.forecast.forecastday[5].day.maxtemp_f + `${degreeCircle} / ` + data.forecast.forecastday[5].day.mintemp_f + fahrenheit;
    tempDaySix.textContent = data.forecast.forecastday[6].day.maxtemp_f + `${degreeCircle} / ` + data.forecast.forecastday[6].day.mintemp_f + fahrenheit;
    tempDaySeven.textContent = data.forecast.forecastday[7].day.maxtemp_f + `${degreeCircle} / ` + data.forecast.forecastday[7].day.mintemp_f + fahrenheit;
  }
};


getAPI()
searchBtn.addEventListener('click', getAPI);
toCelcuisBtn.addEventListener('click', ()=> {
  if (!toCelcuisBtn.classList.contains('active') && toFahrenheitBtn.classList.contains('active')) {
    toCelcuisBtn.classList.add('active');
    toFahrenheitBtn.classList.remove('active');
  }
  getAPI();
});

toFahrenheitBtn.addEventListener('click', () => {
  if (!toFahrenheitBtn.classList.contains('active') && toCelcuisBtn.classList.contains('active')) {
    toFahrenheitBtn.classList.add('active');
    toCelcuisBtn.classList.remove('active');
  }
  getAPI();
});

errorDialogCloseBtn.addEventListener('click', () => {
  errorDialog.close();
})

