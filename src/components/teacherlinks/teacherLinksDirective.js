angular.module('EducationPlatform')
.directive('teacherLinks', function(){
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			list: '=links'
		},
		templateUrl: 'components/teacherlinks/teacherLinksTemplate.html',
		link: function(scope, element, attrs){
			scope.list =[]
			if(Array.isArray(scope.list) === false){
				console.log("The teacher-links directive expects an array not " + scope.list)
				
			}
		}
		
	}
})