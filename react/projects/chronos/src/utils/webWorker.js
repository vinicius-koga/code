self.onmessage = function(message) {
	switch(message.data) {
		case 'ok':
			console.log(message.data);
			break;
	}
}