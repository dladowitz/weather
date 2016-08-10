weatherApp.controller("forecastController", ["$scope", "cityService", function($scope, cityService){
  $scope.title = "Forecast"
  $scope.city = cityService.city
  console.log("Current city is: " + $scope.city)
}])
