angular.module('EducationPlatform').
directive('angDraggable', function($document) {
  //This is from the advanced directive angular documentation example
  //It now moves everything, but it doesn't hmmm allow any other functionality . . .
  //I can't access the input on the notes for example
  //what would happen if I added the attribute and then removed it after it moved?
  return function(scope, element, attr) {
    var startX = 0, startY = 0, x = 0, y = 0;
    element.css({
     position: 'relative',
     cursor: 'pointer',
     display: 'block',

    });
    element.on('mousedown', function(event) {
      // Prevent default dragging of selected content
      event.preventDefault();
      startX = event.screenX - x;
      startY = event.screenY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      y = event.screenY - startY;
      x = event.screenX - startX;
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  };
});