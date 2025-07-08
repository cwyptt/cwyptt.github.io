<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { cursorVisible } from '$lib/stores/cursorStore.ts';
	import { browser } from '$app/environment';

	let mouseX: number = $state(0);
	let mouseY: number = $state(0);
	let opacity: number = $state(1);
	let scale = $state(1);
	let timeout: ReturnType<typeof setTimeout>;

	// Physics variables for the inner water droplet
	let dropletX: number = $state(15);
	let dropletY: number = $state(15);
	let velocityX: number = $state(0);
	let velocityY: number = $state(0);
	let lastMouseX: number = $state(0);
	let lastMouseY: number = $state(0);
	let animationFrame: number | null = $state(null);

	// Physics constants for perpetual gentle bouncing
	const DAMPING = 0.995;          // Very slight damping to maintain motion
	const MOUSE_INFLUENCE = 0.15;   // Gentle mouse influence
	const BOUNCE_FACTOR = 0.98;     // Preserve most energy on bounce
	const MIN_VELOCITY = 0.05;       // Minimum velocity to prevent stopping
	const INITIAL_VELOCITY = 0.1;   // Starting velocity for perpetual motion

	// Initialize with some movement
	function initializeMotion() {
		// Give random initial velocities for natural-looking motion
		velocityX = (Math.random() - 0.5) * INITIAL_VELOCITY;
		velocityY = (Math.random() - 0.5) * INITIAL_VELOCITY;
	}

	function mouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
		opacity = 1;

		const mouseVelX = mouseX - lastMouseX;
		const mouseVelY = mouseY - lastMouseY;

		// Only update opacity if cursor should be visible
		$cursorVisible && (opacity = 1);

		velocityY += mouseVelX * MOUSE_INFLUENCE;
		velocityX -= mouseVelY * MOUSE_INFLUENCE;

		lastMouseX = mouseX;
		lastMouseY = mouseY;

		clearTimeout(timeout);
		timeout = setTimeout(() => {
			opacity = 0;
		}, 3000);
	}

	function updateDroplet() {
		// Apply very gentle damping
		velocityX *= DAMPING;
		velocityY *= DAMPING;

		// Ensure minimum motion is maintained
		const currentSpeed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
		if (currentSpeed < MIN_VELOCITY) {
			const scale = MIN_VELOCITY / currentSpeed;
			velocityX *= scale;
			velocityY *= scale;
		}

		// Update position
		dropletX += velocityX;
		dropletY += velocityY;

		// Handle boundary collision with gentle bouncing
		const centerX = 25;
		const centerY = 25;
		const distance = Math.sqrt(
			Math.pow(dropletX - centerX, 2) +
			Math.pow(dropletY - centerY, 2)
		);

		if (distance > 15) {
			const angle = Math.atan2(dropletY - centerY, dropletX - centerX);

			// Position correction
			dropletX = centerX + Math.cos(angle) * 15;
			dropletY = centerY + Math.sin(angle) * 15;

			// Calculate reflection vector
			const normalX = Math.cos(angle);
			const normalY = Math.sin(angle);
			const dot = velocityX * normalX + velocityY * normalY;

			// Apply bounce with energy preservation
			velocityX = (velocityX - 2 * dot * normalX) * BOUNCE_FACTOR;
			velocityY = (velocityY - 2 * dot * normalY) * BOUNCE_FACTOR;
		}

		// This continues the animation loop
		if (browser) {
			animationFrame = requestAnimationFrame(updateDroplet);
		}
	}

	onMount(() => {
		if (browser) {
			initializeMotion();
			updateDroplet();
		}
	});

	onDestroy(() => {
		if (browser && animationFrame !== null) {
			cancelAnimationFrame(animationFrame);
		}
	});
</script>

<svelte:window
	onmousemove={mouseMove}
	onmousedown={() => (scale = 1.25)}
	onmouseup={() => (scale = 1)}
/>

<div
	class="raindrop"
	style="transform: translateX({mouseX - 15}px) translateY({mouseY - 15}px) scale({scale}) rotate(-90deg)"
	style:opacity={$cursorVisible ? opacity : 0}
>
	<div
		class="water-droplet"
		style="transform: translate({dropletX - 15}px, {dropletY - 15}px)">
	</div>
</div>

<style lang="scss">
  .raindrop {
    left: 0;
    top: 0;
    height: 30px;
    width: 30px;
    position: fixed;
    z-index: 30;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s all var(--bezier-one); // Originally: 0.3s opacity var(--bezier-one), 0.3s scale var(--bezier-one)

    /* Create the raindrop shape */
    background: transparent;
    border: 1px solid #38999d;
    border-radius: 50% 0 50% 50%;
    overflow: hidden;

    /* This hides the cursor on touch devices */
    @media (pointer: coarse) {
      display: none;
    }
  }

  .water-droplet {
    position: absolute;
    width: 10px;
    height: 10px;
    background: transparent;
    border: 1px solid var(--white-two);
    border-radius: 50%;
    opacity: 0.5;
  }
</style>
