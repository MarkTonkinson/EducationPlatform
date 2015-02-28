angular.module('EducationPlatform')
.directive('eduDraggable', function(){
	return function(scope, element){
		var el = element[0];
		el.draggable = true;

		var dragSrcEl = null;

		var handleDragStart = function(e){
			//console.log('e', e)
			drgSrcEl = this;
			//console.log("dragSrc ", drgSrcEl)
			e.dataTransfer.effectAllowed = 'move'
			e.dataTransfer.setData('text/html', this.innerHTML)
			return false
		}
		
		var handleDragEnd = function(e){
			if(e.preventDefault){
				e.preventDefault();
			}
			e.dataTransfer.dropEffect = 'move'
		}

		//not sure these matter . . . is it because their scope is isolated through the directive?
		var handleDragOver = function(e){
			//console.log("over what? ", this)
			//console.log("mouseover what? ", e.srcElement)

		}

		var handleDragLeave = function(e){
			//console.log('leaving what, ', this)

		}

		var handleDrop = function(e){
			if(e.stopPropation){
				e.stopPropagation();
			}
			
		
			if(dragSrcEl !== this){
				dragSrcEl.innerHTML = this.innerHTML
				this.innerHTML = e.dataTranfer.getData('text/html')
			}



			return false

		}


		el.addEventListener('dragstart', handleDragStart, false)
		el.addEventListener('dragend', handleDragEnd, false)
		el.addEventListener('dragover', handleDragOver, false)
		el.addEventListener('dragleave', handleDragLeave, false)
		el.addEventListener('drop', handleDrop, false)
	}
	
})
//anything given to this directive cannot rely on the controller scope
//because it could end up moving controllers