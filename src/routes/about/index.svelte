<script context="module" lang="ts">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/about.json');
		if (res.ok) {
			const res_json = await res.json();
			return {
				props: { res_json }
			};
		}
	}
</script>

<script lang="ts">
	import { markdown2html, Line, WrittenBy   } from '$lib';
	import type { DataAbout } from '$lib/types';

	export let res_json: DataAbout;
</script>

<svelte:head>
	<title>About | Hendry's Website</title>
</svelte:head>

{#if res_json.data}
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
{:else}
	<p>Something went wrong</p>
{/if}

<style lang="scss" src="./styles.scss"></style>
