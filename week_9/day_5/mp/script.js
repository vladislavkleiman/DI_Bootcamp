const api_key = '6bc236fa8bd5e7e03f83fd8cea3eac74';
const inputCityName = document.getElementById('inputSearch');
let xhr = new XMLHttpRequest();
let requestWeather = new XMLHttpRequest();
const weatherList = document.getElementById('weatherList');

document.getElementById('btnSearch').addEventListener('click', getInfo);

xhr.addEventListener('load', getInfoCity);
requestWeather.addEventListener('load', getWeather);

function getInfo(event) {
    event.preventDefault();
    const inputCityNameValue = inputCityName.value;
    const fullUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${inputCityNameValue}&limit=5&appid=${api_key}`;
    xhr.open('GET', fullUrl);
    xhr.send();
}

function getInfoCity() {
    const response = JSON.parse(xhr.response);
    const lat = response[0].lat;
    const lon = response[0].lon;
    const nameCity = response[0].name;
    const codeCountry = response[0].country;
    const urlGetDetails = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    requestWeather.nameCity = nameCity;
    requestWeather.codeCountry = codeCountry;
    requestWeather.open('GET', urlGetDetails);
    requestWeather.send();
}

function getWeather() {
    const response = JSON.parse(requestWeather.response);
    const temperature = Math.round(response.main.temp);
    const idIconWeather = response.weather[0].icon;
    const descriptionWeather = response.weather[0].description;
    const cardCity = document.createElement('div');
    const divNameCityCountry = document.createElement('div')
    divNameCityCountry.innerHTML = `${requestWeather.nameCity}, ${requestWeather.codeCountry}`
    divNameCityCountry.className = "nameCityCountry";
    const divTemperature = document.createElement('div')
    divTemperature.innerHTML = `${temperature}&#8451`;
    divTemperature.className = "temperature";
    cardCity.appendChild(divNameCityCountry)
    const imageWeather = document.createElement('img');
    imageWeather.src = `https://openweathermap.org/img/wn/${idIconWeather}@4x.png`;
    imageWeather.className = 'iconWeather'
    cardCity.appendChild(imageWeather);
    cardCity.appendChild(divTemperature)
    const divDescriptionWeather = document.createElement('div')
    divDescriptionWeather.innerHTML = descriptionWeather;
    divDescriptionWeather.className = 'descriptionWeather'
    cardCity.appendChild(divDescriptionWeather)
    cardCity.className = "cardOfCity";
    weatherList.appendChild(cardCity);
    const divCircleBig = document.createElement('div')
    divCircleBig.className ='circleBig'
    cardCity.appendChild(divCircleBig)
    const divCircleSmall = document.createElement('div')
    divCircleSmall.className ='circleSmall'
    cardCity.appendChild(divCircleSmall)
    inputCityName.value = '';
    divDeleteBtn = document.createElement('img')
    divDeleteBtn.src = "https://img.icons8.com/ios/100/multiply.png";
    divDeleteBtn.className ='deleteButton'
    cardCity.appendChild(divDeleteBtn)
    divDeleteBtn.addEventListener('click', deleteCard)
}

function deleteCard(event){
    event.target.parentElement.remove()
}
