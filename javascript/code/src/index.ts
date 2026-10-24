const showTime = setInterval(() => {
	let date = new Date();
	console.log(date.toLocaleString('pt-BR', {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	}))
}, 1000);

setTimeout(() => {
	clearInterval(showTime)
}, 6000);