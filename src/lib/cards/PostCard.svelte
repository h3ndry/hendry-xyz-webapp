<script lang="ts">
	import Line from '$lib/Line.svelte';

	export let title: string;
	export let published_at: string;
	export let description: string;
	export let slug: string;

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const date = new Date(published_at);

	let width = 4;
	function handleMouseover() {
		width = 8;
	}

	function handleMouseout() {
		width = 4;
	}
</script>

<a
	class="wraper-link"
	href={`posts/${slug}`}
	on:focus={handleMouseover}
	on:mouseover={handleMouseover}
	on:blur={handleMouseout}
	on:mouseout={handleMouseout}
>
	<div class="post-card">
		<time datetime={published_at}
			>{` ${monthNames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`}</time
		>
		<h1 class="title">{title}</h1>
		<Line {width} />
		<p>{description}</p>
	</div>
</a>

<style src='./style.css'></style>

