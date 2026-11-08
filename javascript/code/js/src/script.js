const btnCalc = document.querySelector('.btn-calc');
const btnBg = document.querySelector('.btn-bg');

// initialize Worker (path is relative to the html file)
const worker = new Worker('./src/worker.js');

btnCalc.addEventListener('click', () => {
	// send a message to worker.js
	worker.postMessage('worker started running!');
});

// executes when a message from worker.js is received
worker.onmessage = function(message) {
	console.log('worker finished running!');
	console.log(message.data);
}

// I can change the body background even if worker.js still running.
btnBg.addEventListener('click', () => {
    document.body.classList.toggle('bg-black');
});