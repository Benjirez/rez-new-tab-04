<script>
    import { myData, myColl } from './myDataStore.js'
    import { onMount } from 'svelte'
    
    let filterTerm = ""

    const startBrain = async ()=>{
            if ($myColl > 6 || $myColl < 1) {$myColl = 1}
            const myFetch = await fetch('http://localhost:3000/' + 'old/' + ($myColl - 1) )
            $myData = await myFetch.json()
            
            //console.log ( $myData )
            
        
    }
    
onMount( startBrain )

const sortAZ  = ()=>{
    $myData = $myData.sort((a, b) => {
        const titleA = a.col_a.toUpperCase(); // Ignore case by converting to uppercase
        const titleB = b.col_a.toUpperCase(); // Ignore case by converting to uppercase

        // Compare the titles alphabetically
            if (titleA < titleB) {
            return -1; // If titleA comes before titleB, return a negative number
        }
            if (titleA > titleB) {
            return 1; // If titleA comes after titleB, return a positive number
    }
        return 0; // If titles are equal, return 0
    });
   // $myData = $myData
}

const filterMe = ()=>{
    // Assuming you have an array of objects called 'myCollection'
    $myData = $myData.filter(obj => {
    const myKeyValue = obj.col_c.toLowerCase(); // Convert myKey value to lowercase for case-insensitive matching
    const searchText = filterTerm.toLowerCase(); // Convert searchText to lowercase for case-insensitive matching
    return myKeyValue.includes(searchText);
    });
}

</script>

<input bind:value={ $myColl } on:change={ ()=>{ /* console.log( $myColl );*/ startBrain() }} />
<button on:click={ sortAZ }>a-z</button>
<input bind:value={filterTerm} on:change={ ()=>{ /*console.log( filterTerm );*/ filterMe() }} />