<script lang="ts">
	import HeroImage from './HeroImage.svelte';
	import Button from '../../ui/Button.svelte';
	import Socials from '../../socials/Socials.svelte';

	function handleClick() {
		const el = document.querySelector('#work');
		if (!el) return;
		el.scrollIntoView(true);
	}
</script>

<section id="home" class="wrapper">
	<div>
		<h1><span class="glitch" data-text="¢">¢</span>rypt</h1>
		<h4>Alex Hanson, <span style="font-weight: normal; font-size: 0.8em">Fleet Operations Engineer</span></h4>
		<h5>Intern at U.S. Cyber Defense Center</h5>
		<div class="socials">
			<Socials size="normal"/>
		</div>
		<Button side onclick={handleClick} onkeydown={handleClick}>Discover my work ↓</Button>
	</div>
	<HeroImage />
</section>

<style lang="scss">
  @use '../../../styles/mixins';
	@use '../../../styles/animations';

  section {
    scroll-margin-top: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5.75rem;
    margin-top: 7rem;

    @media screen and (max-width: 868px) {
      margin-top: 4rem;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 2.75rem;
    }

    @media screen and (max-width: 500px) {
      display: block;
    }
  }

  .socials {
    margin-top: 1rem;
    margin-bottom: 1.7rem;
  }

  h1 {
    .glitch {
      //transform: rotate(-75deg);
      font-size: 8rem;
      display: inline-block;
      position: relative;
      color: #5ca0bf;
      animation: glitch-rgb 5s steps(1) infinite,
      float 3s ease-in-out infinite;

      &::before,
      &::after {
        content: '¢';
        position: fixed;
        background-color: #2a5569;
        top: 2.5px;
        left: 0;
        opacity: 0;
        animation: glitch-rgb 5s steps(1) infinite,
        float 2s ease-in-out infinite;
      }

      &::before {
        color: #ff0000;
        position: absolute;
        transform: rotate(-90deg);
        animation-delay: 0.035s;
      }

      &::after {
        color: #00ff00;
        position: absolute;
        transform: rotate(180deg);
        animation-delay: -0.2s;
      }
    }
  }

  h1::before {
    @include mixins.outlineText(
						$content: '⌥',
						$translateX: -125%,
						$translateY: -50%,
						$fontSize: 100px,
						$letterSpacing: -0.1em
		);
  }

  @media screen and (max-width: 1240px) {
    h1 {
      min-height: 0;
      font-size: clamp(4rem, 10vw, 6.25rem);
    }
  }
</style>
