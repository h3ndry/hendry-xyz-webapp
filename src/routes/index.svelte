<script context="module" lang="ts">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/posts.json');
		if (res.ok) {
			const res_json = await res.json();
			return {
				props: { res_json }
			};
		}
	}
</script>

<script lang="ts">
	import { PostCard, Pagination  } from '$lib';
	import type { Data } from '$lib/types';
	import { fetch_post } from '$lib/fetchData';

	export let res_json: Data;
	let yscrol = 1000;

	// async function handleNext() {
	// 	let page = res_json.meta.pagination.page + 1;
	// 	const url = `${base_url}posts?pagination[page]=${page}&pagination[pageSize]=10`;
	// 	res_json = await fetch_post(url);
	// 	yscrol = 0;
	// }

	// async function handlePrev() {
	// 	let page = res_json.meta.pagination.page - 1;
	// 	const url = `${base_url}posts?pagination[page]=${page}&pagination[pageSize]=10`;
	// 	res_json = await fetch_post(url);
	// 	yscrol = 0;
	// }
</script>

<svelte:window bind:scrollY={yscrol} />

<svelte:head>
	<title>Posts | Hendry's Website</title>
</svelte:head>

{#if res_json.data}
	<section>
		{#each res_json.data.reverse() as post (post.id)}
			<PostCard {...post.attributes} />
		{/each}

		<Pagination pagination={res_json.meta.pagination} />
	</section>
{:else}
	<p>Something went wrong</p>
{/if}
