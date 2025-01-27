<script lang="ts">
	import Social from './Social.svelte';
	import { base } from '$app/paths';

	interface Props {
		size: 'small' | 'normal';
	}

	let { size = 'normal' }: Props = $props();

</script>

<div class="socials-container">
	<div class="socials">
		<Social icon="github" tip="cwyptt" link="https://github.com/cwyptt" {size} />
		<Social icon="linkedin" tip="alexdavidhanson" link="https://linkedin.com/in/alexdavidhanson" {size} />
		<Social icon="email" tip="alex.d.hanson@outlook.com" link="mailto:alex.d.hanson@outlook.com" {size} />
	</div>

	<div class="separator" aria-hidden="true">|</div>

	<div class="resume">
		<Social icon="resume" tip="View Resume" link="{base}/resources/resume.pdf" {size} />
	</div>
</div>

<style lang="scss">
  // Container layouts
  .socials-container {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .socials {
    display: flex;
    gap: 0.75rem;
  }

  .resume {
    margin-left: 0.25rem;
  }

  // Separator styling
  .separator {
    --separator-color: #228eb5;

    color: var(--separator-color);
    opacity: 0.5;
    font-weight: 200;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    user-select: none;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      padding: 0 0.25rem;
    }
  }
</style>
