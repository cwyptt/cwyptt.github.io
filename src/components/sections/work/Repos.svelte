<script lang="ts">
	import { onMount } from 'svelte';
	import type { Repo } from '../../../types/types.ts';

	let repos: Repo[] | null | undefined = $state();

	// Prevent mousedown selection
	function preventSelect(event: MouseEvent) {
		if (event.detail > 1) { // prevent double click selection
			event.preventDefault();
		}
	}

	// Helper function to clean regular strings by normalizing whitespace
	function cleanString(str: string): string {
		return str?.trim().replace(/\s+/g, ' ') ?? '';
	}

	// Helper function specifically for cleaning GitHub URLs
	function cleanGitHubUrl(url: string): string {
		// Remove all whitespace characters completely from the URL
		return url?.replace(/\s+/g, '') ?? '';
	}

	// Helper function to clean repository data
	function cleanRepoData(repo: any): Repo {
		return {
			...repo,
			repo: cleanString(repo.repo),
			link: cleanGitHubUrl(repo.link),
			description: cleanString(repo.description)
		};
	}

	onMount(async () => {
		try {
			const response = await fetch('https://gh-pinned-repos.egoist.dev/?username=cwyptt');
			const rawData = await response.json();
			// Clean the data before assigning to repos
			repos = rawData.map(cleanRepoData);
		} catch (error) {
			console.error('Error fetching repository data:', error);
		}
	});
</script>

<section class="wrapper" id="work">
	<div class="title">
		<h2><span>code</span>:work</h2>
	</div>
	<div class="grid">
		{#if repos}
			{#each repos as { link, owner, repo, description, languageColor, language, stars, forks }}
				<a href={link} target="_blank" rel="noreferrer"
					 ondragstart={((event) => event.preventDefault())}
					 onmousedown={preventSelect}
					 draggable="false"
				>
					<div class="repo-card">
						<div id="top-part">
							<div class="info">
								<img
									src="https://github.com/{owner}.png"
									alt="{owner}'s profile picture"
									id="pfp"
								/>
								<h6>{owner}</h6>
							</div>
							<div class="open-icon">
								<img src="icons/open.svg" alt="open in new tab" id="open" />
							</div>
						</div>
						<div>
							<h3>{repo}</h3>
							<h6>{description}</h6>
						</div>
						<div
							class="info-container"
						>
							<div
								class="info"
							>
								<span
									class="dot"
									style="background-color: {languageColor}"
								>
								</span>
								<h6>{language}</h6>
							</div>
							<div
								class="info"
							>
								{#if stars}
									<img
										src="icons/star.svg"
										id="star"
										alt="star"
									/>
									<h6>{stars}</h6>
								{/if}
							</div>
							<div class="info">
								{#if forks}
									<img src="icons/fork.svg" id="fork" alt="fork" />
									<h6>{forks}</h6>
								{/if}
							</div>
						</div>
					</div>
				</a>
			{/each}
		{:else}
			<div class="repo-card shimmer"></div>
			<div class="repo-card shimmer"></div>
			<div class="repo-card shimmer"></div>
			<div class="repo-card shimmer"></div>
		{/if}
	</div>
</section>

<style lang="scss">
	@use '../../../styles/mixins';

  .title {
    display: flex;
    justify-content: center;
    margin-top: 0;

    h2 {
      font-size: 3.5rem;
      line-height: 1.2;
      letter-spacing: -0.02em;

      span {
        color: var(--brighter);
        //margin-right: 0.2em;
      }
    }

    @media (max-width: 868px) {
      justify-content: left;

      h2 {
        font-size: clamp(2.5rem, 5vw, 3.5rem);
      }
    }
  }
  .repo-card {
    padding: 1rem 1.25rem;
    background-color: var(--neutral-two);
    border-radius: 8px;
    min-height: 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    transition: transform 0.3s var(--bezier-one), box-shadow 0.3s var(--bezier-one), filter 0.3s var(--bezier-one);;
    justify-content: space-between;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-blend-mode: overlay;
    border: 1px solid var(--neutral-four);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15 25 -10 rgba(0, 0, 0, 0.25);
      filter: brightness(110%);
    }
  }

  .shimmer {
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: shimmer;
    animation-timing-function: linear;
    background: #ddd;
    background: linear-gradient(
                    to right,
                    var(--neutral-two) 8%,
                    var(--neutral-one) 18%,
                    var(--neutral-two) 33%
    );
    background-size: 1200px 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: -1200px 0;
    }
    100% {
      background-position: 1200px 0;
    }
  }

  a {
    text-decoration: none;
    color: var(--white);
    height: 100%;
    border-radius: 8px;
  }

  img {
    height: 16px;
    width: auto;
  }

  h2 {
    display: inline-block;
    margin-bottom: 1rem;
  }

  #star {
    transform: translateY(-1px);
  }

  #fork {
    height: 17px;
  }

  #pfp {
    border-radius: 50%;
    height: 16px;
  }

  #top-part {
    display: flex;
    justify-content: space-between;
  }

  #open {
    height: 20px;
    transition: filter 0.3s var(--bezier-one);
  }

  span {
    color: var(--brighter);
  }

  .grid {
    gap: 0.8rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 3rem;
    position: relative;

    &:before {
      @include mixins.outlineText($content: '⤬', $translateX: 760%, $translateY: -35%);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 868px) {
      margin-bottom: 2rem;
    }
  }

  .dot {
    height: 11px;
    width: 11px;
    border-radius: 50%;
    display: inline-block;
  }

  .info {
    display: flex;
    gap: 0.2rem;
    align-items: center;

    &-container {
      display: flex;
      gap: 0.9rem;
    }
  }
</style>
