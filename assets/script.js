//my API key: ac61cf25c6f1970b33df35358a103b01
var currentDate = moment().format("MM/DD/YYYY");
var startBtn = document.querySelector(".btn");
var todayWeather = $(".weather-today");
var forecastWeather = $(".weather-fiveday");
var searchBtn = $("#search-button");

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
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      var latitude = data.coord.lat;
      var longitude = data.coord.lon;
      var cityName = $("<h2>").html(
        nameInputEl.toUpperCase() + " " + currentDate
      );
      todayWeather.append($("<h2>").html(cityName));
      $("h2").addClass("card-header bg-warning");
      var tempToday = Math.ceil(data.main.temp);
      todayWeather.append($("<p>").html("Temperature: " + tempToday));
      var humidityToday = data.main.humidity;
      todayWeather.append($("<p>").html("Humidity: " + humidityToday));
      var windSpeedToday = data.wind.speed;
      todayWeather.append($("<p>").html("Wind: " + windSpeedToday));
      fetchWeather(latitude, longitude);
      searchHistory(nameInputEl);
    });
}
// move lat & lon into one-call API
function fetchWeather(latitude, longitude) {
  var fullAPI =
    "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=ac61cf25c6f1970b33df35358a103b01";
  fetch(fullAPI)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      // today's weather
      var iconDaily = data.daily[0].weather[0].icon;
      var iconListDaily = "http://openweathermap.org/img/wn/" + iconDaily + "@2x.png";
      console.log(iconListDaily)
      var uvIndexToday = data.current.uvi;
      todayWeather.append(
        $("<p>").html("UV Index: <span>" + uvIndexToday + "</span>")
      );
      if (uvIndexToday < 2) {
        $("span").addClass("text-success font-weight-bold");
      } else if (uvIndexToday < 2.1) {
        $("span").addClass("text-warning font-weight-bold");
      } else {
        $("span").addClass("text-danger font-weight-bold");
      }

      // loop to obtain the next five days
      for (var i = 1; i < 6; i++) {
        var iconWeekly = data.daily[i].weather[0].icon;
        var iconListWeekly = "http://openweathermap.org/img/wn/" + iconWeekly + "@2x.png";
      console.log(iconListWeekly)
        var dateWeekly = new Date(data.daily[i].dt * 1000).toLocaleDateString(
          "en-US"
        );
        var divEl = $(`
      <div class='col-12 col-md-2'>
      </div>
    `);
        divEl.append($("<h3>").html(dateWeekly));
        $("h3").addClass("bg-warning");
        var tempWeekly = data.daily[i].temp.day;
        divEl.append($("<p>").html("Temperature: " + tempWeekly));
        var humidWeekly = data.daily[i].humidity;
        divEl.append($("<p>").html("Humidity: " + humidWeekly));
        var windWeekly = data.daily[i].wind_speed;
        divEl.append($("<p>").html("Wind: " + windWeekly));
        $("p").addClass("container-fluid");
        forecastWeather.append(divEl);
      }
    });
}
// save city name
var searchHistory = function (city) {
  var cityArray = JSON.parse(localStorage.getItem("previousCity"));
 
  if (!cityArray) {
    var previousCities = [];
    previousCities.push(city);
    localStorage.setItem("previousCity", JSON.stringify(previousCities));
  } else {
    cityArray.push(city);
    localStorage.setItem("previousCity", JSON.stringify(cityArray))
  }
  var createButtons = function () {
    for (i = 0; i < cityArray.length; i++) {
      console.log(cityArray[i])
      var previousSearch = document.getElementById("previous-searches");
    var cityBtn = document.createElement("button");
cityBtn.append(previousSearch);
}
  };
  createButtons();
};

//keep Five Day Forecast
$(searchBtn).addEventListener("click", function () {
  $("h2").removeClass();
});
$(searchBtn).addEventListener("click", function () {
  todayWeather.reset();
})
