<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/blog/post.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	import PostPreview from '$lib/components/PostPreview.svelte';
	export let posts;

	// find featured posts
	let featured = posts.filter((item) => item.metadata.featured == true);
	featured = featured[0];
	//remove featured from posts
	let featured_idx = posts.indexOf(featured);
	posts.splice(featured_idx, 1);
</script>

<!-- Blog entries-->
<div class="col-lg-12">
	<div class="row">
		<div class="col-lg-12">
			<!-- Featured blog post-->
			<PostPreview metadata={featured.metadata} />
		</div>
	</div>

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
			{#if posts[0]}
				<PostPreview metadata={posts[0].metadata} />
			{/if}
		</div>
		<div class="col-lg-6">
			{#if posts[1]}
				<PostPreview metadata={posts[1].metadata} />
			{/if}
		</div>
	</div>
	<div class="row">
		<div class="col-lg-6">
			{#if posts[2]}
				<PostPreview metadata={posts[2].metadata} />
			{/if}
		</div>
		<div class="col-lg-6">
			{#if posts[3]}
				<PostPreview metadata={posts[3].metadata} />
			{/if}
		</div>
	</div>

	<!-- Pagination-->
	<nav aria-label="Pagination">
		<hr class="my-0" />
		<ul class="pagination justify-content-center my-4">
			<li class="page-item disabled">
				<a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a>
			</li>
			<li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
			<li class="page-item"><a class="page-link" href="#!">2</a></li>
			<li class="page-item"><a class="page-link" href="#!">3</a></li>
			<li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
			<li class="page-item"><a class="page-link" href="#!">15</a></li>
			<li class="page-item"><a class="page-link" href="#!">Older</a></li>
		</ul>
	</nav>
</div>
