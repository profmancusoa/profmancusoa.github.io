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
	const LEN_TITOLO = 32;
	const LEN_TITOLO_FEATURED = 54;
	const LEN_INTRO = 102;
	const LEN_INTRO_FEATURED = 216;

	// adatta i metadata per la home page
	// trim del titolo
	metadata.titolo = trim_stringa(
		metadata.featured,
		metadata.titolo,
		LEN_TITOLO,
		LEN_TITOLO_FEATURED
	);

	// converte la data in formato  gg MESE yyyy
	metadata.data = convert_data(metadata.data);

	// trim introduzione
	console.log('INTORDUZIONE: ', metadata.introduzione);
	metadata.introduzione = trim_stringa(
		metadata.featured,
		metadata.introduzione,
		LEN_INTRO,
		LEN_INTRO_FEATURED
	);

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

	// non è ancora perfetta a causa di caratteri non monospace
	// per il  momento i titoli e le introduzioni sono gestiti a mano
	function trim_stringa(featured, stringa, len_min, len_max) {
		//let lunghezza = featured == true ? len_max : len_min;
		//return stringa.length > lunghezza ? stringa.substring(0, lunghezza - 3) + '...' : stringa + ' &nbsp'.repeat(len_max - stringa.length);
		return stringa;
	}
</script>

{#if metadata.featured}
	<div class="card mb-4">
		<a href="#!"
			><img
				class="card-img-top"
				src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
				alt="..."
			/></a
		>
		<div class="card-body">
			<div class="small text-muted">{metadata.data}</div>
			<h2 class="card-title">{@html metadata.titolo}</h2>
			<p class="card-text">{@html metadata.introduzione}</p>
			<a class="btn btn-primary" href="post.html">Read more →</a>
		</div>
	</div>
{:else}
	<div class="card mb-4">
		<a href="#!"
			><img class="card-img-top" src="https://dummyimage.com/414x207/#DEE1E/072757" alt="..." /></a
		>
		<div class="card-body">
			<div class="small text-muted">{metadata.data}</div>
			<h2 class="card-title h4">{@html metadata.titolo}</h2>
			<p class="card-text">{@html metadata.introduzione}</p>
			<a class="btn btn-primary" href="#!">Read more →</a>
		</div>
	</div>
{/if}
