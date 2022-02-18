<script context="module" lang="ts">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/projects.json');
		if (res.ok) {
			const res_json = await res.json();
			return {
				props: { res_json }
			};
		}
	}
</script>

<script lang="ts">
	import { ProjectCard, Pagination  } from '$lib';
	import type { Data } from '$lib/types';
	import { fetch_post } from '$lib/fetchData';

	export let res_json: Data;
	let yscrol = 1000;

    // console.log(res_json.data)

</script>

<svelte:head>
	<title>projects | Hendry's Website</title>
</svelte:head>

{#if res_json.data}
	<section>
		{#each res_json.data as post (post.id)}
			<ProjectCard  {...post.attributes} />
		{/each}

		<!-- <Pagination pagination={res_json.meta.pagination} /> -->

	</section>
{:else}
	<p>Something went wrong</p>
{/if}
