<script>
    import { selectedOption } from "./myDataStore";


</script>

{#if $selectedOption}<input tpye="text" bind:value={ $selectedOption.col_a }/>{/if}

<style>
    input{
        background-color:inherit;
        width: 100%;
        height: 100%;

    }
</style>