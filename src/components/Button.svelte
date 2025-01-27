<script lang="ts">
	let { side = false, children, onclick, onkeydown } = $props();
</script>

<button onclick={onclick} onkeydown={onkeydown} class:button-with-side={side}>
	<span class:side></span>
		{@render children?.()}
</button>

<style lang="scss">
  button {
    border-radius: 16px;
    display: flex;
    position: relative;
    flex-direction: row;
    width: max-content;
    //cursor: pointer;
    background-color: var(--neutral-one);
    transition: filter 0.2s var(--bezier-one), transform 0.5s var(--bezier-one);
    user-select: none;
    -webkit-user-select: none;
    margin: 0;
    padding: 1rem 2rem;
    color: var(--brighter);
    font-weight: 300;
    font-size: 1.6rem;
    letter-spacing: -0.075em;
    border: 1px solid var(--neutral-four);

    &:active {
      transform: scale(95%);
    }

    &:hover {
      filter: brightness(110%);
      //cursor:none;
    }

    @media screen and (max-width: 868px) {
      text-align: center;
      justify-content: center;
      padding: 1rem 2rem;
      width: 100%;
      font-size: clamp(1.1rem, 2vw, 1.9rem);
    }
  }

  .button-with-side {
    padding: 1rem 2rem 1rem 3rem;
  }

  .side {
    position: absolute;
    border-radius: 16px 0 0 16px;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 1.6rem;
    background-color: var(--brighter);

    @media screen and (max-width: 868px) {
      display: none;
    }
  }
</style>
