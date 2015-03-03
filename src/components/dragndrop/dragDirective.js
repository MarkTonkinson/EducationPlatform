angular.module('EducationPlatform')
.directive('eduDraggable', function(directiveStateService, LazyDirectiveLoader){
	//TODO: we drag from the list, listitems will be object with two properties,
	//the visible name and then the name underneath- or I could give them all the class name
	//or id- however, that could get messy when trying to mess with the css unless I did a name attribute?  That could work
	return function(scope, element, attrs){

		var directivesArray = ['quick-quiz', 'quick-notes']
		var el = element[0];

		el.draggable = true;

		var dragSrc;
		
		var handleDragStart = function(e){
			dragSrc = this
			e.dataTransfer.effectAllowed = 'move'
			e.dataTransfer.setData('text/plain', this.innerText)
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
			
			
			// element.empty()
			// element.append('<div edu-draggable edu-droppable style="min-height:100px; min-width: 100px;" class="hello">Drop here</div>')		
			
				
		
			
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