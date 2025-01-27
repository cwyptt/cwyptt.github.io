<script lang="ts">
	// import { base } from '$app/paths';

	let zoom: boolean = $state(false);
	let xRotation: number = $state(0);
	let yRotation: number = $state(0);
	let img;

	function enterRotate3D(e: MouseEvent) {
		zoom = true;
		img = e.target as HTMLDivElement;
		yRotation = 13 * ((e.offsetX - img.clientHeight / 2) / img.clientWidth);
		xRotation = -13 * ((e.offsetY - img.clientWidth / 2) / img.clientHeight);
	}

	function leaveRotate3D() {
		zoom = false;
		yRotation = 0;
		xRotation = 0;
	}
</script>

<div class="img-container">
	<div
		role="img"
		aria-label="Cat looking out the window as it rains"
		onmousemove={enterRotate3D} onmouseleave={leaveRotate3D}
		class="img"
		style:background-image="url(resources/cat_window_rain.gif)"
		style:transform="perspective(500px) {zoom ? 'scale(0.9)' : ''} rotateX({xRotation}deg) rotateY({yRotation}deg)"
	>
	</div>
</div>

<style lang="scss">
	@use "../styles/animations";

  .img {
    border-radius: 48px;
    width: 425px;
    height: 400px;
    z-index: 1;
    display: block;
    transition: width 0.4s var(--bezier-one), transform 0.4s var(--bezier-one);
    align-self: start;
    background-color: var(--neutral-one);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      display: none;
    }

    @media (max-width: 1240px) {
      width: clamp(340px, 40vw, 425px);
      height: clamp(300px, 40vw, 400px);
    }
  }

  .img-container {
    z-index: 1;
    animation: img-float 6s ease-in-out infinite;
    animation-play-state: running;

    @media (max-width: 1240px) {
      display: flex;
      justify-content: center;
    }
  }
</style>