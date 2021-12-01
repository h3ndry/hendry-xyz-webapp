<script lang="ts">
	import { page } from '$app/stores';
	/* import logo from './svelte-logo.svg'; */

	let showMenu = false;
</script>

<header>
	<div class="inner">
		<a class="nav-title-link" href="/">
			<h2 class="nav-title">Hendry</h2>
			<!--
			<img src={logo} alt="SvelteKit" />
            -->
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
			</g></svg
		>

		<nav class:active={showMenu}>
			<ul>
				<li class:active={$page.path === '/posts'}>
					<a sveltekit:prefetch href="/">Posts</a>
				</li>
				<li class:active={$page.path === '/todos'}>
					<a sveltekit:prefetch href="/todos">Projects</a>
				</li>
				<li class:active={$page.path === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		margin: 0 0 3rem 0;
		box-shadow: 0 2px 2px -2px rgb(255 255 255 / 10%);
		position: relative;
	}

	.inner {
		width: 90%;
		max-width: 800px;
		margin: 1rem auto;
		display: flex;
		justify-content: space-between;

		margin: 0 auto;
	}

	.menu {
		position: relative;
		display: block;
		width: 4rem;
		height: 4rem;
		z-index: 99999999;
	}

	.menu path {
		fill: none;
		stroke: var(--secondary-color);
		stroke-width: 22.5;
		stroke-linecap: round;
	}

	nav {
		position: absolute;
		display: none;
		right: 0;
		background-color: #2b2b2b;
		width: 50%;
		height: 100vh;
		padding: 8rem 0rem 0rem 1rem;
	}
	nav.active {
		display: block;
	}

	.nav-title {
		font-family: var(--font-mono);
		margin: 0;
		font-size: 1.2rem;
		font-weight: bold;
		color: var(--secondary-color);
	}

	.nav-title-link {
		text-decoration: none;
		display: block;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		margin: 2rem 0;
	}

	li.active {
		border-bottom: solid var(--secondary-color) 1px;
	}

	nav a {
		font-family: var(--font-mono);
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		text-decoration: none;

		/* padding: 2rem 0rem; */
	}

	a:hover {
		color: var(--accent-color);
	}

	a:visited {
		color: var(--secondary-color);
	}

	@media (min-width: 450px) {
		.menu {
			display: none;
		}

		.inner {
			margin: 1rem auto;
		}

		.nav-title {
			font-size: 1.5rem;
		}

		nav {
			position: unset;
			display: flex;
			height: auto;
			width: auto;
			background-color: transparent;
			padding: 0;
		}

		ul {
			display: flex;
		}

		li {
			margin: 0;
		}
	}
</style>
