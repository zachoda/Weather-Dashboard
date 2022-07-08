var response = fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Boston/next5days?key=HTMBTX9FYD9EQT8XL452ADYT5 ").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
});
