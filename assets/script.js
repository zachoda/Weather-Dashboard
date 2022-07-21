//my API key: ac61cf25c6f1970b33df35358a103b01
var currentDate = moment().format("MM/DD/YYYY");
var startBtn = document.querySelector(".btn");
var todayWeather = $("#weather-today");
var forecastWeather = $("#weather-fiveday")
// var previousCities = [];

// attach an event listener for startBtn
startBtn.addEventListener("click", fetchCoordinates);
// get city coordinates from API
function fetchCoordinates(event) {
  event.preventDefault();
  var nameInputEl = document.querySelector("#chosen-city").value;
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
    nameInputEl +
    "&appid=ac61cf25c6f1970b33df35358a103b01";
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
        return response.json()
    }
  }).then(function(data){
    console.log(data);
    var latitude = data.coord.lat;
    var longitude = data.coord.lon;
    fetchWeather(latitude,longitude);
    var cityName = $("<#city-name>").html = nameInputEl + " " + currentDate;
    todayWeather.prepend(cityName.toUpperCase());
  })
  
//   saveLocalStorage(city)
}
// move lat & lon into one-call API
function fetchWeather(latitude,longitude) {
  
  var fullAPI = "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + latitude + "&lon=" + longitude + "&appid=ac61cf25c6f1970b33df35358a103b01";
  fetch(fullAPI).then(function(response) {
    if (response.ok) {
        return response.json()
    }
  }).then (function(data){
    //today's weather
  //   var weatherIcon = data.weather[0].icon;
  // var iconLibrary =
  //   "http://openweathermap.org/img/w/" + iconToday + ".png";
    console.log(data)
    var iconToday = data.current.weather[0].icon;
    var tempToday = Math.ceil(data.current.temp);
    todayWeather.append($("<#temp-today>")).html("Temperature: " + tempToday);
    todayWeather.appendChild;
    var humidityToday = data.current.humidity;
    todayWeather.append($("#humidity-today")).html("Humidity: " + humidityToday);
    var uvIndexToday = data.current.uvi;
    todayWeather.append($("#uv-today")).html("UV Index: " + uvIndexToday);
    var windSpeedToday = data.current.wind_speed;
    todayWeather.append($("#wind-today")).html("Wind: " + windSpeedToday);
  })
  // loop to obtain the next five days
  for (var i = 1; i < 6; i++) {
    var iconWeekly = [i].weather[i].icon;
    console.log(iconWeekly[1])
    var tempWeekly = daily[i].temp.day;
    forecastWeather.append($("#temp")).html("Temperature: " + tempWeekly)
    var humidWeekly = daily[i].humidity;
    forecastWeather.append($("#humidity")).html("Humidity: " + humidWeekly)
    var windWeekly = daily [i].wind_speed;
    forecastWeather.append($("#wind")).html("Wind: " + windWeekly)
  }
};

