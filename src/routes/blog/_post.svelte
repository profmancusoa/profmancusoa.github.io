<script>
	import { date_convert, cover_assign } from '$lib/helpers/helpers';
	import Categoria from '$lib/components/Categoria.svelte';
    
    export let id;
	export let titolo;
	export let featured;
	export let autore;
	export let data;
	export let cover;
	export let introduzione;
	export let categorie;
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

    <div id="disqus_thread"></div>
    <script>
        var disqus_config = function () {
            this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = window.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
                
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://profmancusoa.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    </script>

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
