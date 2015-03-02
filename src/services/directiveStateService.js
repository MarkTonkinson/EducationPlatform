angular.module("EducationPlatform")
.service('directiveStateService', function(){
	//This service will track state of directives when they are removed and then compiled on the page.
	var quizQuizState;
	var quickNotesState;
	var profileState;
	var studentChecklistState;
	this.test = function(){
		console.log('test in service')
	}
})