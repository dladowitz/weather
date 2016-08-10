weatherApp.controller("forecastController", ["$scope", "cityService", "$http", function($scope, cityService, $http){
  $scope.title = "Forecast"
  $scope.city = cityService.city
  console.log("Current city is: " + $scope.city)

  $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q={{city}}&APPID=7b23bdfbab035771e624ffe9c247e493")
    .success(function(result){
      console.log(result);
    })
    .error(function(result, status){
      console.log(result)
      console.log(status)
    })
}])
