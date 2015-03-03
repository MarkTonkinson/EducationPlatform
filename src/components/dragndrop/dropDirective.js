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





			//new issue- if I drop it in a box always, but remove the box, then the box will disappear
			var handleDrop = function(e){
				if(e.stopPropagation){
					e.stopPropagation()
				}
				this.classList.remove('over')
				console.log("this in drop drop ", this.className)
				console.log('element ', this.innerText)
				// for(var prop in this){
				// 	console.log(prop)
				// }
				//console.log("data transfer ", e.dataTransfer.getData('text/plain'))

				var newElement = e.dataTransfer.getData('text/plain')
				//console.log('newEl, ', newElement)
				directiveStateService.setOldState(newElement)
				el2 = LazyDirectiveLoader.loadDirective(newElement)
				//console.log('el2, ', el2)
				var replacementEl = angular.element(el2)

				
				element.replaceWith(replacementEl)
				
				
				

				return false
			}

			el.addEventListener('dragover', handleDragOver, false)

			el.addEventListener('drop', handleDrop, false)
			
		}
	}
})