export async function initializeClickSound(): Promise<() => void> {

	const clickSound: string = 'sounds/click.wav';

	try {
		const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
		const response = await fetch(clickSound);
		const arrayBuffer = await response.arrayBuffer();
		const clickBuffer = await audioContext.decodeAudioData(arrayBuffer);

		return () => {
			if (!audioContext || !clickBuffer) return;
			const source = audioContext.createBufferSource();
			source.buffer = clickBuffer;
			source.connect(audioContext.destination);
			source.start(0);
		};
	} catch (error) {
		console.error('Failed to initialize click sound:', error);
		return () => {};
	}
}