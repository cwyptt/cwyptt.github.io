<script lang="ts">
	import Tooltip from '../components/Tooltip.svelte';

	interface Props {
		icon: string;
		link: string;
		tip: string;
		size?: 'small' | 'normal';
	}

	let {
		icon,
		link,
		tip,
		size = 'normal'
	}: Props = $props();

	// Prevent mousedown selection
	function preventSelect(event: MouseEvent) {
		if (event.detail > 1) { // prevent double click selection
			event.preventDefault();
		}
	}
</script>

<Tooltip {tip}>
	<div>
		<a href={link} target="_blank" rel="noreferrer"
			 ondragstart={((event) => event.preventDefault())}
			 onmousedown={preventSelect}
			 draggable="false"
			 class={size}
			 aria-label="tooltip"
		>
			<img src="icons/{icon}.svg" alt={icon} />
		</a>
	</div>
</Tooltip>

<style lang="scss">
	a {
		transition: all 0.3s var(--bezier-one);
		display: flex;
		justify-content: center;
		align-items: center;
    width: 68px;  /* Increased from 50px */
    height: 68px; /* Increased from 50px */
		background-color: transparent;
		border: none;
    border-radius: 12px; /* Slightly increased for better proportion */
    //cursor: pointer;

    &.small {
      width: 45px;   /* Reduced size for footer */
      height: 45px;  /* Reduced size for footer */

      img {
        height: 32px;  /* Smaller icon size for footer */
        width: 32px;
      }
    }
	}

	img {
    height: 46px; /* Increased from 26px */
    width: 46px;  /* Increased from 26px */
		opacity: 0.7;
		transition: all 0.3s var(--bezier-one);
	}

	div {
		transition: all 0.3s var(--bezier-one);

		&:hover {
			img {
				opacity: 1;
			}
			a {
				background-color: var(--neutral-one);
			}
		}

		&:active {
			transform: scale(98%);
		}
	}
</style>
