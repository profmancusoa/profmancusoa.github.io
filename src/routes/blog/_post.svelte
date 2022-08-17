<script>
	import { date_convert, cover_assign } from '$lib/helpers/helpers';
	import Categoria from '$lib/components/Categoria.svelte';

	export let titolo;
	export let featured;
	export let autore;
	export let data;
	export let cover;
	export let introduzione;
	export let categorie;

	console.log(categorie);
</script>

<article>
	<!-- Post header-->
	<header class="mb-4">
		<!-- titolo -->
		<h1 class="fw-bolder mb-2">{titolo}</h1>
		<!-- metadata-->
		<div class="text-muted fst-italic mb-3 fs-5">{autore} - {date_convert(data)}</div>
		<!-- categorie-->
		{#each categorie as categoria}
			<span class="badge bg-primary btn-outline-primary text-decoration-none link-light me-1"
				>{categoria}</span
			>
		{/each}
	</header>

	<!-- cover image-->
	<figure class="mb-5">
		<img class="img-fluid rounded card-img-top" src={cover_assign(cover)} alt="..." />
	</figure>

	<!-- Body-->
	<section class="post">
		<slot />
	</section>
</article>

<style>
	.categorie {
		list-style-type: none;
		margin: 0px;
		padding: 0px;
		display: inline;
		float: left;
	}
</style>
