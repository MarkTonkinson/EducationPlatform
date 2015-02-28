angular.module('EducationPlatform')
.controller('mainCtrl', function($scope, testService, $sce){
	
	$scope.play = testService
	$scope.user = {
		name: 'Mark',
		role: 'Teacher',
		profilePic: 'resources/profile.jpg'
	}
	
	$scope.test = function(){
		 $scope.col = 'col-md-1'
		
	}

	$scope.col = 'col-md-12'

	$scope.directives = {
		list: ['quickquiz', 'quicknote', 'studentchecklist', 'teacherlinks'],
		changeWidth: function(dirName, newWidth){

		},
		changeSelect: function(component){
			console.log(this[component])
			this[component] = !this[component];
		},
		quickquiz: false,
		quicknote: false,
		studentchecklist:false,
		teacherlinks:false

	}
})