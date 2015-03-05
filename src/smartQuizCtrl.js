angular.module('EducationPlatform')
.controller('smartQuizCtrl', function($scope, smartQuizService){
	
	$scope.answers = ''
	$scope.table = {
		colHeads: ['Primary Question', "Followup 1", 'Followup 2', 'Followup 3'],
		//TODO: Let's take the rows and turn them into a large quiz object that is counted
		//that way we don't have arrays within arrays to get the quizzes
		rows: [],
		addRow: function(){
			
			var questionObj = {
				//TODO this should be a function that creates it!!

				1: {
					question: '',
					answers: {
						a: '',
						b: '',
						c: '',
						d: ''
					}
				},
				2: {
					question: '',
					answers: {
						a: '',
						b: '',
						c: '',
						d: ''
					}
				},
				3: {
					question: '',
					answers: {
						a: '',
						b: '',
						c: '',
						d: ''
					}
				},
				4: {
					question: '',
					answers: {
						a: '',
						b: '',
						c: '',
						d: ''
					}
				}
			}

			this.rows.push(questionObj)

		},
		showAnswers: function(answers){
			//console.log('here ', answers)
			$scope.answers = answers
		},
		save: function(){
			smartQuizService.addQuiz(this.rows)
			//console.log(this.rows[0])
		}
	}

	if($scope.table.rows.length === 0){
		$scope.table.addRow()
	}
	
})