angular.module('EducationPlatform')
.controller('takeQuizCtrl', function($scope, smartQuizService){
	$scope.quiz = smartQuizService.getQuiz()
})