<script>
	// metadata : {
	//     titolo: 'Programmare in C',
	//     featured: false,
	//     autore: 'Marco',
	//     data: '2022-04-20T00:00:00.000Z',
	//     cover: 'img4.jpg',
	//     introduzione: "Introduzione dell'articolo 4",
	//     categorie: [ 'Informatica', 'C' ],
	//     path: '/blog/4'
	// }
	export let metadata;
    
    // adatta i metadata per la home page
    // converte la data in formato  gg MESE yyyy
	metadata.data = convert_data(metadata.data);

	function convert_data(data) {
		let date = new Date(data);
		return (
			date.toLocaleDateString('it-IT', { day: 'numeric' }) +
			' ' +
			date.toLocaleDateString('it-IT', { month: 'long' }).toLocaleUpperCase() +
			' ' +
			date.toLocaleDateString('it-IT', { year: 'numeric' })
		);
	}
</script>

<!-- {#if metadata.featured}
	<div class="card mb-4">
		<a href="#!"
			><img
				class="card-img-top"
				src="/850x350.jpg"
				alt="..."
			/></a
		>
		<div class="card-body">
			<div class="small text-muted">{metadata.data}</div>
			<h2 class="card-title text-truncate" class:h4="{!metadata.featured}">{@html metadata.titolo}</h2>
			<p class="card-text text-truncate text-truncate-2">{@html metadata.introduzione}</p>
			<a class="btn btn-primary" href="post.html">Read more →</a>
		</div>
	</div>
{:else}
	<div class="card mb-4">
		<a href="#!"
			><img class="card-img-top" src="/414x207.jpg" alt="..." /></a
		>
		<div class="card-body">
			<div class="small text-muted">{metadata.data}</div>
			<h2 class="card-title text-truncate" class:h4="{!metadata.featured}">{@html metadata.titolo}</h2>
			<p class="card-text text-truncate text-truncate-2">{@html metadata.introduzione}</p>
			<a class="btn btn-primary" href="#!">Read more →</a>
		</div>
	</div>
{/if} -->

<div class="card mb-4">
    <a href="#!"
        ><img class="card-img-top" src="/img/posts/missing_post.jpg" alt="..." /></a
    >
    <div class="card-body">
        <div class="small text-muted">{metadata.data}</div>
        <h2 class="card-title text-truncate" class:h4="{!metadata.featured}">{@html metadata.titolo}</h2>
        <p class="card-text text-truncate text-truncate-2">{@html metadata.introduzione}</p>
        <a class="btn btn-primary" href="#!">Read more →</a>
    </div>
</div>


<style>
	.text-truncate-2 {
		display: -webkit-box !important;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: normal;
		height: 3rem;
	}
</style>
