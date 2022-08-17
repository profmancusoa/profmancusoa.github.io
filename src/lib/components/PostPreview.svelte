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

	import { date_convert, cover_assign } from '$lib/helpers/helpers';

	export let metadata;
	let post = { ...metadata }; // necessario per il routing lato client
</script>

<div class="card mb-4">
	<a href={post.path}>
		<img class="card-img-top" src={cover_assign(post.cover)} alt={post.titolo} />
	</a>
	<div class="card-body">
		<div class="small text-muted">{date_convert(post.data)}</div>
		<h2 class="card-title text-truncate fw-bold" class:h4={!post.featured}>{@html post.titolo}</h2>
		<p class="card-text text-truncate text-truncate-2 intro">{@html post.introduzione}</p>
		<a class="btn btn-primary fw-bolder" href={post.path}>Leggi →</a>
	</div>
</div>

<style>
	.text-truncate-2 {
		display: -webkit-box !important;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: normal;
		height: 3.7rem;
	}

    .intro {
        font-weight: 200;
        font-size: 1.2rem;
    }
</style>
