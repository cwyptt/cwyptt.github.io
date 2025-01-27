export class BackgroundAudioManager {
	private readonly audio1: HTMLAudioElement;
	private readonly audio2: HTMLAudioElement;

	constructor() {
		this.audio1 = this.createAudioElement();
		this.audio2 = this.createAudioElement();
	}

	private createAudioElement(): HTMLAudioElement {
		const audio = new Audio('sounds/rain-excuse-consuela.mp3');
		audio.loop = true;
		audio.volume = 0.3;
		audio.preload = 'auto';
		audio.muted = false;
		audio.setAttribute('playsinline', '');
		audio.setAttribute('webkit-playsinline', '');
		return audio;
	}

	async startPlayback() {
		try {
			await this.audio1.play();

			// Add event listeners for continuous playback
			this.audio1.addEventListener('pause', () => this.handlePause(this.audio1));
			this.audio1.addEventListener('ended', () => this.handleEnded(this.audio1));

			// Backup audio element
			this.audio2.addEventListener('pause', () => this.handlePause(this.audio2));
			this.audio2.addEventListener('ended', () => this.handleEnded(this.audio2));
		} catch (error) {
			console.error('Failed to start rain audio:', error);

			// Fallback: Try playing on first user interaction
			document.addEventListener('click', () => this.audio1.play(), { once: true });
		}
	}

	private handlePause(audio: HTMLAudioElement) {
		audio.play().catch(() => {});
	}

	private handleEnded(audio: HTMLAudioElement) {
		audio.play().catch(() => {});
	}
}