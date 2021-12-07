<script lang="ts">
	import { page } from '$app/stores';
	let sidebarVisible = false;
		let sidebar;
	let sidebarButton: SVGSVGElement;


	function toggleSidebar() {
		sidebarVisible = !sidebarVisible;
	}



	function handleOuterClick(e) {
		// if (
		// 	!sidebarVisible ||
		// 	e.target === sidebarButton ||
		// 	sidebarButton.contains(e.target) ||
		// 	e.target === sidebar ||
		// 	sidebar.contains(e.target)
		// )
		// 	return;
		// toggleSidebar();
		// console.log(e.target)	
	}
</script>

<svelte:window on:click={handleOuterClick} />

<header>
	<div class="inner">
		<a class="nav-title-link" href="/">
			<h2 class="nav-title">Hendry</h2>
		</a>

		<nav class="mobi">
			<svg
				bind:this={sidebarButton}
				xml:space="preserve"
				viewBox="0 0 500 500"
				on:click={toggleSidebar}
			>
				<g transform="matrix(1.3333333,0,0,-1.3333333,-66.326109,633.05707)">
					<path d="M 62.297785,369.40376 H 413.47816" />
					<path d="M 178.86043,205.22075 H 413.28827" />
					<path d="M 62.67053,287.30031 H 413.36485" />
				</g>
			</svg>

			<aside class:visible={sidebarVisible}>
				<ul>
					<li
						class:active={$page.path === '/posts'}
						on:click={toggleSidebar}
					>
						<a href="/posts">Posts</a>
					</li>
					<li
						class:active={$page.path === '/projects'}
						on:click={toggleSidebar}
					>
						<a href="/projects">Projects</a>
					</li>
					<li
						class:active={$page.path === '/about'}
						on:click={toggleSidebar}
					>
						<a sveltekit:prefetch href="/about">About</a>
					</li>
				</ul>
			</aside>
		</nav>
		<nav class="desk">
			<ul>
				<li class:active={$page.path === '/posts'}>
					<a href="/posts">Posts</a>
				</li>
				<li class:active={$page.path === '/projects'}>
					<a href="/projects">Projects</a>
				</li>
				<li class:active={$page.path === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style src="./style.css"></style>
