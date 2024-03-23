<script>
import {myColl, myData, selectedOption } from './myDataStore.js'
const doSave = async ()=>{

    const res = await fetch('http://localhost:3000/old/'+ $myColl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            col_a: $selectedOption.col_a,
            col_b: $selectedOption.col_b,
            col_c: $selectedOption.col_c,
            col_d: $selectedOption.col_d,
            col_e: $selectedOption.col_e,
            col_f: $selectedOption.col_f,
            col_g: $selectedOption.col_g,
            col_h: $selectedOption.col_h
        })
    })

    
    $myData = await res.json()

}
</script>

<button on:click={doSave}>save</button>

