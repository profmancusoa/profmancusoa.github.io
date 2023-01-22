<script>
	export let pagina;
	let home_active, about_active;

	$: {
		home_active = pagina == '' ? 'active' : '';
		about_active = pagina == 'about' ? 'active' : '';
	}

    const VERSION = "1.0.3"
</script>

{#if pagina != null}
	<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary shadow">
		<div class="container">
			<div class="avatar">
				<img
					src="/img/avatars/profmancuso-round.jpg"
					class="rounded-circle img-fluid"
					alt="ProfMancusoa"
					width="36"
					height="36"
				/>
			</div>
			<a class="navbar-brand" href="/"><h1>ProfMancusoa</h1></a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"><span class="navbar-toggler-icon" /></button
			>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item"><a class="nav-link {home_active}" href="/"><b>Home</b></a></li>
					<li class="nav-item">
						<a class="nav-link {about_active}" href="/about"><b>About</b></a>
					</li>
                    <li class="nav-item">
						<span class="nav-link" href="#"><b>v{VERSION}</b></span>
					</li>
				</ul>
			</div>
		</div>
	</nav>
{/if}

<style>
	.avatar {
		width: 40px;
		border: 2px solid #fff;
		border-radius: 50%;
		margin-right: 2rem;
	}
    h1 {
        font-size: 1.4rem;
    }
</style>
