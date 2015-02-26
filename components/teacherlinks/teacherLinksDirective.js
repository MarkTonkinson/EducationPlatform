angular.module('EducationPlatform')
.directive('teacherLinks', function(){
	return {
		restrict: 'A',
		transclude: true,
		scope: {
			list: '=teacherLinks'
		},
		templateUrl: 'components/teacherlinks/teacherLinksTemplate.html',
		link: function(scope, element, attrs){
			console.log(scope.list)
			if(Array.isArray(scope.list) === false){
				console.log("The teacher-links directive expects an array not " + scope.list)
			}
		}
		
	}
})