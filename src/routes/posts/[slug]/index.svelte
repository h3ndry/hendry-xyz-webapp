<script context="module" lang="ts">
	export const prerender = true;

	export async function load({ page }) {
		const res = await fetch(`http://localhost:1337/articles/?slug=${page.params.slug}`);
		const articles = await res.json();

		return {
			props: { articles }
		};
	}
</script>

<script lang="ts">
	import Line from '$lib/Line.svelte';
	import { markdown2html } from '$lib/convert';
	import WrittenBy from '$lib/WrittenBy.svelte';

	export let articles;
	let article = articles[0];
</script>

<svelte:head>
	<title>Post | {article.title}</title>
</svelte:head>

<section>
	<div class="wraper">
		<WrittenBy name="Hendry" date={new Date(article.published_at).toLocaleDateString()} />
		<h1>{article.title}</h1>
		<center><Line width={5} /></center>
		{@html markdown2html(article.content)}
	</div>
</section>

<style>
	h1 {
		font-family: var(--font-mono);
		font-size: 4rem;
		margin-bottom: 0rem;
	}

	center {
		margin-bottom: 4rem;
	}
</style>
