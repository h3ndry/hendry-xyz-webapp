<script lang="ts">
	import { spring } from 'svelte/motion';

	export let id: number;
	export let title: string;
	export let published_at: string;
	export let description: string;
	export let slug: string;

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}

</script>

<a class="wraper-link" href={`posts/${slug}`}>
	<div class="post-card">
    <time datetime="{published_at}" >{new Date(published_at).toLocaleDateString()}</time>
		<h1 class="title" >{title}</h1>
        <div class="line"></div>
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

    .title {
    text-align: start;
    display: block;
    font-family: var(--font-mono);
    font-size: 1.758rem;
    font-weight: 700;
    margin: 0.5rem 0px;
    }


.line {
height: 4px;
width: 2rem;
background-color: #323232;


}





</style>
