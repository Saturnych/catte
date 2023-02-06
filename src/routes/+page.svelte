<script lang="ts">
	import Mreows from '$lib/components/Mreows.svelte';

	let mreows: Array<{icon: string}> | undefined;
</script>

<main class="markup column">
	<section>
		<header class="centered-hz">
			<h1>catte</h1>
		</header>
		<span>{#if mreows}{mreows[0].icon}{:else}✨{/if}</span>
		<span>hello, welcome to <a href="https://github.com/Saturnych/catte">catte</a></span>
	</section>
	<Mreows bind:mreows />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
	}
</style>
