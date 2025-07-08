<script lang="ts">
	import NavHost from '../components/layout/navigation/NavHost.svelte';
	import Hero from '../components/sections/home/Hero.svelte';
	import About from '../components/sections/about/About.svelte';
import Preferences from '../components/sections/about/Preferences.svelte';
	import Repos from '../components/sections/work/Repos.svelte';
	import Footer from '../components/layout/Footer.svelte';
</script>

<NavHost />
<main>
	<section id="home">
		<Hero />
	</section>
	<section id="about">
		<About />
    <Preferences />
	</section>
	<section id="work">
		<Repos />
	</section>
	<Footer />
</main>
