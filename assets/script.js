//my API key: ac61cf25c6f1970b33df35358a103b01

var startBtn = document.querySelector(".btn");

// attach an event listener for startBtn
startBtn.addEventListener("click", fetchWeather);

function fetchWeather(event) {
  event.preventDefault();
  var nameInputEl = document.querySelector("#chosen-city").value;
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    nameInputEl +
    "&appid=ac61cf25c6f1970b33df35358a103b01";
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
        return response.json()
    }
  }).then(function(data){
    console.log(data);
  })
}
