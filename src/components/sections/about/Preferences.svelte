<script lang="ts">
  import Tooltip from '../../ui/Tooltip.svelte';
  import tooltipInfo from '$lib/data/tooltips';

// Preferences data structure
// const preferences = {
//       os: {
//           title: "Operating System",
//           value: "Void Linux",
//           tooltip: "A rolling release, however stable, Linux distribution utilizing Runit as the init system."
//       },
//       wm: {
//           title: "Window Manager",
//           value: "SwayFX",
//           tooltip: "Sway - An i3-compatible Wayland compositor. SwayFX - Sway, but with eye candy."
//       },
//       editor: {
//           title: "Text Editor",
//           value: "Emacs (Spacemacs)",
//           tooltip: "Emacs with the Spacemacs distribution for Vim emulation and enhanced productivity."
//       },
//       terminal: {
//           title: "Terminal Emulator",
//           value: "Foot (Client)",
//           tooltip: "Lightweight terminal emulator for Wayland and uses a client-server architecture."
//       }
//   };

  const preferences = {
      os: {
          title: "Operating System",
          ...tooltipInfo.preferences.os
      },
      wm: {
          title: "Window Manager",
          ...tooltipInfo.preferences.wm
      },
      editor: {
          title: "Text Editor",
          ...tooltipInfo.preferences.editor
      },
      terminal: {
          title: "Terminal Emulator",
          ...tooltipInfo.preferences.terminal
      }
  }
</script>

<section id="preferences" class="wrapper">
    <div class="text">
        <h3>Preferences</h3>
        <p class="preferences-description">
            Here are my go-to tools and preferences for administration, development, and daily computing tasks.
        </p>

        <div class="preferences-section">
            <div class="preferences-grid">
                {#each Object.entries(preferences) as [key, pref]}
                    <div class="preferences-item">
                        <span class="preference-label">{pref.title}:</span>
                        <Tooltip tip="{pref.tooltip}">
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
        gap: 1.5rem;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 868px) {
            grid-template-columns: 1fr;
        }
    }

    .preference-item {
        display: grid;
        grid-template-columns: 10rem 1fr;
        align-items: center;
        gap: 1rem;

        @media (max-width: 868px) {
            grid-template-columns: 1fr;
            /* flex-direction: column;
               align-items: flex-start;
               gap: 0.5rem; */
        }
    }

    .preference-label {
        font-weight: 600;
        font-family: var(--font-five);
        color: #ffffff;
        font-size: 0.9rem;
        padding: 0.2rem 0.5rem;
        width: fit-content;
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
