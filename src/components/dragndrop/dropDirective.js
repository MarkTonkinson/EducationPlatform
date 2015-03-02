angular.module('EducationPlatform')
.directive('eduDroppable', function(LazyDirectiveLoader){
	return {
		restrict: 'A',
		link: function(scope, element){
			var el = element[0]
			el.draggable = true;
			var dragSrc = null;
			var handleDragOver = function(e){
				
				dragSrc = this

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

				console.log("this in drop ", this)
				console.log("data transfer ", e.dataTransfer.getData('text/plain'))

				var newElement = e.dataTransfer.getData('text/plain')
				console.log('newEl, ', newElement)
				el2 = LazyDirectiveLoader.loadDirective(newElement)
				console.log('el2, ', el2)
				var replacementEl = angular.element(el2)
				element.append(replacementEl)

				//console.log($compile(e.dataTransfer.getData('text/plain'))($rootScope))
				//e.dataTransfer.clearData()
				return false
			}

			el.addEventListener('dragover', handleDragOver, false)
			el.addEventListener('drop', handleDrop, false)
		}
	}
})