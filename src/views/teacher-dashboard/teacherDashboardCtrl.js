angular.module('EducationPlatform')
.controller('teacherDashboardCtrl', function($scope, LazyDirectiveLoader){

	$scope.user = {
		name: 'Mark',
		role: 'Teacher',
		profilePic: 'resources/profile.jpg'
	}


	


	

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
})