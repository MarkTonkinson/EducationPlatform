angular.module('EducationPlatform')
.directive('quickQuiz', function(){
	return {
		restrict: 'E',
		scope: {
			colspan: '='
		},
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
				//scope.colspan = 'col-md-12'
			}
		},
		templateUrl: 'components/quickquiz/quickQuizTemplate.html'
	}
})