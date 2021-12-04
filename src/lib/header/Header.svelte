<script lang="ts">
	import { page } from '$app/stores';
	let showMenu = false;
</script>

<header>
	<div class="inner">
		<a class="nav-title-link" href="/">
			<h2 class="nav-title">Hendry</h2>
		</a>

		<svg
			class="menu"
			xml:space="preserve"
			viewBox="0 0 500 500"
			on:click={() => (showMenu = !showMenu)}
		>
			<g transform="matrix(1.3333333,0,0,-1.3333333,-66.326109,633.05707)">
				<path d="M 62.297785,369.40376 H 413.47816" />
				<path d="M 178.86043,205.22075 H 413.28827" />
				<path d="M 62.67053,287.30031 H 413.36485" />
			</g>
		</svg>

		<nav class:active={showMenu}>
			<ul>
				<li class:active={$page.path === '/posts'} on:click={() => (showMenu = !showMenu)}>
					<a sveltekit:prefetch href="/">Posts</a>
				</li>
				<li class:active={$page.path === '/projects'} on:click={() => (showMenu = !showMenu)}>
					<a sveltekit:prefetch href="/projects">Projects</a>
				</li>
				<li class:active={$page.path === '/about'} on:click={() => (showMenu = !showMenu)}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style src="./style.css"></style>
