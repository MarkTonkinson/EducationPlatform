angular.module('EducationPlatform')
.directive('eduDraggable', function(directiveStateService, LazyDirectiveLoader, $timeout){
	//TODO: we drag from the list, listitems will be object with two properties,
	//the visible name and then the name underneath- or I could give them all the class name
	//or id- however, that could get messy when trying to mess with the css unless I did a name attribute?  That could work
	return function(scope, element, attrs){

		var el = element[0];

		el.draggable = true;

		var newElement;

		
		var handleDragStart = function(e){

			e.dataTransfer.effectAllowed = 'move'
			e.dataTransfer.setData('text/plain', attrs.class)
			return false
		}
		


		//these identify the scope of the target
		var handleDragOver = function(e){

			e.dataTransfer.dropEffect = 'move'
			return false
		}

		// var handleDragLeave = function(e){

		// 	return false

		// }

		//this isn't getting called . . .
		var handleDrop = function(e){
			if(e.stopPropagation){
				e.stopPropagation();
			}
			

			console.log('this is in drag drop ', this)
				newElement = e.dataTransfer.getData('text/plain')
				console.log('newEl, ', newElement)			


			return false

		}

		//GRRR - grabbing the whatever it was that was last is proving to be the most difficult part

		
		//this gets fired after item is dropped, but handledrop doesnt
		var handleDragEnd = function(e){
			if(e.preventDefault){
				e.preventDefault();
			}
			//console.log("dragend? ", e)
			
			element.empty()

			var stateToTransfer = function(){
				directiveStateService.getOldState()
			}
			
			if(stateToTransfer() === undefined){
				$timeout(stateToTransfer, 1000)
			}

			stateToTranfer = LazyDirectiveLoader.loadDirective(stateToTransfer)
			
			//console.log('state to transfer ', stateToTransfer)
			stateToTransfer = angular.element(stateToTransfer)
			console.log('state to transfer ', stateToTransfer)
			element.replaceWith(stateToTransfer)

			
			
			return false

		}

		//dynamically add the listeners as needed
		el.addEventListener('dragstart', handleDragStart, false)
		el.addEventListener('dragover', handleDragOver, false)
		// el.addEventListener('dragleave', handleDragLeave, false)
		el.addEventListener('drop', handleDrop, false)
		el.addEventListener('dragend', handleDragEnd, false)
	}
	
})
//anything given to this directive cannot rely on the controller scope
//because it could end up moving controllers