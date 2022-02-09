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

	const base_url = process.env['BASE_URL'];

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
