angular.module('EducationPlatform')
.controller('mainCtrl', function($scope, testService, $sce, LazyDirectiveLoader, smartQuizService){
	


	
	//simulate drag by remembering the state, removing the element, and recreating it?


	$scope.getQuiz = function(){
		var quiz = smartQuizService.getQuiz()
		console.log(quiz)
	}
	/* 
	Drag and drop ideas:
	I need to track the state of each of the components.
	I will have to write a function that contacts the state of the directives 
	Egghead I.O should have that
	Use the drag and drop, but instead of actually dragging and dropping,
	destroy the element, reboot the element and keep the state.

	Also, for future, look at using at moving some of this logic out to the service

	*/
	
})