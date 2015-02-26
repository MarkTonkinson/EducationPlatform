angular.module('EducationPlatform')
.controller('mainCtrl', function($scope, testService){
	$scope.test = "hello world"
	$scope.play = testService
	//console.log($scope.play)
	
})