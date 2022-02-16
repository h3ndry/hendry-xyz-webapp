<script lang="ts">
	import { page } from '$app/stores';

	export let thumbnail: any;
	export let title: string;
	export let content: string;
	export let description: string;
	export let createdAt: string;
	export let updatedAt: string;
	export let publishedAt: string;
	export let project_id: string;
	export let images: any;

	// I hate what I am doing here, really need to find a better
	// way to have the base url expose to all part of the app
	const base_url = 'http://localhost:1337';

	const image_path = thumbnail.data.attributes.url;
	// const { origin } = $page.url

	console.log(image_path, $page.url.origin);
</script>

<div class="project-card">
	<div class="img">
		<img src="{base_url}{image_path}" alt="" />
	</div>
	<div class="details">
		<h3>{title}</h3>
	</div>
</div>
