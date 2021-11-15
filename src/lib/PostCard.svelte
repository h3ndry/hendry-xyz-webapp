<script lang="ts">
	import Line from '../lib/Line.svelte';

	/* export let id: number; */
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

<style>
	.wraper-link {
		display: block;
		color: inherit;
		text-decoration: none;
		padding: 1.785rem 0;
		border-bottom: solid 1px rgb(255 255 255 / 10%);
	}

	/*  .post-card:hover div { */
	/*     width: 8rem; */
	/* } */

	time {
		opacity: 0.7;
	}

	.title {
		text-align: start;
		display: block;
		font-family: var(--font-mono);
		font-size: 2rem;
		font-weight: 700;
		margin: 0.5rem 0px;
	}
</style>
