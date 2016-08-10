weatherApp.controller("forecastController", ["$scope", "$routeParams", function($scope, $routeParams){
  $scope.title = "Forecast"
  $scope.city = $routeParams.city
}])
