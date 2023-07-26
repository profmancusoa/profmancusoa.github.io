<script context="module">
	import { title_to_slug } from '$lib/helpers/helpers';

	export const load = async ({ fetch }) => {
		const posts = await fetch('/blog/post.json');
		const allPosts = await posts.json();

		//la cover del post deve essere in /img/posts/<slug>/<cover>
		allPosts.forEach((post) => {
			post.metadata.cover = title_to_slug(post.metadata.titolo) + '/' + post.metadata.cover;
		});

		return {
			props: {
				allPosts: allPosts
			}
		};
	};
</script>

<script>
	import { page } from '$app/stores';
	import '$lib/styles/style.css';
	import '$lib/styles/prism.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Categories from '$lib/components/Categories.svelte';
	import Search from '$lib/components/Search.svelte';
	import { all_posts } from '$lib/stores/store';

	export let allPosts;

	// scrivo tutti i post nello store perchè utile in altri componenti
	$all_posts = allPosts;
</script>

{@html '<script data-goatcounter="https://profmancusoa.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>'}

<Navbar pagina={$page.routeId} />

{#if $page.routeId == null}
	<slot />
{:else if $page.routeId == 'about'}
	<slot />
{:else if $page.routeId.startsWith('blog')}
    <div class="container py-5 mt-5">
        <div class="row">
            <!-- Spaziatore -->
            <div class="col-lg-2" />

            <!-- Contenuto Principali-->
            <div class="col-lg-8">
                <!-- Qui ci va il contenuto principale -->
                <slot />
            </div>
            <!-- Spaziatore -->
            <div class="col-lg-2" />

            <!-- Sidebar-->
            <!-- <div class="col-lg-3 d-none d-lg-block">
                <Categories />
            </div> -->
        </div>
    </div>
{:else}
	<!-- Page content-->
	<div class="container py-5 mt-5">
		<div class="row">
        	<!-- Spaziatore -->
			<!-- <div class="col-lg-1" /> -->

            <!-- Contenuto Principali-->
			<div class="col-lg-12">
				<!-- Qui ci va il contenuto principale -->
                <slot />
			</div>
			<!-- Spaziatore -->
			<!-- <div class="col-lg-1" /> -->

			<!-- Sidebar-->
			<!-- <div class="col-lg-3 d-none d-lg-block">
				<Categories />
			</div> -->
		</div>
	</div>
{/if}

<Footer pagina={$page.routeId} />
