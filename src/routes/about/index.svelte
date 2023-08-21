<svelte:head>
    <meta name="description" content="Ciao, sono il prof. Mancuso Antonio e insegno le materie d'indirizzo agli studenti del triennio informatico presso l'Istitituto Internazionale E.Agnelli a Torino.Questo blog è un semplice strumento per condividere informazioni con gli studenti e tutti i lettori interessati. E' anche uno spazio in cui gli studenti possono pubblicare i loro articoli.">
    <title>About profmancusoa</title>
</svelte:head>
<div class="outer">
	<div class="middle">
		<div class="inner">
			<div class="container-fluid">
				<div class="row text-center mt-5">
					<div class="col-sm-2" />
					<div class="col-sm-8">
						<div class="avatar mx-auto">
							<img
								src="/img/avatars/profmancuso.webp"
								class="rounded-circle img-fluid"
								alt="ProfMancusoa"
								width="250"
								height="250"
							/>
						</div>
					</div>
					<div class="col-sm-2" />
				</div>
				<div class="row text-center about mt-5">
					<div class="col-sm-3" />
					<div class="col-sm-6">
						<p class="dark-grey-text fs-3">
							Ciao, sono il prof. Mancuso Antonio e insegno le materie d'indirizzo agli studenti del
							triennio informatico presso l'Istitituto Internazionale E.Agnelli a Torino.
						</p>
						<p class="dark-grey-text fs-3">
							Questo blog è un semplice strumento per condividere informazioni con gli studenti e
							tutti i lettori interessati. E' anche uno spazio in cui gli studenti possono
							pubblicare i loro articoli. <br /><i>Buona Lettura!!</i>
						</p>
					</div>
					<div class="col-sm-2" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.outer {
		background-image: url('/img/about_bg.jpg');
		display: table;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	.middle {
		display: table-cell;
		vertical-align: middle;
	}

	.inner {
		margin-left: auto;
		margin-right: auto;
	}

	.avatar {
		width: 250px;
		/* margin-top: -260px; */
		/* overflow: hidden; */
		/* border: 3px solid #fff; */
		/* border-radius: 50%; */
	}

	.about {
		color: white;
		font-size: 3rem;
		font-weight: bold;
	}
</style>
