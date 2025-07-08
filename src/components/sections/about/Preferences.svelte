<script lang="ts">
  import Tooltip from '../../ui/Tooltip.svelte';
  import { preferences } from '$lib/data/tooltips';

  const myPreferences = Object.values(preferences);

</script>

<section id="preferences" class="wrapper">
    <div class="text">
        <h3>Preferences</h3>
        <p class="preferences-description">
            Here are my go-to tools and preferences for administration, development, and daily computing tasks.
        </p>

        <div class="preferences-section">
            <div class="preferences-grid">
                {#each myPreferences as pref}
                    <div class="preferences-item">
                        <span class="preference-label">{pref.title}:</span>
                        <Tooltip tip={pref.tooltip}>
                            <a href={pref.link} target="_blank" rel="noopener noreferrer" class="preference-link">
                                <span class="preference-value">{pref.text}</span>
                            </a>
                        </Tooltip>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '../../../styles/mixins';

    // Layout
    section {
        margin-bottom: 6rem;
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
                $content: '⚙',
                $translateX: 750%,
                $translateY: 50%,
                $fontSize: 250px,
                $opacity: 0.22
            )
        }
    }

    // Preferences secntion styling
    .preferences-section {
        margin-top: 1rem;
    }

    .preferences-grid {
        display: grid;
        gap: 2.5rem;
        grid-template-columns: 1fr 1fr;
        align-items: start;

        .preferences-item {
            display: flex;
            width: 100%;
        }

    }

    .preference-label {
        font-weight: 600;
        font-family: var(--font-five);
        color: #ffffff;
        font-size: 0.9rem;
        min-width: 9rem;
        padding-right: 0.5rem;
        transition: all 0.3s var(--bezier-one);
        cursor: help;

        &:hover {
            filter: brightness(110%);
        }
    }

    .preference-value {
        font-family: var(--font-five), serif;
        font-size: 0.9rem;
        background-color: var(--neutral-one);
        border-radius: 7px;
        color: var(--brighter);
        padding: 0.2rem 0.5rem;
        width: fit-content;
        transition: all 0.3s var(--bezier-one);
        cursor: help;

        &:hover {
            filter: brightness(110%);
        }
    }

    .preference-link {
        text-decoration: none;
        color: inherit;
    }

    .preferences-description {
        display: grid;
    }

    :global(.preferences-grid .tooltip) {
         left: 50%;
         transform: translateX(-50%) translateY(-120%);
         white-space: nowrap;

        @media (max-width: 868px) {
            // Mobile-specific tooltip styles
            position: absolute;
            left: -75%;
            right: 0;
            transform: translateY(-100%);
            width: 90vw;
            max-width: 200px;
            white-space: normal;
            word-break: break-word;
            margin: 0 auto;
            text-align: center;
        }
    }

    @media (max-width: 868px) {
        .preferences-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;

            .preferences-item {
                display: grid;
                grid-template-columns: 9rem 1fr;
                flex-direction: row;
                align-items: center;
                flex-wrap: wrap;
                gap: 1rem;
            }
        }

        .preference-label {
            min-width: 10rem;
            padding-right: 0.5rem;
        }
        .preference-value {
            width: auto;

        }
        .text::before {
            @include mixins.outlineText(
                $content: '⚙',
                $translateX: 325%,
                $translateY: 55%,
                $fontSize: 200px,
                $opacity: 0.22
            );
        }
    }

</style>
