// executes when a message from script.js is received
self.onmessage = function(message) {
	console.log(message.data);

	let sum = 0;
	for (let i = 0; i <= 10_000_000_000; i++) {
		sum += i;
	}

	// send a message to script.js
	self.postMessage(sum);
}