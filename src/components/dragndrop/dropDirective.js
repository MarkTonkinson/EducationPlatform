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

			var handleDragEnter = function(e){
				this.classList.add('over')
			}

			var handleDragLeave = function(e){
				//console.log('leaving what, ', this)
				this.classList.remove('over')
				return false

			}


			var handleDrop = function(e){
				if(e.stopPropagation){
					e.stopPropagation()
				}
				this.classList.remove('over')
				console.log("this in drop drop ", this)
				//console.log("data transfer ", e.dataTransfer.getData('text/plain'))

				var newElement = e.dataTransfer.getData('text/plain')
				console.log('newEl, ', newElement)
				directiveStateService.setOldState(newElement)
				el2 = LazyDirectiveLoader.loadDirective(newElement)
				//console.log('el2, ', el2)
				var replacementEl = angular.element(el2)

				element.empty()
				element.replaceWith(replacementEl)
				
				
				

				//console.log($compile(e.dataTransfer.getData('text/plain'))($rootScope))
				//e.dataTransfer.clearData()
				return false
			}

			el.addEventListener('dragover', handleDragOver, false)
			el.addEventListener('dragleave', handleDragLeave, false)
			el.addEventListener('drop', handleDrop, false)
		}
	}
})