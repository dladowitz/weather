var weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

weatherApp.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "homeController"
    })
    .when("/forecast", {
      templateUrl: "pages/forecast.html",
      controller: "forecastController"
    })
});


weatherApp.directive("dailyForecast", function() {
  return {
    templateUrl : 'directive_templates/daily_forecast.html',
    replace: true,
    scope: {
      forecastObject: "="
    },
    link: function(scope,elem,attr){
      utcSeconds = scope.forecastObject.dt;
      date = new Date(0)
      date.setUTCSeconds(utcSeconds);
      scope.forecastObject.dt = date;
      // console.log("Linking!...");
      // console.log(scope.forecastObject);
      // elem.removeAttr('class');
    }
  };
});
var utcSeconds = 1234567890;
var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
d.setUTCSeconds(utcSeconds);
