<script>
	import PostPreview from '$lib/components/PostPreview.svelte';
	import Paginatore from '$lib/components/Paginatore.svelte';
	import { all_posts } from '$lib/stores/store';

	const PAGE_SIZE = 4; // numero di post sulla home
	//necessario per le visualizzazioni successive della home
	let posts = [...$all_posts];

	// indice inizio e fine pagina dei post corrente
	let post_page_start = 0;

	// find featured posts and remove it from posts
	let featured = posts.filter((item) => item.metadata.featured == true && item.metadata.pubblicato ==  true);
	if (featured.length > 0) {
		let featured_idx = posts.indexOf(featured[0]);
		posts.splice(featured_idx, 1);
	}
    posts = posts.filter((item) => item.metadata.pubblicato ==  true);

	function cambio_pagina(event) {
		post_page_start = event.detail.idx_start;
	}
</script>

<svelte:head>
	<title>profmancusoa</title>
	<meta
		name="description"
		content="Smanettando si impara. Blog di tecnologie informatiche per studenti e giovani informatici"
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="profmancusoa" />
	<meta
		property="og:description"
		content="Smanettando si impara. Blog di tecnologie informatiche per studenti e giovani informatici"
	/>
	<meta property="og:url" content="https://profmancusoa.github.io/" />
	<meta property="og:image" content="https://profmancusoa.github.io/img/blog_banner.png" />
	<meta
		property="og:image:secure_url"
		content="https://profmancusoa.github.io/img/blog_banner.png"
	/>
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="640" />
	<meta property="og:image:alt" content="Smanettando si impara. profmancusoa Blog" />

	<!-- Twitter Meta Tags -->
	<meta
		name="twitter:card"
		content="Smanettando si impara. Blog di tecnologie informatiche per studenti e giovani informatici"
	/>
	<meta name="twitter:title" content="profmancusoa" />
	<meta
		name="twitter:description"
		content="Smanettando si impara. Blog di tecnologie informatiche per studenti e giovani informatici"
	/>
	<meta property="twitter:domain" content="profmancusoa.github.io" />
	<meta property="twitter:url" content="https://profmancusoa.github.io/" />
	<meta name="twitter:image" content="https://profmancusoa.github.io/img/blog_banner.png" />
</svelte:head>

<!-- Blog entries-->
<div class="col-lg-12">
	{#if featured[0]}
		<!-- visualizza solo se c'e' un featured -->
		<div class="row">
			<div class="col-lg-12">
				<!-- Featured blog post-->
				<PostPreview metadata={featured[0].metadata} />
			</div>
		</div>
	{/if}

	<!-- il codice seguente (mostruoso) è dovuto ad un bug di svelte
    che non permette di avere un tag aperto in un ciclo {#each}
    questo codice non funziona in svelte:
    {#each posts as post, i}
        {#if i % 2 == 0}
            <div class="row">
        {/fi}
    {/each}
    Quindi non si rieace a generare le righe in modo dinamico -->
	<div class="row">
		<div class="col-lg-6">
			{#if posts[post_page_start]}
				<PostPreview metadata={posts[post_page_start].metadata} />
			{/if}
		</div>
		<div class="col-lg-6">
			{#if posts[post_page_start + 1]}
				<PostPreview metadata={posts[post_page_start + 1].metadata} />
			{/if}
		</div>
	</div>
	<div class="row">
		<div class="col-lg-6">
			{#if posts[post_page_start + 2]}
				<PostPreview metadata={posts[post_page_start + 2].metadata} />
			{/if}
		</div>
		<div class="col-lg-6">
			{#if posts[post_page_start + 3]}
				<PostPreview metadata={posts[post_page_start + 3].metadata} />
			{/if}
		</div>
	</div>

	<!-- Pagination-->
	{#if posts.length > 4}
		<Paginatore page_size={PAGE_SIZE} {posts} on:cambioPagina={cambio_pagina} />
	{/if}
</div>
