angular.module("EducationPlatform")
.directive('studentChecklist', function(){
	return {
		restrict: 'E',
		scope: {

		},
		link: function(scope, element, attrs){
			scope.students = ['Harry Potter', 'Ron Weasley', 'Hermione Granger']
		},
		templateUrl: 'components/studentchecklist/studentChecklistDirectiveTemplate.html'
	}
})