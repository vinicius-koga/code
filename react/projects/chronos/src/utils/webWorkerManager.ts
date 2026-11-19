let instance: WebWorkerManager | null = null

export class WebWorkerManager {
	//constructor
	private worker: Worker;
	private constructor() {
		this.worker = new Worker(new URL('./webWorker.js', import.meta.url))
	}

	//static methods
	static getInstance() {
		if(!instance) {
			instance = new WebWorkerManager();
		}
		return instance
	}

	//methods
	postMessage(message: any) {
		this.worker.postMessage(message)
	}
	onMessage(callback: (message: MessageEvent) => void) {
		this.worker.onmessage = callback
	}
	terminate() {
		this.worker.terminate();
		instance = null;
	}
}