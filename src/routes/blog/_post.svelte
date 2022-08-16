<script>
	export let titolo;
	export let featured;
	export let autore;
	export let data;
	export let cover;
	export let introduzione;
	export let categorie;
</script>

<h1>{titolo}</h1>

<p><span>Published: {data}</span> <span>Autore: {autore}</span></p>
<p>Featured: {featured}</p>
<div class="post">
	<slot />
</div>

<style>
	.post {
		border: 2px solid black;
		border-radius: 1rem;
		padding: 1rem;
		margin-top: 2rem;
	}
</style>
