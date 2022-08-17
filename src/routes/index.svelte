<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/blog/post.json');
		const allPosts = await posts.json();

		return {
			props: {
				allPosts: allPosts
			}
		};
	};
</script>

<script>
	import PostPreview from '$lib/components/PostPreview.svelte';
    import Paginatore from '$lib/components/Paginatore.svelte';
    import { all_posts } from '$lib/stores/store';

	export let allPosts;
    const PAGE_SIZE = 4; // numero di post sulla home

    // scrivo tutti i post nello store perchè utile in altri componenti
    $all_posts = allPosts;
	//necessario per le visualizzazioni successive della home
	let posts = [...allPosts];
    // indice inizio e fine pagina dei post corrente
    let post_page_start = 0;
   
	// find featured posts and remove it from posts
	let featured = posts.filter((item) => item.metadata.featured == true);
	if (featured.length > 0) {
		let featured_idx = posts.indexOf(featured[0]);
		posts.splice(featured_idx, 1);
	}
    
    function cambio_pagina(event) {
        post_page_start = event.detail.idx_start;
    }
</script>

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
				<PostPreview  metadata={posts[post_page_start].metadata} />
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
        <Paginatore page_size={PAGE_SIZE} posts={posts} on:cambioPagina={cambio_pagina}/>
	{/if}
</div>
