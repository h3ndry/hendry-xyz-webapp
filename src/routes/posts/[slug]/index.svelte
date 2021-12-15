<script context="module" lang="ts">
	export const prerender = true;

	export async function load({ page }) {
		const res = await fetch(
			`https://hendry-xyz.herokuapp.com/api/posts?filters[slug][$eq]=${page.params.slug}`
		);
		const res_json = await res.json();

		console.log(page.params.slug);

		return {
			props: { res_json }
		};
	}
</script>

<script lang="ts">
	import Line from '$lib/Line.svelte';
	import { markdown2html } from '$lib/convert';
	import WrittenBy from '$lib/WrittenBy.svelte';
	import type { Data } from '$lib/types';

	export let res_json: Data;
</script>

<svelte:head>
	<title>Post | {res_json.data[0].attributes.slug}</title>
</svelte:head>

<section>
	<div class="wraper">
		<WrittenBy
			name="Hendry"
			date={new Date(res_json.data[0].attributes.publishedAt).toLocaleDateString()}
		/>
		<h1>{res_json.data[0].attributes.title}</h1>
		<center><Line width={5} /></center>
		{@html markdown2html(res_json.data[0].attributes.content)}
	</div>
</section>

<style lang="scss">
	h1 {
		font-family: var(--font-mono);
		font-size: 2rem;
		margin: 0rem;
	}

	center {
		margin-bottom: 2rem;
	}

	@media (min-width: 720px) {
		h1 {
			font-size: 2.4rem;
			font-size: 4rem;
			margin: 0;
		}
		center {
			margin-bottom: 4rem;
		}
	}
</style>
