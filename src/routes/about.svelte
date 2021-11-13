<script context="module" lang="ts">
	export const prerender = true;

	export async function load({ fetch }) {
		const res = await fetch('http://localhost:1337/aboutpage');
		const data = await res.json();

		return {
			/* error: new Error(`Could not load`), */
			props: { data }
		};
	}
</script>

<script lang="ts">
	import { markdown2html } from '$lib/convert';
	import Line from '$lib/Line.svelte';
	import WrittenBy from '$lib/WrittenBy.svelte';

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
   <Line /> 

	<div class="text">
		{@html html}
	</div>
</section>

<style>
	h1 {
		margin-bottom: 0;
	}

	center {
		margin-bottom: 4rem;
	}

	.post-title {
		font-family: var(--font-mono);
		font-size: 4rem;
		text-align: center;
		padding: 0;
		margin: 0.3rem 0px;
	}
</style>
