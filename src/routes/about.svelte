<script context="module" lang="ts">
	export const prerender = true;

	export async function load({ fetch }) {
		const res = await fetch('http://localhost:1337/aboutpage');
		const data = await res.json();

		return {
			props: { data }
		};
	}
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import showdown from 'showdown';

	export let data;

	const conv = new showdown.Converter();
	const html = conv.makeHtml(data.text);
	console.log(data);
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section>
	<div class="post-info">
		<span>Written by</span>
		Hendry
	</div>
	<h1 class="post-title">About</h1>
	<div class="post-line" />

	<div class="text">
		{@html html}
	</div>
</section>

<style>
	.post-line {
		display: block;
		width: 4rem;
		border-top: 0.4rem solid rgb(54, 54, 54);
		margin: 0px auto 3rem;
	}

	.post-info {
		font-family: Palatino, 'Palatino LT STD', 'Palatino Linotype', 'Book Antiqua', Georgia, serif;
		letter-spacing: 0.5px;
		text-align: center;
	}

.post-info span {
    font-style: italic;
}

	.post-title {
		font-family: var(--font-mono);
		font-size: 4rem;
		text-align: center;
        padding: 0;
		margin: .3rem 0px;
	}
</style>
