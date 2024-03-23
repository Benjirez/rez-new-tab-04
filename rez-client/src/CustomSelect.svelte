<script>
  import {myData, selectedOption} from './myDataStore.js'

  /*
  export let focusedIndex = 0
  
  let optionElements = [];

  const selectOption = (option, index) => {
    $selectedOption = option;
    focusedIndex = index;
    optionElements[focusedIndex].focus();
  };


  const handleKeydown = (event, option, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      selectOption(option, index);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault(); // Prevent scrolling
      focusedIndex = (focusedIndex + 1) % $myData.length;
      optionElements[focusedIndex].focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault(); // Prevent scrolling
      focusedIndex = (focusedIndex - 1 + $myData.length) % $myData.length;
      optionElements[focusedIndex].focus();
    } else {
      return;
    }
  };
*/
 
</script>

<!--
      <div
        class:focused={focusedIndex === index}
        on:click={() => selectOption(option, index)}
        on:keydown={(event) => handleKeydown(event, option, index)}
        role="option"
        aria-selected={focusedIndex === index}
        tabindex={focusedIndex === index ? 0 : -1}
        bind:this={optionElements[index]}
      >
        {option._id}
       
      </div>
       -->

{#if $myData}
<div class='custom-select'>

    {#each $myData as data}
    <button class='custom-option' class:focused={ $selectedOption === data} on:click={ ()=>{$selectedOption = data} }><span>{data.col_a}&nbsp</span></button>
    {/each}
  
</div>
{/if}
<style>



  .custom-select {

    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0px 1px;
    width: 100%;
    height: 100%;
    overflow: auto;
    scrollbar-color: rgb(236, 229, 193) rgb(247, 244, 235);/* #f1e9cc; /**/
    scrollbar-width:thin ;
  }

  .custom-option{
    font-family: monospace;
    font-size: 14px;
    background-color: rgb(247, 244, 235);
    padding: 3px 6px;
    margin: 1px;
    border: none; /*1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;  */
    cursor: pointer;
    /*min-height: 20px;*/
    /*user-select:none; */
  }



  
  button {
   
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    text-align: left;
  }

  button:active {
    background-color: rgb(211, 211, 208);
  }

  .focused{

background-color:   rgb(211, 211, 208);

}



    </style>