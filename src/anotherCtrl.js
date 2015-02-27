angular.module('EducationPlatform')
.controller('anotherCtrl', function($scope, testService){
	
	$scope.test = "hello world 2"

	$scope.hi = testService

	$scope.run = function(){
		testService.update("Eat more plants!")	
	} 
})