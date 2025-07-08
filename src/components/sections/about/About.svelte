<script lang="ts">
	import Tooltip from '../../ui/Tooltip.svelte';
	import { getAge, getYearsOld } from '$lib/utils/getAge.ts';
	import { onDestroy } from 'svelte';
  import tooltipInfo from '$lib/data/tooltips';

	// Age update configuration
	const AGE_CONFIG = {
		unit: 'seconds',
		updateDelay: 0.5 * 1000,
		tooltipFadeDelay: 200
	};

	// Age state management
	let age = $state('');
	let updateInterval: NodeJS.Timeout | null = null;

	function updateAge() {
		if (updateInterval) clearInterval(updateInterval);

		age = getAge(AGE_CONFIG.unit);
		updateInterval = setInterval(() => {
			if (updateInterval) age = getAge(AGE_CONFIG.unit);
		}, AGE_CONFIG.updateDelay);
	}

	function pauseAge() {
		if (!updateInterval) return;

		clearInterval(updateInterval);
		updateInterval = null;

		setTimeout(() => {
			age = '';
		}, AGE_CONFIG.tooltipFadeDelay);
	}

	onDestroy(pauseAge);
</script>

<section id="about" class="wrapper">
	<div class="text">
		<h3>Bio</h3>
		<p>
			Hey, my name is Alex and I'm
			<Tooltip tip={age}>
				<span aria-hidden="true" onmouseenter={updateAge} onmouseleave={pauseAge}>
					{getYearsOld()}
				</span>
			</Tooltip> years old. I graduated from Bossier Parish Community College in December of
			<span>2023</span> with a degree in Cybersecurity, maintaining a 3.8 GPA throughout my studies.
			My passion for technology started early, fueled by a fascination with computers and the
			concept of programming. This interest deepened in high school as I earned my
			<Tooltip tip={tooltipInfo.certification.tooltip}>
				<a href={tooltipInfo.certification.link} target="_blank" rel="noopener noreferrer">
					<span>{tooltipInfo.certification.text}</span>
				</a>
			</Tooltip> certification, alongside Java Programming and IT Fundamentals classes at the
			<Tooltip tip={tooltipInfo.cctc.tooltip}>
				<a href={tooltipInfo.cctc.link} target="_blank">
					<span>{tooltipInfo.cctc.text}</span>
				</a>
			</Tooltip> — experiences that solidified my choice of a career in computer science.
		</p>

		<!-- <div class="skills-section">
			   <h3>Skills</h3>
			   <div class="skills-grid">
				 {#each Object.values(skills) as category}
				 <div class="tooltip-wrapper">
				 <Tooltip tip={category.tooltip}>
         <span class="skill-category">
         {category.title}
         </span>
				 </Tooltip>
				 </div>
				 {/each}
			   </div>
		     </div> -->
	</div>
</section>

<style lang="scss">
	@use '../../../styles/mixins';

	// Layout
	section {
		margin-bottom: 3rem;
		display: grid;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;

		@media (max-width: 868px) {
			display: flex;
			flex-direction: column;
			align-items: normal;
		}
	}

	// Bio content
	.text {
		position: relative;
		line-height: 1.75rem;

		&::before {
			@include mixins.outlineText(
				$content: '╭',
				$translateX: 630%,
				$translateY: -5%,
				$fontSize: 150px,
				$opacity: 0.22
			);
		}
	}

	// Skills section styling
	.skills-section {
		margin-top: 3rem;

		h3 {
			margin-bottom: 3rem;
		}
	}

	.skills-grid {
		display: grid;
		flex-wrap: wrap;
		gap: 2.5rem;

		//:global(.tooltip) {
		//  left: 0;
		//  transform: translate(0, -120%);
		//}
	}

	.tooltip-wrapper {
		width: fit-content;
	}

	.skill-category {
		font-family: var(--font-two), serif;
		font-size: 0.9rem;
		background-color: var(--neutral-one);
		border-radius: 7px;
		color: var(--brighter);
		padding: 0.2rem 0.5rem;
		transition: all 0.3s var(--bezier-one);
		width: fit-content;

		//&:hover {
		//  filter: brightness(110%)
		//}
	}

	:global(.skills-grid .tooltip) {
		left: 50%;
		transform: translateX(-50%) translateY(-120%);
		white-space: nowrap;
	}

	@media (max-width: 868px) {
		.skills-grid {
			//justify-content: center;
			align-items: center;
		}
	}

	// Interactive elements
	span {
		font-weight: 400;
		font-family: var(--font-two), serif;
		font-size: 0.9rem;
		background-color: var(--neutral-one);
		border-radius: 7px;
		color: var(--brighter);
		padding: 0.2rem 0.5rem 0.2rem;
		width: fit-content;
	}

	a {
		text-decoration: none;
	}
</style>
