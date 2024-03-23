<script>
import GetData from './GetData.svelte'
	import SaveBtn from './SaveBtn.svelte'
	import DeleteBtn from './DeleteBtn.svelte'
	import Viewer from './Viewer.svelte'
	import CustomSelect from './CustomSelect.svelte'
  import TextIn from './TextIn.svelte'
  import { selectedOption, myData} from './myDataStore.js'

</script>


<div class="container">
    <div class="a"><GetData /></div>
    <div class="b">b</div>

    <div class="c">
      <CustomSelect   />
	  </div>

    <div class="d">d</div>
    <div class="e">{#if $myData }length: {$myData.length}{/if}</div>
    <div class="f">f</div>
    <div class="g"><TextIn /></div>
    <div class="h"><Viewer /></div>
    <div class="i">i</div>
    <div class="j">j</div>
    <div class="k">
		<SaveBtn  />
		<DeleteBtn  />
	</div>
</div>

<style>

  .container {  
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(20, 1fr);
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "a a a a a a f f f f f f f f f f f f f f"
      "b b b b b b g g g g g g g g g g g g g g"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "c c c c c c h h h h h h h h h h h h h h"
      "d d d e e e i i i i i i i i i i i i i i"

      "d d d e e e j j j j j j j j j j j j j j"
      "d d d e e e k k k k k k k k k k k k k k";
	  font-family: monospace;
	  /* font-size: 14px; */
  
  }
  
  .a { grid-area: a; background-color: #d6aaaa ;}
  .b { grid-area: b;  background-color: #b7b5cc ;}
  .c { grid-area: c;  background-color:  #f1e9cc ;}
  .d { grid-area: d;  background-color: #bccfb7 ;}
  .e { grid-area: e;  background-color: #dab292 ;}
  .f { grid-area: f;  background-color: #acc9e0 ;}
  .g { grid-area: g;  background-color: #dee9a0 ; font-family:monospace; font-size: 20px;}
  .h { grid-area: h;  background-color: rgb(241, 235, 198);} 
  .i { grid-area: i;  background-color: #909090 ;}
  .j { grid-area: j;  background-color: #c1dddf ;  }
  .k { grid-area: k; 
		display: grid;  
		grid-template-columns: repeat(auto-fit, minmax(20px, 200px));
		background-color: #e48f8f ; 
    margin: none;
		/*grid-gap: 20px; /**/
		justify-content: space-evenly;
		align-items:center;
		
	}

</style>
