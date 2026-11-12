class Pessoa {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	falar() {
		console.log(`${this.name} ${this.surname} está falando.`)
	}
}

const p1 = new Pessoa('Vinicius', 'Koga');
console.log(p1);