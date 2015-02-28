angular.module('EducationPlatform')
.directive('quickNotes', function(){
	return {
		restrict: 'E',
		scope: {
			colspan: '='
		},
		templateUrl: 'components/quicknotes/quickNotesDirectiveTemplate.html'
	}
})