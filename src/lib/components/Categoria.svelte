<script>
	export let text;

	let colors = [
		'bg-primary',
		'bg-success',
		'bg-danger',
		'bg-warning',
		'bg-info'
		// 'bg-dark'
	];

	let color = colors[Math.floor(Math.random() * colors.length)];
</script>

<li>
	<span class="categoria badge {color} text-truncate mb-1">{text}</span>
</li>

<style>
	.categoria {
		width: 7rem;
	}
</style>
