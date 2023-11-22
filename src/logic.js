const url = 'https://api.weatherapi.com/v1/forecast.json?key=013579cd6ed546089c7200633231911&days=7&q=';
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

const feelsLikeTemplate = 'Feels like ';

async function getAPI () {
  const response = await fetch(url + (input.value || 'minsk'), {mode: 'cors'});
  const data = await response.json();
  console.log(data);
  getData(data);
}

function getData (data) {
  location.textContent = data.location.country + ', ' + data.location.name;
  localTime.textContent = data.location.localtime;
  humidity.textContent = data.current.humidity;
  uvIndex.textContent = data.current.uv;
  cloudiness.textContent = data.current.cloud;
  rainChance.textContent = data.forecast.forecastday[0].day.daily_chance_of_snow;
  tempStatus.textContent = data.current.condition.text;
  cloudImg.src = data.current.condition.icon;
  sunrise.textContent = data.forecast.forecastday[0].astro.sunrise;
  sunset.textContent = data.forecast.forecastday[0].astro.sunset;

  if (toCelcuisBtn.classList.contains('active')){
    degrees.textContent = data.current.temp_c + ' ' + String.fromCharCode(176) + 'C';
    wind.textContent = data.current.wind_kph + ' kph';
    visibility.textContent = data.current.vis_km + ' km';
    feelsLike.textContent = feelsLikeTemplate + data.current.feelslike_c + ' ' + String.fromCharCode(176) + 'C';

    zeroZero.textContent = data.forecast.forecastday[0].hour[0].temp_c + ' ' + String.fromCharCode(176) + 'C';
    zeroThree.textContent = data.forecast.forecastday[0].hour[3].temp_c + ' ' + String.fromCharCode(176) + 'C';
    zeroSix.textContent = data.forecast.forecastday[0].hour[6].temp_c + ' ' + String.fromCharCode(176) + 'C';
    zeroNine.textContent = data.forecast.forecastday[0].hour[9].temp_c + ' ' + String.fromCharCode(176) + 'C';
    oneTwo.textContent = data.forecast.forecastday[0].hour[12].temp_c + ' ' + String.fromCharCode(176) + 'C';
    oneFive.textContent = data.forecast.forecastday[0].hour[15].temp_c + ' ' + String.fromCharCode(176) + 'C';
    oneEight.textContent = data.forecast.forecastday[0].hour[18].temp_c + ' ' + String.fromCharCode(176) + 'C';
    twoOne.textContent = data.forecast.forecastday[0].hour[21].temp_c + ' ' + String.fromCharCode(176) + 'C';
  }
  else if (toFahrenheitBtn.classList.contains('active')) {
    degrees.textContent = data.current.temp_f + ' ' + String.fromCharCode(176) + 'F';
    wind.textContent = data.current.wind_mph + ' mph';
    visibility.textContent = data.current.vis_miles + ' miles';
    feelsLike.textContent = feelsLikeTemplate + data.current.feelslike_f + ' ' + String.fromCharCode(176) + 'F';

    zeroZero.textContent = data.forecast.forecastday[0].hour[0].temp_f + ' ' + String.fromCharCode(176) + 'F';
    zeroThree.textContent = data.forecast.forecastday[0].hour[3].temp_f + ' ' + String.fromCharCode(176) + 'F';
    zeroSix.textContent = data.forecast.forecastday[0].hour[6].temp_f + ' ' + String.fromCharCode(176) + 'F';
    zeroNine.textContent = data.forecast.forecastday[0].hour[9].temp_f + ' ' + String.fromCharCode(176) + 'F';
    oneTwo.textContent = data.forecast.forecastday[0].hour[12].temp_f + ' ' + String.fromCharCode(176) + 'F';
    oneFive.textContent = data.forecast.forecastday[0].hour[15].temp_f + ' ' + String.fromCharCode(176) + 'F';
    oneEight.textContent = data.forecast.forecastday[0].hour[18].temp_f + ' ' + String.fromCharCode(176) + 'F';
    twoOne.textContent = data.forecast.forecastday[0].hour[21].temp_f + ' ' + String.fromCharCode(176) + 'F';
  }

  zeroZeroStatus.textContent = data.forecast.forecastday[0].hour[0].condition.text;
  zeroThreeStatus.textContent = data.forecast.forecastday[0].hour[3].condition.text;
  zeroSixStatus.textContent = data.forecast.forecastday[0].hour[6].condition.text;
  zeroNineStatus.textContent = data.forecast.forecastday[0].hour[9].condition.text;
  oneTwoStatus.textContent = data.forecast.forecastday[0].hour[12].condition.text;
  oneFiveStatus.textContent = data.forecast.forecastday[0].hour[15].condition.text;
  oneEightStatus.textContent = data.forecast.forecastday[0].hour[18].condition.text;
  twoOneStatus.textContent = data.forecast.forecastday[0].hour[21].condition.text;

  zeroZeroImg.src = data.forecast.forecastday[0].hour[0].condition.icon;
  zeroThreeImg.src = data.forecast.forecastday[0].hour[3].condition.icon;
  zeroSixImg.src = data.forecast.forecastday[0].hour[6].condition.icon;
  zeroNineImg.src = data.forecast.forecastday[0].hour[9].condition.icon;
  oneTwoImg.src = data.forecast.forecastday[0].hour[12].condition.icon;
  oneFiveImg.src = data.forecast.forecastday[0].hour[15].condition.icon;
  oneEightImg.src = data.forecast.forecastday[0].hour[18].condition.icon;
  twoOneImg.src = data.forecast.forecastday[0].hour[21].condition.icon;

}

getAPI();
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

