angular.module("EducationPlatform")
.service('directiveStateService', function(){
	//This service will track state of directives when they are removed and then compiled on the page.
	var quizQuizState;
	var quickNotesState;
	var profileState;
	var studentChecklistState;

	var oldState;

	this.setOldState = function(oldState){
		if(typeof oldState !== 'string'){
			console.log("You can't set old state as a string")
		} else {
			oldState = oldState;
		}
	}

	this.getOldState = function(){
		return oldState
	}
})