angular.module('EducationPlatform')
.directive('quickNotes', function($document){
	return {
		restrict: 'E',
		scope: {
			
		},
		link: function(scope, element, attrs){
			var startX = 0, startY = 0, x = 0, y = 0;
			scope.allowMove = function(){
				console.log('allowMove called!')
				//element.bind('click', function(){
				var allowMove = true;
				if(allowMove === true){
					
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
				    	element.unbind()
				    	allowMove = false
				    })
				}
			}
		},
		templateUrl: 'components/quicknotes/quickNotesDirectiveTemplate.html',
		controller: function($scope){
			$scope.notes = []
			$scope.addNote = function(note){
				$scope.notes.push(note)
				$scope.newNote = ''
			}
		}
	}
})