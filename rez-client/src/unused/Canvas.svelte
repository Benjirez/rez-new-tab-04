<script>
    import { onMount } from 'svelte';
  
    let canvas;
    let ctx;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
  
    onMount(() => {
      const canvasEl = canvas.getContext('2d');
      ctx = canvasEl;
      ctx.lineWidth = 5;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'black';
    });
  
    function startDrawing(event) {
      isDrawing = true;
      [lastX, lastY] = [event.offsetX, event.offsetY];
    }
  
    function draw(event) {
      if (!isDrawing) return;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      [lastX, lastY] = [event.offsetX, event.offsetY];
    }
  
    function stopDrawing() {
      isDrawing = false;
    }
  </script>
  
  <canvas
    bind:this={canvas}
    width="500"
    height="500"
    on:mousedown={startDrawing}
    on:mousemove={draw}
    on:mouseup={stopDrawing}
    on:mouseleave={stopDrawing}
  />