<script lang="ts">
	import NavHost from '../components/NavHost.svelte';
	import Hero from '../components/Hero.svelte';
	import About from '../components/About.svelte';
	import Repos from '../components/Repos.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<NavHost />
<main>
	<section id="home">
		<Hero />
	</section>
	<section id="about">
		<About />
	</section>
	<section id="work">
		<Repos />
	</section>
	<Footer />
</main>