<script>
import { selectedOption} from './myDataStore'
</script>

{#if $selectedOption}
<textarea bind:value={$selectedOption.col_c}></textarea>
{/if}
<style>

    textarea{
        font-family: monospace;
        background-color: rgb(241, 235, 198);
        font-size: 14px;
        width: 100%;
        height: 100%;
    }
</style>