// var app = angular.module('weatherApp');
// app.controller('homeCtrl', function($scope) {});
//// can do it like this, abbove :)

angular.module("weatherApp").controller("homeCtrl", function($scope, $location) {
    $scope.changeRoute = function() {
    	$location.path("/weather/"+$scope.name);
    }
});