function returnFunction() {
	const nome = 'Vinicius';
	return () => {
		return nome;
	}
}

const myFunction = returnFunction();
const name = myFunction();

console.log(name);