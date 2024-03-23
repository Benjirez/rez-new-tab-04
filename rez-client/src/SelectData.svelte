<script>
import { myData, selectedOption } from './myDataStore.js'
</script>

{#if $myData.length}
	
<select multiple="multiple" bind:value={$selectedOption}>
	{#each $myData as data }
		<option value={data}> {data._id} </option>
	{/each}
</select>

{/if}

<style>
 
select {
    font-family: inherit;
    background-color: inherit;
    font-size: inherit;
    width: 100%;
    height: 100%;
    scrollbar-color: #a83e3e; 
   
}



</style>