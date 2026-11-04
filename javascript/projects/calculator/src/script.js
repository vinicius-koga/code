function Calculator() {
	this.input = document.querySelector('#input');

	this.init = () => {
		document.addEventListener('click', (e) => {
			const el = e.target;
			if (el.classList.contains('btn-value')) this.addValue(el);
			else if (el.classList.contains('btn-erase')) this.eraseValue();
			else if (el.classList.contains('btn-clear')) this.clearInput();
			else if (el.classList.contains('btn-result')) this.showResult();
		})
	}
	this.addValue = (el) => {
		this.input.value += el.innerText;
	}
	this.eraseValue = () => {
		this.input.value = this.input.value.slice(0, -1);
	}
	this.clearInput = () => {
		this.input.value = '';
	}
	this.showResult = () => {
		try {
			this.input.value = eval(this.input.value);
		} catch (err) {
			alert(err);
			this.clearInput();
		}
	}
}

const calc = new Calculator();
calc.init();