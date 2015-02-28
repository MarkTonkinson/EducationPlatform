angular.module('EducationPlatform')
.directive('quickNotes', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'components/quicknotes/quickNotesDirectiveTemplate.html'
	}
})