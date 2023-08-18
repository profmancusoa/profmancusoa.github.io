<script>
	import { date_convert, cover_assign } from '$lib/helpers/helpers';
	import Categoria from '$lib/components/Categoria.svelte';
	import { page } from '$app/stores';
    import { onMount } from 'svelte';
	import { title_to_slug } from '$lib/helpers/helpers';
	import { dev } from '$app/env';

	export let id;
	export let titolo;
	export let featured;
	export let autore;
	export let data;
	export let cover;
	export let introduzione;
    export let pubblicato;
	export let categorie;
	export let sezione;

	export let base_post_url = 'https://prof.mancusoa.it'
    export let post_uid = $page.routeId;
    export let post_url = base_post_url + '/' + post_uid + '/';

	//per qualche motivo qui cover è esportato senza l'aggiunta della slug directory
	cover = title_to_slug(titolo) + '/' + cover;

	onMount(() => {
		if (!dev) {
			//commenti solo in produzione
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
			//aggiorna il contatore dei commenti
			DISQUSWIDGETS.getCount({ reset: true });
		}
	});
</script>

<svelte:head>
	<title>{titolo}</title>
    <meta name="title" content="{titolo}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta property="og:locale" content="it_IT" />
    <meta name="description" content={introduzione} />
    <meta property="og:site_name" content="ProfMancusoa" />
    <link rel="canonical" href="{post_url}"/>
    
	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={titolo} />
	<meta property="article:publisher" content="{base_post_url}/" />
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
	<meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@profmancusoa" />
    <meta name="twitter:site" content="@profmancusoa">
	<meta name="twitter:title" content={titolo} />
	<meta name="twitter:description" content={introduzione} />
	<meta property="twitter:domain" content="prof.mancusoa.it" />
	<meta property="twitter:url" content="{post_url}" />
	<meta name="twitter:image" content="{base_post_url}{cover_assign(cover)}" />    
</svelte:head>

<article>
	<!-- Post header-->
	<header class="mb-4">
		<!-- titolo -->
		<h1 class="fw-bolder mb-2">{titolo}</h1>
		<!-- metadata-->
		<div class="text-muted fst-italic mb-3 fs-5">
			{autore} - {date_convert(data)}
			{#if !dev}
				- <a class="text-muted" href="{post_url}#disqus_thread">0 commenti</a>
			{/if}
		</div>
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

    <section class="social-box">
        <p>Condividi quest'articolo sui tuoi social</p>
        <div class="social-links">
            <a rel="nofollow" href="https://twitter.com/share?url={post_url}&text={encodeURIComponent(titolo)}&via=profmancusoa" target="_blank"><img src="/img/twitter.png" width="48" alt="twitter icon"></a>
            <a rel="nofollow" href="https://www.facebook.com/sharer/sharer.php?u={post_url}" target="_blank"><img src="/img/facebook.png" width="48" alt="facebook icon"></a>
            <!-- <a rel="nofollow" href="https://pinterest.com/pin/create/button/?url={encodeURIComponent(post_url)}&amp;media={base_post_url}{cover_assign(cover)}&amp;description={encodeURIComponent(introduzione)}" target="_blank"><img src="/img/pininterest.png" width="48" alt="pininterest icon"></a> -->
        </div>
	</section>

	<hr />

    <!-- disqus comments -->
	<div id="disqus_thread" />
</article>

<style>
	hr {
		border: 2px solid blue;
		border-radius: 5px;
		margin-top: 5rem;
		margin-bottom: 3rem;
	}

    .social-box {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }
</style>
