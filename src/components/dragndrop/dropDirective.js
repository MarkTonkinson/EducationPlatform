angular.module('EducationPlatform')
.directive('eduDroppable', function(){
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, element){
			var el = element[0]

			var dragSrc = null;
			var handleDragOver = function(e){
				
				dragSrc = this
				e.dataTransfer.dropEffect = 'move';
				e.dataTransfer = e.dataTransfer.setData('newdata', dragSrc.innerHTML)
				
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
				
				this.innerHTML = e.dataTransfer.getData('text/html')

				return false
			}

			el.addEventListener('dragover', handleDragOver, false)
			el.addEventListener('drop', handleDrop, false)
		}
	}
})