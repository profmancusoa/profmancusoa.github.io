<script>
    export let titolo
    export let data
    export let autore;
    export let categorie;
</script>
    
<h1>{titolo}</h1> 

<p><span>Published: {data}</span> <span>Autore: {autore}</span></p>

<div class="post">
    <slot />
</div>


<style>
  @import url('https://fonts.googleapis.com/css2?family=DynaPuff&family=Silkscreen&display=swap');
    .post {
        border: 2px solid black;
        border-radius: 1rem;
        padding: 1rem;
        margin-top: 2rem;
        font-family: 'DynaPuff', cursive;
    }
</style>