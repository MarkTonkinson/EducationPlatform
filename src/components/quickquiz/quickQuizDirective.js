angular.module('EducationPlatform')
.directive('quickQuiz', function($document){
	return {
		restrict: 'E',
		//transclude: true,
		scope: {
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
			}

			var startX = 0, startY = 0, x = 0, y = 0;
    		scope.allowMove = function(){
     			console.log('allowMove called!', element)
      	
      			var allowMove = true;
        		
        		if(allowMove === true){
          			console.log('allowing to move')
          			element.on('mousedown', function(event) {
              		// Prevent default dragging of selected content
             		event.preventDefault();
		              	startX = event.screenX - x;
		              	startY = event.screenY - y;
		              	$document.on('mousemove', mousemove);
		              	$document.on('mouseup', mouseup);
		            });

		            function mousemove(event) {
		              y = event.screenY - startY;
		              x = event.screenX - startX;
		              element.css({
		                top: y + 'px',
		                left:  x + 'px'
		              });
		            }

		            function mouseup() {
		              $document.off('mousemove', mousemove);
		              $document.off('mouseup', mouseup);
		            }

                  	element.on('mouseup', function(event){
			            console.log('mouseup')
			            element.unbind()
			            allowMove = false
			        })
		        }
		    }
		},
		templateUrl: 'components/quickquiz/quickQuizTemplate.html'
	}
})