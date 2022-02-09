<script lang="ts">
	import { Header } from '$lib';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<small>
		&copy; {new Date().getFullYear()} Made with <a href="https://kit.svelte.dev/">SvelteKit</a>
		using <a href="https://neovim.io/">Neovim</a>
	</small>
</footer>

<style global lang="scss">
	@use 'src/styles/global';
</style>
