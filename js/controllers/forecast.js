weatherApp.controller("forecastController", ["$scope", "cityService", "$http", function($scope, cityService, $http){
  $scope.title = "Forecast"
  $scope.city = cityService.city
  console.log("Current city is: " + $scope.city)
  $scope.forecasts = []

  $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q={{city}}&APPID=1a70a00ec821c9c412586bb89fe9b8fa&units=imperial")
    .success(function(result){
      $scope.forecasts = result["list"]
      console.log($scope.forecasts);
    })
    .error(function(result, status){
      console.log(result)
      console.log(status)
    })
}])
