<script>
	import Categoria from '$lib/components/Categoria.svelte';
</script>

<!-- Categories widget-->
<div class="card mb-4 shadow">
	<div class="card-header">Categorie</div>
	<div class="card-body">
		<div class="row">
			<div class="col-sm-6 d-flex justify-content-center">
				<ul class="list-unstyled mb-0">
					<Categoria text="Web Design" />
					<Categoria text="HTML" />
					<Categoria text="Freebies" />
					<Categoria text="JavaScript" />
					<Categoria text="CSS" />
					<Categoria text="Tutorials" />
				</ul>
			</div>
			<div class="col-sm-6 d-flex justify-content-center">
				<ul class="list-unstyled mb-0">
					<Categoria text="JavaScript" />
					<Categoria text="CSS" />
					<Categoria text="Tutorials" />
					<Categoria text="Web Design" />
					<Categoria text="HTML" />
					<Categoria text="Freebies" />
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
