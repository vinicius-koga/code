class Company {
	surname: string = 'Koga'

	constructor(
		public readonly name: string
	) {}
}

const c1 = new Company('Vinicius');

console.log(c1);