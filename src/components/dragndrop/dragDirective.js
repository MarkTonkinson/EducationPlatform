angular.module('EducationPlatform')
.directive('eduDraggable', function(){
	return function(scope, element){
		console.log("scope ", scope)
		var el = element[0];
		el.draggable = true;

		var dragSrcEl = null;

		var handleDragStart = function(e){
			//console.log('e', e)
			drgSrcEl = this;
			console.log("dragSrc ", drgSrcEl)
			e.dataTransfer.effectAllowed = 'move'
			e.dataTransfer.setData('text/html', this.outerHTML)
			
		}
		
		var handleDragEnd = function(e){
			if(e.preventDefault){
				e.preventDefault();
			}
			
		}

		//not sure these matter . . . is it because their scope is isolated through the directive?
		var handleDragOver = function(e){
			//console.log("over what? ", this)
			//console.log("mouseover what? ", e.srcElement)
			e.dataTransfer.dropEffect = 'move'
		}

		var handleDragLeave = function(e){
			//console.log('leaving what, ', this)

		}

		var handleDrop = function(e){
			if(e.stopPropation){
				e.stopPropagation();
			}
			
			console.log('e element ', e)
			
		
			if(drgSrcEl !== this){
				drgSrcEl.innerHTML = e.srcElement.outerHTML
				
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