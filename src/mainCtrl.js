angular.module('EducationPlatform')
.controller('mainCtrl', function($scope, testService, $sce, LazyDirectiveLoader){
	
	$scope.play = testService
	$scope.user = {
		name: 'Mark',
		role: 'Teacher',
		profilePic: 'resources/profile.jpg'
	}

	$scope.test2 = function(){

		$scope.user.name = "Whitney"
		console.log($scope.user.name)
	}
	
	$scope.test = function(){
		 //$scope.col = 'col-md-1'
		$scope.createDirective('student-checklist')
	}

	$scope.col = 'col-md-12'

	//TODO: teacher-links has to be reworked because it is an attribute and it needs to pass with links
	//profile is similar in that it needs to have details passed
	$scope.directives = {
		list: ['quick-quiz', 'quick-notes', 'student-checklist', 'teacher-links'],
		changeWidth: function(dirName, newWidth){

		},
		changeSelect: function(component){
			// console.log(this[component])
			// this[component] = !this[component];
			$scope.createDirective(component)

		},

		quickquiz: false,
		quicknote: false,
		studentchecklist:false,
		teacherlinks:false

	}

	
	//simulate drag by remembering the state, removing the element, and recreating it?
	$scope.createDirective = function(directive){
		
		 //this was the important key to solving the problem of passing an object as a string!! But would it keep reference if the name changed?
        var obj = $scope.user
        obj = JSON.stringify(obj)
        //var directive = LazyDirectiveLoader.loadDirective('edu-profile', 'userprofile=' + obj);
        var directive = LazyDirectiveLoader.loadDirective(directive)
        console.log('directive ', directive)


        var mover = angular.element(directive);



		var body = angular.element(document).find('body').eq(0);

		body.append(mover)


	}
	
})