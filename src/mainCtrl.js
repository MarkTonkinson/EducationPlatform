angular.module('EducationPlatform')
.controller('mainCtrl', function($scope, testService, $sce, LazyDirectiveLoader, smartQuizService){
	
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

        var newDirective = angular.element(directive);

		var divs = angular.element(document).find('section');

		console.log(divs)

		divs.append(newDirective)


	}

	$scope.getQuiz = function(){
		var quiz = smartQuizService.getQuiz()
		console.log(quiz)
	}
	/* 
	Drag and drop ideas:
	I need to track the state of each of the components.
	I will have to write a function that contacts the state of the directives 
	Egghead I.O should have that
	Use the drag and drop, but instead of actually dragging and dropping,
	destroy the element, reboot the element and keep the state.

	Also, for future, look at using at moving some of this logic out to the service

	*/
	
})