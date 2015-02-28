angular.module('EducationPlatform')
.directive('eduDroppable', function(){
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
				
				this.outerHTML = e.dataTransfer.getData('text/html')
				//e.dataTransfer.clearData()
				return false
			}

			el.addEventListener('dragover', handleDragOver, false)
			el.addEventListener('drop', handleDrop, false)
		}
	}
})