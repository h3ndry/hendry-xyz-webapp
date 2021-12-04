<script context="module" lang="ts">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('http://localhost:1337/api/about-page');
		const res_json = await res.json();
		return {
			props: { res_json }
		};
	}
</script>

<script lang="ts">
	import { markdown2html } from '$lib/convert';
	import Line from '$lib/Line.svelte';
	import type { Data } from '$lib/types';
	import WrittenBy from '$lib/WrittenBy.svelte';

	export let res_json: Data;

	console.log(res_json)	
</script>

<svelte:head>
	<title>About | Hendry's Website</title>
</svelte:head>

<section>
	<WrittenBy name="Hendry" date="" />
	<h1 class="post-title">About</h1>
	<center>
		<Line width={5} />
	</center>

	<div class="text">

		{@html markdown2html(res_json.data.attributes.text)}
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
