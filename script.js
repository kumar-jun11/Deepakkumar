$(document).ready(function() {
    $("#fetch").click(function(event) {

        //Getting the Data That The User Inputted
        var city = document.getElementById('val').value;

        //getJSON returns the objects present in the api Function Data
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=47c17864d13e361e2a1cc515da72dcbb", function(data) {

            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            var temp = data.main.temp;

            var pr = data.main.pressure;

            var hum = data.main.humidity;

            var wind = data.wind.speed;

            var weather = data.weather[0].main;

            //This Changes The Background Image Dynamically based On the returned weather value from the JSON file of api
            document.body.style.backgroundImage = 'url(' + weather + '.jpg)';

            //These statementsadd the values directly to the id's present in the HTML file
            $("#icon").attr("src", icon);
            $("#weather").html(weather);
            $("#temp").html(temp + " °F");
            $("#pr").html(pr + " pa");
            $("#hum").html(hum + "g/cube(m)");
            $("#wi").html(wind + " knots");
        });
    });
});