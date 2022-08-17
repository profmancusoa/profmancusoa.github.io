<script>
	import Categoria from '$lib/components/Categoria.svelte';
    import { all_posts } from '$lib/stores/store';

    let categorie = [];
    let categorie_left, categorie_right;

    // ricato la lista delle catagerie dai post e le suddividi in desto e sinistro
    (function () {
        let _categorie = new Set();
        $all_posts.forEach(post => {
            post.metadata.categorie.forEach(categoria => {
                _categorie.add(categoria);
            })
        })
        categorie = [..._categorie];
        let middle_cat = Math.round(categorie.length / 2);
        categorie_left = categorie.slice(0, middle_cat);
        categorie_right = categorie.slice(middle_cat);
    })();

    console.log(categorie_left);
    console.log(categorie_right)
</script>

<!-- Categories widget-->
<div class="card mb-4 shadow">
	<div class="card-header">Categorie</div>
	<div class="card-body">
		<div class="row">
			<div class="col-sm-6 d-flex justify-content-center">
				<ul class="list-unstyled mb-0">
                    {#each categorie_left as categoria}
                        <Categoria text="{categoria}" />
                    {/each}    
				</ul>
			</div>
			<div class="col-sm-6 d-flex justify-content-center">
				<ul class="list-unstyled mb-0">
					{#each categorie_right as categoria}
                        <Categoria text="{categoria}" />
                    {/each}    
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	ul > li {
		margin-bottom: 0.3rem;
	}
</style>
