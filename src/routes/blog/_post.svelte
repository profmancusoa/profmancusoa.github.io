<script>
	import { date_convert, cover_assign } from '$lib/helpers/helpers';
	import Categoria from '$lib/components/Categoria.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { title_to_slug } from '$lib/helpers/helpers';

	export let id;
	export let titolo;
	export let featured;
	export let autore;
	export let data;
	export let cover;
	export let introduzione;
	export let categorie;
	export let sezione;

	export let post_url = $page.url.href;
	export let base_post_url = $page.url.origin;
	export let post_uid = $page.routeId;

	//per qualche motivo qui cover è esportato senza l'aggiunta della slug directory
	cover = title_to_slug(titolo) + '/' + cover;

	onMount(() => {
		var disqus_config = function () {
			this.page.url = post_url;
			this.page.identifier = post_uid;
		};

		(function () {
			// DON'T EDIT BELOW THIS LINE
			var d = document,
				s = d.createElement('script');
			s.src = 'https://profmancusoa.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();
	});
</script>

<svelte:head>
	<title>{titolo}</title>
	<meta name="description" content={introduzione} />

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={titolo} />
	<meta property="article:publisher" content="https://profmancusoa.github.io/" />
	<meta property="article:published_time" content={data} />
	<meta property="article:author" content={autore} />
	<meta property="article:section" content={sezione} />
	{#each categorie as categoria}
		<meta property="article:tag" content={categoria} />
	{/each}
	<meta property="og:description" content={introduzione} />
	<meta property="og:url" content={post_url} />
	<meta property="og:image" content="{base_post_url}{cover_assign(cover)}" />
	<meta property="og:image:secure_url" content="{base_post_url}{cover_assign(cover)}" />
	<meta property="og:image:width" content="850" />
	<meta property="og:image:height" content="350" />
	<meta property="og:image:alt" content={introduzione} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content={titolo} />
	<meta name="twitter:title" content={titolo} />
	<meta name="twitter:description" content={introduzione} />
	<meta property="twitter:domain" content="profmancusoa.github.io" />
	<meta property="twitter:url" content="post_url" />
	<meta name="twitter:image" content="{base_post_url}{cover_assign(cover)}" />
</svelte:head>

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
		<img
			class="img-fluid rounded card-img-top"
			src={cover_assign(cover)}
			width="830"
			height="350"
			alt={introduzione}
		/>
	</figure>

	<!-- Body-->
	<section class="post">
		<slot />
	</section>

	<!-- disqus comments -->
	<div id="disqus_thread" />
</article>
