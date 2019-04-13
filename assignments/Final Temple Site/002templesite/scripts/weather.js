// RomeIT
var RomeITIT = new XMLHttpRequest();
RomeITIT.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 6539761 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
RomeITIT.onload = function () {

    var data = JSON.parse(RomeITIT.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempRomeIT').innerHTML = temp + "&deg;F";
        document.getElementById('humidityRomeIT').innerHTML = humid + "&#37;";
        document.getElementById('precipitationRomeIT').innerHTML = precip + " inches";
        document.getElementById('windRomeIT').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillRomeIT').innerHTML = chill;

        var wImg = document.getElementById('wImageRomeIT');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionRomeIT').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescRomeIT').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

RomeITIT.send();


// San Diego
var SanDiego = new XMLHttpRequest();
SanDiego.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 5391811 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
SanDiego.onload = function () {

    var data = JSON.parse(SanDiego.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempSanDiego').innerHTML = temp + "&deg;F";
        document.getElementById('humiditySanDiego').innerHTML = humid + "&#37;";
        document.getElementById('precipitationSanDiego').innerHTML = precip + " inches";
        document.getElementById('windSanDiego').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillSanDiego').innerHTML = chill;

        var wImg = document.getElementById('wImageSanDiego');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionSanDiego').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescSanDiego').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

SanDiego.send();


// Gilbert
var Gilbert = new XMLHttpRequest();
Gilbert.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 5295903 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
Gilbert.onload = function () {

    var data = JSON.parse(Gilbert.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempGilbert').innerHTML = temp + "&deg;F";
        document.getElementById('humidityGilbert').innerHTML = humid + "&#37;";
        document.getElementById('precipitationGilbert').innerHTML = precip + " inches";
        document.getElementById('windGilbert').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillGilbert').innerHTML = chill;

        var wImg = document.getElementById('wImageGilbert');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionGilbert').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescGilbert').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

Gilbert.send();


// Washinton DC
var WashDC = new XMLHttpRequest();
WashDC.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 4366164 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
WashDC.onload = function () {

    var data = JSON.parse(WashDC.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempWashDC').innerHTML = temp + "&deg;F";
        document.getElementById('humidityWashDC').innerHTML = humid + "&#37;";
        document.getElementById('precipitationWashDC').innerHTML = precip + " inches";
        document.getElementById('windWashDC').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillWashDC').innerHTML = chill;

        var wImg = document.getElementById('wImageWashDC');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionWashDC').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescWashDC').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

WashDC.send();