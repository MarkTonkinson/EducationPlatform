angular.module('EducationPlatform')
.directive('quickNotes', function(){
	return {
		restrict: 'E',
		scope: {
			
		},
		link: function(scope, element, attrs){
			console.log(attrs)
		},
		templateUrl: 'components/quicknotes/quickNotesDirectiveTemplate.html'
	}
})