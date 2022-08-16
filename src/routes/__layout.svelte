<script context="module">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
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

	export let currentRoute;
</script>

<Navbar pagina={$page.routeId} />

{#if $page.routeId == null}
	<slot />
{:else if $page.routeId == 'about'}
	<slot />
{:else}
	<!-- Page content-->
	<div class="container py-5 mt-5">
		<div class="row">
			<!-- Contenuto Principali-->
			<div class="col-lg-8">
				<!-- Qui ci va il contenuto principale -->
				<slot />
			</div>
			<!-- Spaziatore -->
			<div class="col-lg-1" />

			<!-- Sidebar-->
			<div class="col-lg-3">
				<!-- Search widget-->
				<Search />

				<!-- Categories widget-->
				<Categories />

				<!-- Altro widget-->
				<!-- <div class="card mb-4 shadow">
                <div class="card-header">Side Widget</div>
                <div class="card-body">
                    You can put anything you want inside of these side widgets. They are easy to use, and
                    feature the Bootstrap 5 card component!
                </div>
            </div> -->
			</div>
		</div>
	</div>
{/if}

<Footer pagina={$page.routeId} />
