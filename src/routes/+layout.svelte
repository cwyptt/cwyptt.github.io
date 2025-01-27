<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import '../styles/global.scss';
	import '../styles/fonts.scss';
	import { BackgroundAudioManager } from '$lib/utils/audio/BackgroundAudioManager.ts';
	import { initializeClickSound } from '$lib/utils/audio/clickSound.ts';
	import { handleResize } from '$lib/utils/resizeHandler.ts';
	// import Cursor from '../components/Cursor.svelte';
	import RaindropCursor from '../components/ui/cursors/RaindropCursor.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let loading = $state(true);
	let playSFX: (() => void) | undefined = $state();

	onMount(async () => {
		// Initialize audio systems
		playSFX = await initializeClickSound();
		const bgAudioManager = new BackgroundAudioManager();
		await bgAudioManager.startPlayback();

		// Handle loading state
		if (document.readyState === 'complete') {
			loading = false;
		}

		handleResize();
	});

</script>

<svelte:head>
	<!-- Core meta tags for basic site functionality -->
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Cwypt | Alex Hanson's Portfolio Page" />
	<title>Cwypt | Portfolio</title>

	<link rel="preload" href="{base}/sounds/rain-excuse-consuela.mp3" as="audio" type="audio/mpeg">

	<link rel="preload" href="{base}/resources/resume.pdf" type="application/pdf">

	<link rel="icon" type="image/x-icon" href="{base}/favicon.ico">

	<!-- Open Graph tags for social media sharing -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://cwyptt.github.io" />
	<meta name="og:title" content="cwyptt.github.io" />
	<meta content="{base}/favicon.png" property="og:image" />
	<meta property="og:description" content="Crypt's Portfolio. Made in Svelte 5." />

	<!-- Twitter Card configuration -->
	<meta name="twitter:image" itemprop="image" content="{base}/favicon.png" />
	<meta name="twitter:card" content="summary" />

	<!-- Browser theme color -->
	<meta name="theme-color" content="#CCE2F2" />
</svelte:head>

<svelte:window onclick={playSFX} />

<!--<Cursor />-->
<RaindropCursor />
<span class:loading>
	{@render children?.()}
</span>

<style>
    .loading {
        transition: none;
    }
</style>
