<script>
	import { createEventDispatcher } from 'svelte';
	export let posts;
	export let page_size;

	const send_event = createEventDispatcher();
	let num_posts = posts.length;
	let num_pagine = Math.ceil(num_posts / page_size);
	let pagine = [...Array(num_pagine).keys()];
	let pagina_corrente = 1;

	function cambio_pagina(pagina) {
		pagina_corrente = pagina;
		send_event('cambioPagina', {
			idx_start: (pagina - 1) * page_size,
			idx_end: (pagina - 1) * page_size + page_size - 1
		});
	}
</script>

<nav aria-label="Pagination">
	<hr class="my-0" />
	<ul class="pagination justify-content-center my-4">
		{#each pagine as _, p}
			<li class="page-item {pagina_corrente == p + 1 ? 'active' : ''}">
				<span class="page-link" on:click={() => cambio_pagina(p + 1)}>
					{p + 1}
				</span>
			</li>
		{/each}
	</ul>
</nav>
