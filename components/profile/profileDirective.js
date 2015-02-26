angular.module('EducationPlatform')
.directive('eduProfile', function(){
	return {
		restrict: 'E',
		//transclude: true,
		scope: {
			profileUser: '&'
		},
		
		link: function(scope, element, attrs){
			console.log(attrs)
			scope.profileUser = JSON.parse(attrs.userprofile)
			console.log(typeof scope.profileUser)
			console.log(scope.profileUser)

			//TODO: run checks and warn user if they don't have all the needed properties
			//run through a constructor?
			
			// if(Array.isArray(scope.list) === false){
			// 	console.log("The teacher-links directive expects an array not " + scope.list)
			// }
		},
		templateUrl: 'components/profile/profileDirectiveTemplate.html'
		
	}
})