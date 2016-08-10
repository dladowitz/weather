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

weatherApp.controller("homeController", ["$scope", function($scope){
  $scope.title = "Home"
}])


weatherApp.controller("forecastController", ["$scope", function($scope){
  $scope.title = "Forecast"
}])
