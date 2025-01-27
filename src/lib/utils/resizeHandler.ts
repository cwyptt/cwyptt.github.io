export function handleResize() {
	const classes = document.querySelector('body')?.classList;
	let resizeTimer: number | undefined;

	window.addEventListener('resize', () => {
		if (resizeTimer === undefined) {
			classes?.add('stop-transitions');
		} else {
			clearTimeout(resizeTimer);
		}

		resizeTimer = window.setTimeout(() => {
			classes?.remove('stop-transitions');
			resizeTimer = undefined;
		}, 100);
	});
}