<script lang="ts">
	import { page } from '$app/state';
	let status = page.status;
</script>

<div class="wrapper">
	<h1>{status}</h1>
	<h4>{page.error?.message}</h4>
</div>

<style lang="scss">
  div {
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
