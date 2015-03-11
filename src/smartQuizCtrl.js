angular.module('EducationPlatform')
.controller('smartQuizCtrl', function($scope, smartQuizService){
	
	$scope.answers = ''
	$scope.table = {
		colHeads: ['Primary Question', "Followup 1", 'Followup 2', 'Followup 3'],
		//TODO: Let's take the rows and turn them into a large quiz object that is counted
		//that way we don't have arrays within arrays to get the quizzes
		rows: [],
		currentIndex: '',
		currentQuestion: '',
		addRow: function(){
			var questionObj={}
			for(var i=1; i <= 4; i++){
				questionObj[i] = {}
				questionObj[i].question = ''
				questionObj[i].answers = {a: '', b:'', c:'', d:''}
				questionObj[i].answer = []
			}
			console.log('questionObj ', questionObj)
			this.rows.push(questionObj)

		},
		showAnswers: function(answers, i, questionNum){
			console.log(i)
			$scope.answers = answers
			this.currentIndex = i
			this.currentQuestion = questionNum
		},
		save: function(){
			smartQuizService.addQuiz(this.rows)
			//console.log(this.rows[0])
		},
		setAnswer: function(key, chosenAnswer){
			//console.log(chosenAnswer, typeof chosenAnswer)
			var answerArr = this.rows[this.currentIndex][this.currentQuestion].answer
			if(chosenAnswer === true && answerArr.indexOf(key) === -1){
				answerArr.push(key)
			} else if(chosenAnswer === false && answerArr.indexOf(key) > -1){
				answerArr.splice(answerArr.indexOf(key), 1)
			}

			//console.log(answerArr)

			
		}
	}

	if($scope.table.rows.length === 0){
		$scope.table.addRow()
	}
	
})