angular.module('EducationPlatform')
.directive('eduProfile', function(){
	return {
		restrict: 'E',
		//transclude: true,
		scope: {
			profileUser: '&'
		},
		
		link: function(scope, element, attrs){
			//The scope is still limited here, it accepts the initial value and doesn't update if the controller scope object does because it has it's own scope
			//this is because it is meant to be used again for students later . . .
			if(attrs.userprofile === ''){
				attrs.userprofile = '{{user}}'
			}
			console.log(typeof attrs.userprofile)
			scope.profileUser = JSON.parse(attrs.userprofile)
			console.log(typeof scope.profileUser)
			console.log(scope.profileUser)

			//TODO: run checks and warn developer if they don't have all the needed properties
			//run through a constructor?

			// if(Array.isArray(scope.list) === false){
			// 	console.log("The teacher-links directive expects an array not " + scope.list)
			// }
		},
		templateUrl: 'components/profile/profileDirectiveTemplate.html'
		
	}
})