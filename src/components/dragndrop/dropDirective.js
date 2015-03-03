angular.module('EducationPlatform')
.directive('eduDroppable', function(LazyDirectiveLoader, directiveStateService){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			var el = element[0]
			el.draggable = true;
			var dragSrc = null;
			
			//I don't think this is needed here
			var handleDragOver = function(e){
				
				//dragSrc = this
				
				//console.log('dragSrc, ', dragSrc)
				e.dataTransfer.dropEffect = 'move';
				//e.dataTransfer.setData('text/html', dragSrc.outerHTML)
				
				if(e.preventDefault){
					e.preventDefault();
				}
				return false
			}





			
			var handleDrop = function(e){
				if(e.stopPropagation){
					e.stopPropagation()
				}
				this.classList.remove('over')
	
				
				var newElement = e.dataTransfer.getData('text/plain')
				console.log('newEl, ', newElement)
				directiveStateService.setOldState(newElement)
				el2 = LazyDirectiveLoader.loadDirective(newElement)
				console.log('el2, ', el2)
				var replacementEl = angular.element(el2)
				replacementEl.addClass(newElement)
				
				element.empty()
				//if I empty then append, what we get is a continually growing outer divs of past
				//directives if each directive has edu-droppable, for now that is removed
				element.append(replacementEl)
				
				
				

				return false
			}

			el.addEventListener('dragover', handleDragOver, false)

			el.addEventListener('drop', handleDrop, false)
			
		}
	}
})