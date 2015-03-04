angular.module('EducationPlatform')
.controller('smartQuizCtrl', function($scope){
	
	$scope.answers = ''
	$scope.table = {
		colHeads: ['Primary Question', "Followup 1", 'Followup 2', 'Followup 3'],
		rows: [],
		addRow: function(){
			
			var questionObj = {
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
			console.log(this.rows[0])
		}
	}

	if($scope.table.rows.length === 0){
		$scope.table.addRow()
	}
	
})