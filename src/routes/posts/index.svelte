<script context="module" lang="ts">
	export const prerender = true;

	export async function load() {
		const res = await fetch('http://localhost:1337/articles');
		const articles = await res.json();

		return {
			props: { articles }
		};
	}
</script>

<script lang="ts">
	/* import Counter from '$lib/Counter.svelte'; */
	import PostCard from '$lib/PostCard.svelte';

	interface Articles {
		name: string;
		id: number;
	}

	export let articles: Articles[];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#each articles as article (article.id)}
		<PostCard {...article} />
	{/each}
</section>

<style>
</style>
