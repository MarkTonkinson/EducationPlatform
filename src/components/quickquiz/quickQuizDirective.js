angular.module('EducationPlatform')
.directive('quickQuiz', function(){
	return {
		restrict: 'E',
		scope: {},
		link: function(scope, element, attrs){
			scope.quiz = {}
			scope.numQuestionsWanted
			var questions = []
			scope.updateQuestions = function(){
				scope.numQuestions = []
				for(var i = 1; i < scope.numQuestionsWanted + 1; i++){
					scope.numQuestions.push(i)
				}
			}
			
			scope.createQuestions = function(i, text){
				//console.log(i, text)
				questions[i] = text;
				
			}
			
			scope.createQuiz = function(){
				scope.quiz.questions = questions
				console.log(scope.quiz)
			}
		},
		templateUrl: 'components/quickquiz/quickQuizTemplate.html'
	}
})