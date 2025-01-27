<script lang="ts">
	import Tooltip from '../components/Tooltip.svelte';
	import Socials from '../components/Socials.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer>
	<hr />
	<div class="wrapper footer-content">
		<div class="footer-main">
			<Socials size="small" />
			<h6>
				Cwypt | ADH &#60;3
				<Tooltip tip="Why, hello there;">
					<span class="version-tag">v0.1</span>
				</Tooltip>
			</h6>
		</div>

		<div class="copyright">
			<p>© {currentYear} Alex Hanson. All rights reserved.</p>
		</div>
	</div>
</footer>

<style lang="scss">
  // Layout structure
  footer {
    padding-bottom: 2.4rem;
  }

	.footer-content {
		display: flex;
		flex-direction: column;
		gap: 2rem; // Space between copyright and the rest of the footer
	}

	.footer-main {
		display: flex;
		justify-content: space-between;
		align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
			gap: 1.5rem;
    }
	}

	// Divider styling
  hr {
    //background-color: var(--neutral-one);
    //opacity: 0.3;

    background-color: transparent;
    height: 1px;
    border: 0;
    width: 100%;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }

	// Typography
	h6 {
		text-align: center;
		line-height: 2.5rem;
		margin-top: 0;
	}

	.version-tag {
		font-family: var(--font-two),serif;
		background-color: var(--neutral-one);
		border-radius: 7px;
		padding: 0.15rem 0.5rem 0.15rem;
		width: fit-content;
		margin-left: 1rem;
		margin-right: 0.4rem;
	}

	// Copyright section
  .copyright {
    text-align: center;
    opacity: 0.5;
    transition: opacity 0.3s var(--bezier-one);

    &:hover {
      opacity: 1;
    }

    p {
      font-size: 0.9rem;
      color: var(--white-two);
      font-family: var(--font-two),serif;
      letter-spacing: -0.02em;
      margin: 0;
    }
  }
</style>
