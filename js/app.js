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
        templateUrl : 'directive_templates/daily_forecast.html'
    };
});
