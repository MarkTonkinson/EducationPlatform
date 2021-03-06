angular.module('EducationPlatform')
.directive('eduDraggable', function(directiveStateService, LazyDirectiveLoader){
	//TODO: we drag from the list, listitems will be object with two properties,
	//the visible name and then the name underneath- or I could give them all the class name
	//or id- however, that could get messy when trying to mess with the css unless I did a name attribute?  That could work
	return function(scope, element, attrs){

		var directivesArray = ['quick-quiz', 'quick-notes', 'student-checklist', 'teacher-list']
		var el = element[0];

		el.draggable = true;

		var dragSrc;
		
		//the problem is this works when grabbing it from the list
		//but not when it's starting again
		//this didnd't getcalled . . .
		var handleDragStart = function(e){
			dragSrc = this
			e.dataTransfer.effectAllowed = 'move'
			if(directivesArray.indexOf(this.innerText) > -1){
				
				e.dataTransfer.setData('text/plain', this.innerText)
			} else {
				//the reason I can't dynamically add it at directive load 
				//is that it loses reference to which one is which
				
				e.dataTransfer.setData('text/plain', this.classList[1] )
			}
			
			return false
		}
		


		//these identify the scope of the target
		var handleDragOver = function(e){

			e.dataTransfer.dropEffect = 'move'
			return false
		}


		//handle drop and dragend get called at the same time . . .
		var handleDrop = function(e){
			if(e.stopPropagation){
				e.stopPropagation();
			}
							

			return false

		}


		//this gets fired after item is dropped, but handledrop doesnt
		var handleDragEnd = function(e){

			if(e.preventDefault){
				e.preventDefault();
			}
			
			console.log('this ', this)
			console.log('element in drag to be replaced, ', element[0].offsetParent.tagName)
			//will this only work for chrome browser?
			if(element[0].offsetParent.tagName !== 'ASIDE'){
				element.empty()
				element.replaceWith('Drop here')		
			}
			
		
			
			return false

		}

		//becaus the directives are entering each other it gets called twice
		var handleDragEnter = function(e){

			//directiveStateService.setOldState()
			if(dragSrc !== this){
		
				//the initial box doesn't get overridden bc styles is written inline
				this.classList.add('over')
				return false
			}
		}

		var handleDragLeave = function(e){
			//console.log('leaving what, ', this)
			this.classList.remove('over')
			return false

		}

		//dynamically add the listeners as needed
		el.addEventListener('dragstart', handleDragStart, false)
		el.addEventListener('dragover', handleDragOver, false)
		el.addEventListener('dragenter', handleDragEnter, false)
		el.addEventListener('dragleave', handleDragLeave, false)
		
		el.addEventListener('dragend', handleDragEnd, false)
		el.addEventListener('drop', handleDrop, false)
	}
	
})
//anything given to this directive cannot rely on the controller scope
//because it could end up moving controllers