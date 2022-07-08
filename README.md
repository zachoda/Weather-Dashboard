# Weather-Dashboard

-Create Search Modal - create var nameInputEl
-Create event listener for submit button on search modal
-Create variable for API URL- apiUrl
-Create function to request from API 

var getAccess = fetch(apiURL).then(function(response) {
if(response.ok) {response.json().then(function(data) {displayWeather( , );
});
) else {
alert("Error- city not found");
};

- Create a variable to pull the city name from the search function to add to fetch request

var formSubmitHandler = function(event) { event.preventDefault();
var cityName = nameInputEl.value.trim(); 
if (city) {
getAccess(city);
nameinputEl.value = "";
} else {
alert(please enter a valid location)

- Specifically pulling for temperature (temp), humidity (humidity), wind (windspeedmean), uv index (uvindex) for today (today) & for a five-day period (nextfivedays)

- Create a variable for weatherToday and display in one modal
var cityName
var tempCurrent = temp of current day
var humidCurrent = humidity of current day
var windCurrent = windspeedmean of current day
var uvCurrent = uvindex of current day

- create if/else variable for uvCurrent, where the color background of uvCurrent changes dynamically based on its value
- 0-2.0 = green (low)
- 2.1-5.9 = yellow (medium)
- - 6.0 + = red (high)

- create a variable for the next five days, weatherToCome and display in five separate boxes below
- loop through the five days with var displayWeatherToCome
for var (i = 0; i < 6; i++)
var cityName
var tempFuture = temp of each day
var humidFuture = humidity of each day
var windFuture = windspeedmean of each day

- Create a variable to store cityName in local storage & dynamically create a button with the cityName value that can be clicked again
