<script context="module" lang="ts">
	export const prerender = true;
	// https://hendry-xyz.herokuapp.com/api/about-page
	export async function load() {
		const res = await fetch(
			'https://hendry-xyz.herokuapp.com/api/posts?pagination[page]=1&pagination[pageSize]=10'
		);
		const res_json = await res.json();
		return {
			props: { res_json }
		};
	}
</script>

<script lang="ts">
	import PostCard from '$lib/cards/PostCard.svelte';
	import Pagination from '$lib/pagination/Pagination.svelte';
	import type { Data } from '$lib/types';
	import { fetch_post } from '$lib/fetchData';

	export let res_json: Data;
	let yscrol = 1000;

	async function handleNext() {
		let page = res_json.meta.pagination.page + 1;
		const url = `https://hendry-xyz.herokuapp.com/api/posts?pagination[page]=${page}&pagination[pageSize]=10`;
		res_json = await fetch_post(url);
		yscrol = 0;
	}

	async function handlePrev() {
		let page = res_json.meta.pagination.page - 1;
		const url = `https://hendry-xyz.herokuapp.com/api/posts?pagination[page]=${page}&pagination[pageSize]=10`;
		res_json = await fetch_post(url);
		yscrol = 0;
	}
</script>

<svelte:window bind:scrollY={yscrol} />

<svelte:head>
	<title>Posts | Hendry's Website</title>
</svelte:head>

<section>
	{#each res_json.data.reverse() as post (post.id)}
		<PostCard {...post.attributes} />
	{/each}

	<Pagination on:prev={handlePrev} on:next={handleNext} pagination={res_json.meta.pagination} />
</section>
