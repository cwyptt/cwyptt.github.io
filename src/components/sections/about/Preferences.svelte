<script lang="ts">
  import Tooltip from '../../ui/Tooltip.svelte';

  // Preferences data structure
  const preferences = {
      os: {
          title: "Operating System",
          value: "Void Linux",
          tooltip: "A rolling release Linux distribution utilizing Runit as the init system."
      },
      editor: {
          title: "Text Editor",
          value: "Emacs (Spacemacs)",
          tooltip: "Emacs with the Spacemacs distribution for Vim emulation and enhanced productivity."
      },
      terminal: {
          title: "Terminal Emulator",
          value: "Foot (Client)",
          toolip: "Lightweight terminal emulator for Wayland and uses a client-server architecture."
      }
  };
</script>

<section id="preferences" class="wrapper">
    <div class="text">
        <h3>Preferences</h3>
        <p>
            Here are my go-to tools and preferences for administration, development, and daily computing tasks,
            These choices reflect my focus on efficiency, customization, and open-source solutions.
        </p>

        <div class="preferences-section">
            <div class="preferences-grid">
                {#each Object.entries(preferences) as [key, pref]}
                    <div classs="preferences-item">
                        <span class="preference-label">{pref.title}:</span>
                        <Tooltip tip="{pref.tooltip}">
                            <span class="preference-value">{pref.value}</span>
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
                $content: '⚙',
                $translateX: 630%,
                $translateY: -5%,
                $fontSize: 150px,
                $opacity: 0.22
            )
        }
    }

    // Preferences secntion styling
    .preferences-section {
        margin-top: 3rem;
    }

    .preferences-grid {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 1fr;
    }

    .preference-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;

        @media (max-width: 868px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
    }

    .perference-label {
        font-weight: 400;
        font-family: var(--font-two), serif;
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

    // Tooltip positioning for preferences
    :global(.preferences-grid .tooltip) {
         left: 50%;
         transform: translateX(-50%) translateY(-120%);
         white-space: nowrap;
    }

    @media (max-width: 868px) {
        .preferences-grid {
            align-items: center;
        }
    }
</style>
