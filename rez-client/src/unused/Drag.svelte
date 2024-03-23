<script>
    let isDragging = false;
    let isResizing = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    let width = 200;
    let height = 200;
  
    function dragStart(event) {
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
      isDragging = true;
    }
  
    function dragEnd() {
      isDragging = false;
      isResizing = false;
    }
  
    function drag(event) {
      if (isDragging) {
        event.preventDefault();
  
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
  
        xOffset = currentX;
        yOffset = currentY;
      }
    }
  
    function resizeStart(event) {
      initialX = event.clientX;
      initialY = event.clientY;
      isResizing = true;
    }
  
    function resize(event) {
      if (isResizing) {
        event.preventDefault();
  
        width = event.clientX - xOffset;
        height = event.clientY - yOffset;
      }
    }
  </script>
  
  <style>
    .draggable {
      position: absolute;
      cursor: move;
      background-color: #f1f1f1;
      padding: 10px;
    }
  
    .resize-handle {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 20px;
      height: 20px;
      background-color: #ccc;
      cursor: nwse-resize;
    }
  </style>
  
  <div
    class="draggable"
    style="transform: translate3d({xOffset}px, {yOffset}px, 0); width: {width}px; height: {height}px;"
    on:mousedown={dragStart}
    on:mouseup={dragEnd}
    on:mousemove={drag}
  >
    <p>Drag me around and resize me!</p>
    <div
      class="resize-handle"
      on:mousedown={resizeStart}
      on:mouseup={dragEnd}
      on:mousemove={resize}
    />
  </div>