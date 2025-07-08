<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		href?: string;
		section?: string;
		isSelected: boolean;
	}

	let { href = '#', section = 'home', isSelected }: Props = $props();

	const iconSrc = () => `icons/${section === '/' ? 'home' : section}.svg`;

	function handleClick(e: MouseEvent) {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(() => {
		// Scroll to top on initial load
		window.scrollTo(0, 0);
	});

</script>

<li class:selected={isSelected}>
	<button onclick={handleClick}>
		<span class="icon-container">
			<img src={iconSrc()} alt={section} />
		</span>
		<span class="heading-style">
			{section}
		</span>
	</button>
</li>

<style lang="scss">
  // Base styles
  li {
    text-decoration: none;
    list-style: none;
  }

  // Button styles
  button {
    background-color: transparent;
    border: none;
    color: var(--white-two);
    font-size: 1.1rem;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 13px 25px;
    border-radius: 100px;
    transition:
            background-color .5s var(--bezier-one),
            transform 0.3s var(--bezier-one);

    &:hover {
      background-color: var(--neutral-four);
    }
  }

  @media screen and (min-width: 869px) {
    :global(nav .scrolled) .selected button {
      background-color: var(--neutral-four);
    }

    :global(nav .scrolled) .selected .heading-style {
      color: var(--neutral-one);
    }
  }

  // Text styling
  .heading-style {
    font-size: 1.2rem;
    //font-weight: bold;
    margin: 0;
    opacity: 0.8;
    transition: all 0.3s var(--bezier-one);
  }

  // Icon styles
  .icon-container {
    display: none;
  }

  img {
    display: flex;
    align-items: center;
    justify-self: center;
    opacity: 0.9;
    height: 24px;
    width: 24px;
    transition: all 0.5s var(--bezier-one);
  }

  button:active img,
  button:hover img {
    opacity: 1;
  }

  // Mobile styles
  @media screen and (max-width: 868px) {
    button {
      flex-direction: column;
      gap: 0;
      font-size: 0.9rem;
      margin-bottom: 0;

      &:hover {
        background-color: transparent;
      }
    }

    img {
      transform: scale(0.95);
      margin-right: 0;
      //transition-delay: 0.3s;
    }

    //.heading-style {
    //  transition-delay: 0.5s;
    //}

    .icon-container {
      --icon-padding: 6px 24px;

      display: block;
      padding: var(--icon-padding);
      border-radius: 100px;
      margin-bottom: 0.4rem;
      transition: all 0.5s var(--bezier-one);
      //transition-delay: 0.3s;
    }

    :global(nav .scrolled) .selected {
      .heading-style {
        color: var(--brighter) !important; // Override any other color styles
      }

      .icon-container {
        background-color: var(--neutral-four);
      }

      img {
        opacity: 1; // Ensure icon opacity is set correctly
      }
    }
  }
</style>
