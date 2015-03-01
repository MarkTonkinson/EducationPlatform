angular.module('EducationPlatform')
.controller('mainCtrl', function($scope, testService, $sce, LazyDirectiveLoader){
	
	$scope.play = testService
	$scope.user = {
		name: 'Mark',
		role: 'Teacher',
		profilePic: 'resources/profile.jpg'
	}
	
	$scope.test = function(){
		 //$scope.col = 'col-md-1'
		$scope.createDirective()
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
	$scope.createDirective = function(){
	
			console.log("did it")
        // now that it's loaded, we can dynamically create one if we wish to
        // add some sexiness to our app
        var obj = $scope.user
        obj = JSON.stringify(obj)
        var directive = LazyDirectiveLoader.loadDirective('edu-profile', 'userprofile=' + obj);
        var directive = LazyDirectiveLoader.loadDirective('quick-quiz')
        console.log('directive ', directive)


        var mover = angular.element(directive);



		var body = angular.element(document).find('aside').eq(0);

		body.append(mover)


	}
	
})