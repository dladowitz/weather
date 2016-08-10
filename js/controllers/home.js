weatherApp.controller("homeController", ["$scope", "cityService", function($scope, cityService){
  $scope.title = "Home"
  $scope.city = ""
  $scope.$watch('city', function(){
    cityService.city = $scope.city
    console.log("City Updated!: " + $scope.city)
  })
}])
