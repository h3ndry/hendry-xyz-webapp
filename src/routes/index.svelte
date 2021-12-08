<script context="module">
	export function load({ page }) {
	console.log(page.host)
		return {
			redirect: '/posts',
			status: 308
		};
	}
</script>
