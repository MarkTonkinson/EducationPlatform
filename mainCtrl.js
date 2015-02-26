angular.module('EducationPlatform')
.controller('mainCtrl', function($scope){
	$scope.test = "hello world"
	$scope.play = "hello world play"
	console.log($scope.play)
})