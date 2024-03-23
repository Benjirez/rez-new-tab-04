<script>
  let x = 100;
  let y = 100;
  let z = 1;
  let width = 200;
  let height = 200;
</script>

<style>
  .draggable {
    position: absolute;
    background-color: #f1f1f1;
    padding: 10px;
  }
</style>

<div
  class="draggable"
  style="left: {x}px; top: {y}px; z-index: {z}; width: {width}px; height: {height}px;"
>
  <p>Resize and reposition me using the input fields below.</p>
  
<div>
  <label>
    X:
    <input type="number" bind:value={x} />
  </label>
  <label>
    Y:
    <input type="number" bind:value={y} />
  </label>
  <label>
    Z (depth):
    <input type="number" bind:value={z} />
  </label>
  <label>
    Width:
    <input type="number" bind:value={width} />
  </label>
  <label>
    Height:
    <input type="number" bind:value={height} />
  </label>
</div>
</div>
