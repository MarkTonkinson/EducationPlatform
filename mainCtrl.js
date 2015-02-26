angular.module('EducationPlatform')
.controller('mainCtrl', function($scope, testService){
	$scope.test = "hello world"
	$scope.play = testService
	$scope.user = {
		name: 'Mark',
		role: 'Teacher'
	}
	
})