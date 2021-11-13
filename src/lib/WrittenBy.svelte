<script>
	export let name;
	export let date;
</script>

{#if date}
	<div class="post-info">
		<span>Written by</span>
		{name} <br />
		<span>on</span>
		{date}
	</div>
{:else}
	<div class="post-info">
		<span>Written by</span>
		{name} <br />
	</div>
{/if}

<style>
	.post-info {
		font-family: Palatino, 'Palatino LT STD', 'Palatino Linotype', 'Book Antiqua', Georgia,
			serif;
		letter-spacing: 0.5px;
		text-align: center;
	}

	.post-info span {
		font-style: italic;
	}
</style>
