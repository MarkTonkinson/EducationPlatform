angular.module('EducationPlatform')
.controller('smartQuizCtrl', function($scope, smartQuizService){
	
	$scope.answers = ''
	$scope.quiz = {
		colHeads: ['First Question', "Followup 1", 'Followup 2', 'Followup 3'],
		//TODO: Let's take the rows and turn them into a large quiz object that is counted
		//that way we don't have arrays within arrays to get the quizzes
		questionObjects: [],
		currentIndex: '',
		currentQuestion: '',
		addQuestionObj: function(){
			var questionObj={}
			for(var i=1; i <= 4; i++){
				questionObj[this.colHeads[i-1]] = {}
				questionObj[this.colHeads[i-1]].question = ''
				questionObj[this.colHeads[i-1]].answers = {a: '', b:'', c:'', d:''}
				questionObj[this.colHeads[i-1]].answer = []
			}
			console.log('questionObj ', questionObj)
			this.questionObjects.push(questionObj)

		},
		// showAnswers: function(answers, i, questionNum){
		// 	console.log(i)
		// 	$scope.answers = answers
		// 	this.currentIndex = i
		// 	this.currentQuestion = questionNum
		// },
		save: function(){
			smartQuizService.addQuiz(this.rows)
			//console.log(this.rows[0])
		},
		setAnswer: function(questionIndex, questionKey, answerKey, selected){
			console.log(questionIndex, questionKey, answerKey, selected)
			console.log(this.questionObjects[questionIndex][questionKey].answers[answerKey])
			
			var answerArr = this.questionObjects[questionIndex][questionKey].answer
			if(selected === true && answerArr.indexOf(answerKey) === -1){
			 	answerArr.push(answerKey)
			} else if(selected === false && answerArr.indexOf(answerKey) > -1){
			 	answerArr.splice(answerArr.indexOf(answerKey), 1)
			}

			//console.log(answerArr)

			
		}
	}

	if($scope.quiz.questionObjects.length === 0){
		$scope.quiz.addQuestionObj()
	}
	
})