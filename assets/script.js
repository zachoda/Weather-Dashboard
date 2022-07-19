//my API key: ac61cf25c6f1970b33df35358a103b01

var startBtn = document.querySelector(".btn");
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
    // document.append($<"#city-name">).html = data.main.name;
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
    console.log(data)
    var tempToday = data.current.temp;
    var humidityToday = data.current.humidity;
    var uvIndexToday = data.current.uvi;
    var windSpeedToday = data.current.wind_speed;
  })
  for (var i = 1; i < 6; i++) {
    var tempWeekly = daily[i].temp.day;
    var humidWeekly = daily[i].humidity;
    var windWeekly = daily [i].wind_speed;
  }
};

