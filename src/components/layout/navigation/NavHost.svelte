<script lang="ts">
	import Nav from './Nav.svelte';

	// Scroll position tracking
	let y = $state(0);

	// Section scroll breakpoints
	const SCROLL_BREAKPOINTS = {
		home: 350,
		about: 675
	};
</script>

<nav>
	<div class:scrolled={y > 20}>
		<ul>
			<Nav href="#home" section="/" isSelected={y < SCROLL_BREAKPOINTS.home} />
			<Nav href="#about" section="about" isSelected={y > SCROLL_BREAKPOINTS.home && y < SCROLL_BREAKPOINTS.about} />
			<Nav href="#work" section="work" isSelected={y > SCROLL_BREAKPOINTS.about} />
		</ul>
	</div>
</nav>

<svelte:window bind:scrollY={y} />

<style lang="scss">
  // Variables
  $desktop-breakpoint: 868px;
  $blur-amount: 15px;
  $transition-timing: 0.75s ease;

  // Base nav styles
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // Navigation container
  div {
    width: 100%;
    text-align: center;
    align-items: center;
    position: fixed;
    top: 0;
    padding: 1.25rem 0;
    z-index: 15;
    background-color: transparent;
    backdrop-filter: blur($blur-amount);
    -webkit-backdrop-filter: blur($blur-amount);
    background-blend-mode: overlay;
    transition: all $transition-timing;

    ul {
      display: flex;
      gap: 4rem;
      justify-content: center;
      position: relative;
    }
  }

  // Desktop styles
  @media (min-width: $desktop-breakpoint) {
    div {
      width: 55rem;
      border-radius: 12px;
    }

    .scrolled {
      border-bottom: 1.5px solid var(--brighter-opacity);
      padding: 0.5rem 0;
      margin-top: 0.5rem;
      width: 42rem;
      background-color: var(--neutral-three);
      box-shadow: 0 15px 8px -10px rgba(0, 0, 0, 0.4);

      &::before {
        opacity: 0;
      }
    }
  }

  // Mobile styles
  @media (max-width: $desktop-breakpoint) {
    div {
      bottom: 0;
      top: auto;
      padding: 0;

      &::before {
        background-color: #1a1616;
        animation: none;
      }

      ul {
        display: flex;
        justify-content: space-evenly;
        gap: 2vw;
      }
    }
  }
</style>